import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MovieModel from '../models/MovieModel'
import Movie from './Movie'

interface SearchResultProps {
    movies: MovieModel[]
}

const SearchResult: React.FC<SearchResultProps> = ({ movies }) => {
  return (
    <Box sx={{padding: "100px 40px", backgroundColor: "#0C0C0C"}}>
        <Typography variant="h3" sx={{color: "white", marginBottom: "20px"}}>Search Result</Typography>
        <Grid container spacing={1}>
            {movies.map(movie => <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3} xl={2.4}><Movie movie={movie} /></Grid>)}
        </Grid>
    </Box>
  )
}

export default SearchResult
