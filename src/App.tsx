import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchResult from './components/SearchResult';
import MovieModel from './models/MovieModel';
import ApiService from './utils/ApiService';


function App() {
  const [searchResult, setSearchResult] = useState<MovieModel[] | null>()
  const [search, setSearch] = useState<string>("")

  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      setSearch(event.target.value)
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const apiService = new ApiService() 
    apiService.fetchMovie(search)
      .then(data => {
        console.log(data)
        setSearchResult(data)
        setSearch("")
      })
  };

  return (
    <div>
        <Header value={search} onChange={ handleChange } onSubmit={ handleSubmit }/>
        {searchResult ? (<SearchResult movies={searchResult} />) : (<></>)}
        <MovieList bgColor="transparent" title="Favorite Movies" favorite="The Hobbit"/>
        <MovieList bgColor="#0C0C0C" title="Favorite Series" favorite="The Witcher"/>
        <Footer />
    </div>
  );
}

export default App;
