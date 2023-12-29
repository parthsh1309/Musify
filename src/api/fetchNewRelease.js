const { BaseUrl, defaultLimit } = require("../../config/api.config");


const fetchNewRelease = async (accessToken) => {
  try {
    const result = await fetch(
      `${BaseUrl}/browse/new-releases?country=IN&limit=${defaultLimit}`,
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


module.exports = fetchNewRelease