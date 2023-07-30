import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

import { MovieDetails } from "../../models";
import "./PopUpWindow.css";

interface PopUpWindowProps {
    setIsPopUpVisible: React.Dispatch<React.SetStateAction<boolean>>;
    movieDetails: MovieDetails;
}

const PopUpWindow: React.FC<PopUpWindowProps> = ({ setIsPopUpVisible, movieDetails }) => {

  const handlOnClose = () => {
    setIsPopUpVisible(old => !old)
  }

  return (
    <div className="pop-up-window">
      <div className="container">
        <img
          className="background-poster"
          src={movieDetails.backdrop_path}
          alt={movieDetails.title}
        />
        <div className="details-section">
          <div className="movie-poster">
            <img src={movieDetails.poster_path} alt={movieDetails.title} />
          </div>
          <div className="movie-details">
            <h3 className="headline">{movieDetails.title}</h3>
            <p className="tagline">{movieDetails.tagline}</p>
            <p className="description">{movieDetails.overview}</p>
            <div className="extra-movie-info">
              <h2>Details</h2>
              <div>
                <div className="details-row">
                  <p className="label">Genres</p>
                  <div className="info">
                    {movieDetails.genres.map((item) => (
                      <span key={item.id}>{item.name}</span>
                    ))}
                  </div>
                </div>
                <div className="details-row">
                  <p className="label">Release Date</p>
                  <p className="label-info">{movieDetails.release_date}</p>
                </div>
                <div className="details-row">
                  <p className="label">Budget</p>
                  <p className="label-info">{movieDetails.budget}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <IconButton
          sx={{
            position: "absolute",
            width: "40px",
            height: "40px",
            color: "white",
            top: "30px",
            right: "30px",
            backgroundColor: "rgba(0, 0, 0, 1)",
            ':hover': {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
            }
          }}
          onClick={handlOnClose}
        >
          <Close />
        </IconButton>
      </div>
    </div>
  );
};

export default PopUpWindow;
