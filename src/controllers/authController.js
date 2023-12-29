const {
  clientId,
  clientSecret,
  redirectUri,
  scopes,
} = require("../../config/api.config");

const querystring = require("querystring");
const request = require("request");
const { generateRandomString } = require("../helpers/randomString");

exports.auth = (req, res) => {
  const state = generateRandomString(16);
  const scope = scopes;

  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: clientId,
        scope: scope,
        redirect_uri: redirectUri,
        state: state,
      })
  );
};

exports.authCallback = function (req, res) {
  const code = req.query.code || null;
  const state = req.query.state || null;

  if (state === null) {
    res.redirect(
      "/" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      },
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          new Buffer.from(clientId + ":" + clientSecret).toString("base64"),
      },

      json: true,
    };
    request.post(authOptions, function (error, response, body) {
      // if (error) {
      //   console.error("Error in token request:", error);
      //   res.redirect(
      //     "/#" + querystring.stringify({ error: "token_request_error" })
      //   );
      //   return;
      // }
      // if(error.status === 401){
      //   console.log('hey')
      // }
      // if (response.statusCode !== 200) {
      //   console.error(
      //     "Token request failed with status code:",
      //     response.statusCode
      //   );
      //   res.redirect(
      //     "/#" + querystring.stringify({ error: "invalid_token_request" })
      //   );
      //   return;
      // }

      // Process the successful response here
      const { access_token, refresh_token } = body;
      //   store it in cookies

      res.cookie("refreshToken", refresh_token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.cookie("accessToken", access_token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.redirect("/");
    });
  }
};
