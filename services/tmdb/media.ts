const dotenv = require("dotenv");
dotenv.config({ path: ".." + "/.env" });
const axios = require("axios").default;
// console.log(process.env.TMDB_MOVIE_URL);
export const getMovie = async (movieId: number) => {
  try {
    const response = await axios.get(
      process.env.TMDB_MOVIE_URL + "/" + movieId,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          language: "en-US",
          append_to_response: "videos",
        },
      }
    );
    return { status: "Movie data retrieved", data: response.data };
  } catch (error: any) {
    return {
      status: "failed to get movie",
      message: error,
    };
  }
};