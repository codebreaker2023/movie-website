import React from 'react'
import { Star } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

// Project Dependencies
import RatingProps from '../props/RatingProps'

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
        <Typography>{rating.toFixed(1)}</Typography>
    </Box>
  )
}

export default Rating
