import axios from "axios";

export const addItemToWatchlist = async (
  tmdb_id: number,
  rating: number,
  watchlist_id: number,
  name: string,
  is_movie: boolean,
  token: string
) => {
  const userData = {
    tmdb_id,
    rating,
    watchlist_id,
    name,
    is_movie,
  };
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const url: string = process.env.NEXT_PUBLIC_BACKEND! + "api/watchlist-item";
  try {
    const response = await axios.post(url, userData, config);
    return response;
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};
