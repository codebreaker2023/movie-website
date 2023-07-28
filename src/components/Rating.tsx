import { Star } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

interface RatingProps {
    rating: number
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <Box 
      sx={{
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "100px",
        padding: "10px"
    }}>
        <Star color="primary"/>
        <Typography>{rating}</Typography>
    </Box>
  )
}

export default Rating
