import { watchlist } from "../interfaces/watchlist";
export interface MediaCardProps {
  mediaType: string;

  mediaId: number;

  watchlists: watchlist[];
}
