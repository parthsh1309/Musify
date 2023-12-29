const fetchRecommendations = require("../api/fetchRecommendations");
const fetchFollowedArtists = require("../api/fetchFollowedArtists");
const fetchNewRelease = require("../api/fetchNewRelease");
const fetchFeaturedPlaylist = require("../api/fetFeaturedPlaylist");

exports.homePage = async (req, res) => {
  try {
    const { accessToken, refreshToken } = req.cookies;
    if (accessToken && refreshToken) {
      const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      let userData = await result.json();

      // console.log(userData);
      if (userData.error) {
        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");
        return res.redirect("/login");
      } else {
        // getting recommendations
        const recommendationsData = await fetchRecommendations(accessToken);
        
        // getting followed artists
        const followedArtistsData = await fetchFollowedArtists(accessToken);

        // getting New Release
        const newReleaseData = await fetchNewRelease(accessToken);

        // getting Featured Playlists
        const featuredPlaylistData = await fetchFeaturedPlaylist(accessToken);
        console.log(featuredPlaylistData.playlists.items[1]);

        res.render("home", {
          name: userData.display_name,
          image: userData.images[0].url,
          userRecommendations: recommendationsData.tracks,
          artists: followedArtistsData.artists.items,
          newReleases: newReleaseData.albums.items,
          popularPlaylist: featuredPlaylistData.playlists.items,
        });
      }
    } else if (!accessToken && refreshToken) {
      res.redirect("/refresh_token");
    } else {
      res.redirect("/login");
    }
  } catch (e) {
    console.log(e);
    // if(e.status == 401){
    //   res.redirect("/login");
    // }
  }
};
