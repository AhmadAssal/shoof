import axios from "axios";
import { WatchlistWithItems } from "../../interfaces/WatchlistWithItems";

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

export const removeItemFromWatchlist = async (
  tmdb_id: number,
  watchlist_id: number,
  token: string
) => {
  const userData = {
    tmdb_id,
    watchlist_id,
  };
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const url: string =
    process.env.NEXT_PUBLIC_BACKEND! + "api/remove-watchlist-item";

  try {
    const response = await axios.post(url, userData, config);
    return response;
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};

export const isInWatchlist = (
  tmdb_id: number,
  watchlist: WatchlistWithItems
) => {
  const items = watchlist.items;

  const found = items.find((item) => item.tmdb_id === tmdb_id);

  return found ? true : false;
};
