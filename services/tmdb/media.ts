import axios from "axios";
export const getMovie = async (movieId: number) => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_TMDB_MOVIE_URL + "/" + movieId,
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
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

export const getShow = async (showId: number) => {
  try {
    const response = await axios.get(
      process.env.TMDB_SERIES_URL + "/" + showId,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          language: "en-US",
          append_to_response: "videos",
        },
      }
    );
    return { status: "Show data retrieved", data: response.data };
  } catch (error: any) {
    return {
      status: "failed to get show",
      message: error,
    };
  }
};

export const search = async (query: string) => {
  try {
    const response = await axios.get(
      process.env.TMDB_SEARCH_URL + "?query=" + query,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          language: "en-US",
        },
      }
    );
    return { status: "Data retrieved", data: response.data };
  } catch (error: any) {
    return {
      status: "failed to get data",
      message: error,
    };
  }
};

export const getTrending = async () => {
  try {
    const response = await axios.get(process.env.TMDB_TRENDING_URL as string, {
      params: {
        api_key: process.env.TMDB_API_KEY,
        language: "en-US",
      },
    });
    return { status: "Data retrieved", data: response.data };
  } catch (error: any) {
    return {
      status: "failed to get data",
      message: error,
    };
  }
};

const call_search = async () => {
  console.log((await getTrending()).data);
};
call_search();
