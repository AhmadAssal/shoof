import { Watchlist } from "./Watchlist";
import { WatchlistWithItems } from "../interfaces/WatchlistWithItems";
export type User = {
  created_at: string;
  email: string;
  email_verified_at: string;
  id: number;
  name: string;
  updated_at: string;
  user_id: number;
  watchlists: WatchlistWithItems[];
};
