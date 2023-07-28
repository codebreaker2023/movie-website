import MovieModel from "../models/MovieModel";

export const fetchMovies = async (
  name: string
): Promise<MovieModel[] | null> => {
  name = name.trim().toLowerCase().replace(" ", "%");
  const url = `${process.env.REACT_APP_BASE_URL}?query=${name}`;
  const headers = {
    Authorization: `Bearer ${process.env.REACT_API_TOKEN}`,
  };
  const response = await fetch(url, { headers });
  const json = await response.json();
  let movies = json.results as MovieModel[];
  if (!Array.isArray(movies)) {
    return null;
  }
  movies = movies.filter((movie) => movie.poster_path != null);
  movies = movies.map((movie) => ({
    ...movie,
    poster_path: `${process.env.REACT_APP_BASE_IMG_URL}${movie.poster_path}`,
  }));

  return movies;
};
