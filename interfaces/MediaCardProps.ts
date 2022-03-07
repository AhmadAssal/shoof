import { watchlist } from "../interfaces/watchlist";
export interface MediaCardProps {
  imageUrl: string;

  title: string;

  imdbRating: number;

  trailerUrl: string;

  genres: string[];

  watchlists: watchlist[];
}
