import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import MovieModel from '../models/MovieModel'
import Rating from './Rating'


interface MovieProps {
    movie: MovieModel
}

const Movie: React.FC<MovieProps> = ({ movie }) => {

  return (
    <Card elevation={0} sx={{
        position: "relative",
        borderRadius: "20px",
        minWidth: "250px",
    }}>
        <CardActionArea>
            <CardMedia 
                component="img"
                image={movie.poster_path}
                sx={{height: "400px"}}
            />
            <CardContent sx={{
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                backgroundColor: "orange",
                position: "absolute",
                bottom: "0px",
                width: "100%",
                opacity: "90%",
                minHeight: "150px"
            }}>
                <Typography variant="body1" sx={{fontWeight: "bold", color: "white"}}>{movie.title}</Typography>
                <Rating rating={movie.vote_average}/>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default Movie
