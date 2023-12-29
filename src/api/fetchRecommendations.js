const {
  BaseUrl,
  market,
  lowLimit,
  defaultLimit,
} = require("../../config/api.config");

// let limit = 1;

const fetchRecommendations = async (
  accessToken,
  retryCount = 3,
  baseDelay = 1000
) => {
  try {
    const result = await fetch(
      `${BaseUrl}/recommendations?limit=${defaultLimit}&market=${market}&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    if (!result.ok) {
      console.log("Response Headers:", result.headers);
      if (result.status === 429 && retryCount > 0) {
        const delay = baseDelay * Math.pow(2, 3 - retryCount); // Exponential backoff
        console.warn(
          `Rate limit exceeded. Retrying in ${delay / 1000} seconds...`
        );
        await new Promise((resolve) => setTimeout(resolve, delay));
        return fetchRecommendations(accessToken, retryCount - 1, baseDelay);
      } else {
        throw new Error(`HTTP error! Status: ${result.status}`);
      }
    }

    const userRecommendations = await result.json();
    // console.log('Recommendations:', userRecommendations);
    return userRecommendations;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    throw error; // Rethrow the error for further handling or logging
  }
};


module.exports = fetchRecommendations