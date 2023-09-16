import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Banner from "./Banner";
import SideBar from "./SideBar";
import Footer from "./Footer";
import "./MovieDetails.css";
import sis from "./sis.png";
import seven from "./seven.png";
import eight from "./eight.png";

const API_KEY = "f3f44a75534292b8d16765e12e6e37d7";
const API_BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300"; // Base URL for movie posters

function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id);
  }, [id]);

  const fetchMovieDetails = async (movieId) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${API_BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();
      setMovieDetails(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="movie-details-container">
        <SideBar />
        <div className="moviecard">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}

          {movieDetails.poster_path && (
            <img
              src={`${IMAGE_BASE_URL}${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          )}

          {/* Movie details */}
          <div className="movie-details">
            <h2 data-testid="movie-title" className="movie-title">
              {movieDetails.title}
            </h2>
            <p data-testid="movie-release-date" className="pp">
              <li>{movieDetails.release_date} </li>
            </p>
            <p data-testid="movie-runtime" className="pp">
              <li>{movieDetails.runtime} minutes</li>
            </p>
            <div className="overview">
              <p data-testid="movie-overview">{movieDetails.overview}</p>
            </div>
            <div className="check">
              <img src={sis} alt="sis" className="sis" />
              <br />
              <a href="#">
                <img src={seven} alt="seven" className="seven" />
              </a>
              <a href="#">
                <img src={eight} alt="eight" className="eight" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default MovieDetails;
