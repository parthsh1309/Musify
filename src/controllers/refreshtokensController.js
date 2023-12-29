const { clientId, clientSecret } = require("../../config/api.config");
const request = require("request");

exports.refreshToken = function (req, res) {
  var refresh_token = req.cookies.refreshToken;
  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        new Buffer.from(clientId + ":" + clientSecret).toString("base64"),
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const { access_token, refresh_token } = body;

      res.cookie("accessToken", access_token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      // res.cookie('refreshToken', refresh_token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });

      res.redirect("/");
    }
  });
};
