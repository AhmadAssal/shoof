import { Item } from "./Item";
export interface WatchlistWithItems {
  id: number;
  name: string;
  user_id: number;
  created_at: string;
  updated_at: string;
  items: Item[];
}
