import { watchlist } from "../interfaces/watchlist";
import { WatchlistWithItems } from "./WatchlistWithItems";
export interface MediaCardProps {
  mediaType: string;

  mediaId: number;

  watchlists: WatchlistWithItems[];

  className: string;
}
