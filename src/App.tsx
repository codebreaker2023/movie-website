import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";

import { PopUpWindow, SearchResult, MovieList, Header, Footer } from "./components";
import { MovieDetails, MovieModel } from "./models";
import { fetchMovies, fetchMovieById, theme } from "./utils";

function App() {
  const [searchResult, setSearchResult] = useState<MovieModel[] | null>();
  const [search, setSearch] = useState<string>("");
  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);
  const [movieDetails, setMovieDetals] = useState<MovieDetails | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchMovies(search).then((data) => {
      console.log(data);
      setSearchResult(data);
      setSearch("");
    });
  };

  const handleClick = () => {
    fetchMovies(search).then((data) => {
      console.log(data);
      setSearchResult(data);
      setSearch("");
    });
  };

  const handleOnMovieClick = (movieId: number) => {
    setIsPopUpVisible((old) => !old);
    fetchMovieById(movieId).then((data) => setMovieDetals(data));
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ filter: isPopUpVisible ? "blur(10px)" : "none" }}>
        <Header
          value={search}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onClicked={handleClick}
        />
        { searchResult ? (
          <SearchResult
            movies={searchResult}
            onMovieClick={handleOnMovieClick}
          />
        ) : (<></>)}
        <MovieList
          bgColor="transparent"
          title="Favorite Movies"
          favorite="The Hobbit"
          onMovieClick={handleOnMovieClick}
        />
        <MovieList
          bgColor="#0C0C0C"
          title="Favorite Series"
          favorite="The Witcher"
          onMovieClick={handleOnMovieClick}
        />
        <Footer />
      </div>
      {isPopUpVisible && movieDetails ? (
        <PopUpWindow
          setIsPopUpVisible={setIsPopUpVisible}
          movieDetails={movieDetails}
        />
      ) : (
        <></>
      )}
    </ThemeProvider>
  );
}

export default App;
