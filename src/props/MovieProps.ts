import { MovieModel } from "../models";

export interface MovieProps {
    movie: MovieModel;
    onMovieClick: (movieId: number) => void;
}