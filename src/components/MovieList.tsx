import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

// Project Dependencies
import Movie from "./Movie";
import MovieModel from "../models/MovieModel";
import MovieListProps from "../props/MovieListProps";
import { fetchMovies } from "../utils/ApiService";

const MovieList: React.FC<MovieListProps> = ({ title, bgColor, favorite }) => {
  const [movies, setMovies] = useState<MovieModel[] | null>([]);
  useEffect(() => {
    const fetchFavoriteMovies = () => {
      fetchMovies(favorite).then((data) => setMovies(data));
    };
    fetchFavoriteMovies();
  }, [favorite]);

  return (
    <Box sx={{ padding: "100px 20px", backgroundColor: `${bgColor}` }}>
      <Typography
        variant="h4"
        sx={{ color: "white", fontWeight: "bold", marginBottom: "10px"}}
      >
        {title}
      </Typography>
      <Box sx={{ display: "flex", gap: "5px", overflowX: "scroll", padding: "20px 0" }}>
        {movies ? (
          movies.map((movie) => <Movie key={movie.id} movie={movie} />)
        ) : (
          <h1>Doesn't Exist</h1>
        )}
      </Box>
    </Box>
  );
};

export default MovieList;
