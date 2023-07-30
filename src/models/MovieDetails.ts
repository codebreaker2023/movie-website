import { Genre } from "./";

export interface MovieDetails {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  runtime: number;
  release_date: string;
  budget: number;
  genres: Genre[];
  homepage: string;
}
