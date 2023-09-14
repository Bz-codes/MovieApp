// src/components/Home.js

import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Banner from "./Banner";
import see from "./see.png";
import Footer from "./Footer";

import "./Home.css";

const API_KEY = "f3f44a75534292b8d16765e12e6e37d7"; // Replace with your TMDb API key
const API_BASE_URL = "https://api.themoviedb.org/3";

function Home() {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch the top 10 movies using the TMDb API
        const response = await fetch(
          `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1&results=8`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setTopMovies(data.results);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      }
    };

    fetchTopMovies();
  }, []);

  return (
    <div>
      <Banner />
      <div className="features">
        <h1>Featured Movie</h1>
        <a href="#">
          <img src={see} alt="see" />
        </a>
      </div>

      <div className="card">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <div className="movie-grid">
          {topMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Home;
