const { BaseUrl, defaultLimit } = require("../../config/api.config");

// let limit = 1;

const fetchFollowedArtists = async (accessToken) => {
  try {
    const result = await fetch(
      `${BaseUrl}/me/following?type=artist`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    const artists = await result.json();
    return artists;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    throw error; // Rethrow the error for further handling or logging
  }
};


module.exports = fetchFollowedArtists