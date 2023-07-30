import { MovieDetails, MovieModel } from "../models";

export const fetchMovies = async (
  name: string
): Promise<MovieModel[] | null> => {
  name = name.trim().toLowerCase().replace(" ", "%");
  const url = `${process.env.REACT_APP_BASE_URL}?query=${name}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    },
  };

  const response = await fetch(url, options);
  const json = await response.json();
  let movies = json.results as MovieModel[];
  if (!Array.isArray(movies)) {
    return null;
  }
  movies = movies
    .filter((movie) => movie.poster_path != null)
    .map((movie) => ({
      ...movie,
      poster_path: `${process.env.REACT_APP_BASE_IMG_URL}${movie.poster_path}`,
    }));

  return movies;
};

export const fetchMovieById = async (movieId: number): Promise<MovieDetails | null> => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
    },
  };
  const response = await fetch(url, options);
  const json = await response.json();
  
  const movie: MovieDetails = json as MovieDetails;

  if (!movie.backdrop_path) {
    return null
  } 
  movie.backdrop_path = `${process.env.REACT_APP_BASE_IMG_URL}${movie.backdrop_path}`
  movie.poster_path = `${process.env.REACT_APP_BASE_IMG_URL}${movie.poster_path}`
  return movie
};
