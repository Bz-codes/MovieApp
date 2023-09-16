// src/components/MovieCard.js

import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";
import IMDB from "./IMDB.png";
import Toma from "./Toma.png";
import Favorite from "./Favorite.png";

function MovieCard({ movie }) {
  return (
    <Link
      to={`/movies/${movie.id}`}
      data-testid="movie-poster"
      className="movie-card"
    >
      <img
        src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
        alt={movie.title}
      />
      <img id="fav" src={Favorite} alt="search" />
      <p data-testid="movie-release-date">{movie.release_date}</p>
      <h2 data-testid="movie-title">{movie.title}</h2>
      <div className="details">
        <div className="details1">
          <img src={IMDB} alt="but" />
        </div>
        <div className="details2">
          <img src={Toma} alt="toma" />
        </div>
      </div>
      <p>Action, Adventure</p>
    </Link>
  );
}

export default MovieCard;
