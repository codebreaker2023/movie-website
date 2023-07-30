import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { Movie } from "./"
import { SearchResultProps } from "../props"



const SearchResult: React.FC<SearchResultProps> = ({
  movies,
  onMovieClick,
}) => {
  return (
    <Box color="secondary" sx={{ padding: "100px 40px" }}>
      <Typography variant="h3" sx={{ color: "white", marginBottom: "20px" }}>
        Search Result
      </Typography>
      <Grid container spacing={1}>
        {movies.map((movie) => (
          <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
            <Movie key={movie.id} movie={movie} onMovieClick={onMovieClick} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SearchResult;
