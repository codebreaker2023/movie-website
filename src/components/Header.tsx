import { Grid } from '@mui/material'
import React from 'react'
import SearchProps from '../props/SearchProps'
import SearchBar from './SearchBar'


const Header: React.FC<SearchProps> = ({ value, onChange, onSubmit, onClicked }) => {
  return (
    <Grid container sx={{
        backgroundImage: "url(https://cdn.wallpapersafari.com/13/91/t4vwz6.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        }}>
        <SearchBar value={value} onChange={onChange} onSubmit={onSubmit} onClicked={onClicked}/>
    </Grid>
  )
}

export default Header
