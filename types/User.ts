import { Watchlist } from "./Watchlist";

export type User = {
  created_at: string;
  email: string;
  email_verified_at: string;
  id: number;
  name: string;
  updated_at: string;
  user_id: number;
  watchlists: Watchlist[];
};
