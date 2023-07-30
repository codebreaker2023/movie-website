import { MovieModel } from "../models";

export interface SearchResultProps {
    movies: MovieModel[];
    onMovieClick: (movieId: number) => void;
}