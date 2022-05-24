import { Pivot } from "./Pivot";
export interface Item {
  id: number;
  name: string;
  is_movie: boolean;
  tmdb_id: number;
  created_at: string;
  updated_at: string;
  pivot: Pivot;
}
