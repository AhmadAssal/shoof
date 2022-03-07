import { watchlist } from "../interfaces/watchlist";
export interface MediaCardProps {
  mediaType: number;

  mediaId: number;

  imageUrl: string;

  title: string;

  imdbRating: number;

  trailerUrl: string;

  genres: string[];

  watchlists: watchlist[];
}
