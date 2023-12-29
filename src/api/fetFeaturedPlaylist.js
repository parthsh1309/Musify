const { BaseUrl, defaultLimit } = require("../../config/api.config");

const fetchFeaturedPlaylist = async (accessToken) => {
  try {
    const result = await fetch(
      `${BaseUrl}/browse/featured-playlists?country=IN&limit=${defaultLimit}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    const playlists = await result.json();
    return playlists;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    throw error; // Rethrow the error for further handling or logging
  }
};


module.exports = fetchFeaturedPlaylist