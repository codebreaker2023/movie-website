import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { MovieProps } from "../props";
import { Rating } from "./";

const Movie: React.FC<MovieProps> = ({ movie, onMovieClick }) => {
    const onClick = () => {
        onMovieClick(movie.id)
    }
  return (
    <Card
      onClick={onClick}
      elevation={0}
      sx={{
        position: "relative",
        borderRadius: "20px",
        minWidth: "250px",
        scale: 1,
        "&:hover": {
          transform: "scale(1.015)",
          transition: "transform 0.5s ease-in-out",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={movie.poster_path}
          sx={{ height: "400px" }}
        />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            bottom: "0px",
            width: "100%",
            opacity: "90%",
            minHeight: "150px",

            background:
              "linear-gradient(90deg, #211a14b3 20%, rgba(83, 71, 31, 0.5) 100%)",
            transition: "min-height 0.4s ease-out",
            ":hover": {
              minHeight: "400px",
              visibility: "visible",
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", color: "white" }}
          >
            {movie.title}
          </Typography>
          <Rating rating={movie.vote_average} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Movie;
