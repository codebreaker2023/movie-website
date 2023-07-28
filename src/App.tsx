import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { amber } from '@mui/material/colors';


// Project Dependencies
import Footer from './components/Footer';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchResult from './components/SearchResult';
import MovieModel from './models/MovieModel';
import { fetchMovies } from './utils/ApiService';



function App() {
  const [searchResult, setSearchResult] = useState<MovieModel[] | null>()
  const [search, setSearch] = useState<string>("")

  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      setSearch(event.target.value)
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchMovies(search)
      .then(data => {
        console.log(data)
        setSearchResult(data)
        setSearch("")
      })
  };

  const handleClick = () => {
    fetchMovies(search)
      .then(data => {
        console.log(data)
        setSearchResult(data)
        setSearch("")
      })
  }
  
  const theme = createTheme({
    palette: {
      primary: amber,
      secondary: {
        light: "#1a1a1a", 
        main: "#0C0C0C",
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
        <Header value={search} onChange={ handleChange } onSubmit={ handleSubmit } onClicked={handleClick}/>
        {searchResult ? (<SearchResult movies={searchResult} />) : (<></>)}
        <MovieList bgColor="transparent" title="Favorite Movies" favorite="The Hobbit"/>
        <MovieList bgColor="#0C0C0C" title="Favorite Series" favorite="The Witcher"/>
        <Footer />
    </ThemeProvider>
  );
}

export default App;
