import React, { useState, useEffect } from "react";
import axios from "axios";
import Icon from "./Icon.png";
import "./Banner.css";

const API_KEY = "3f44a75534292b8d16765e12e6e37d7";
const API_BASE_URL = "https://api.themoviedb.org/3/search/keyword";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Function to fetch movie data when the query changes
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        if (query.trim() === "") {
          setSearchResults([]);
          setLoading(false);
          return;
        }

        const response = await axios.get(API_BASE_URL, {
          params: {
            api_key: API_KEY,
            language: "en-US",
            query: query,
            page: 1, // You can implement pagination if needed
          },
        });

        setSearchResults(response.data.results);
        setLoading(false);
      } catch (error) {
        setError("An error occurred while fetching data.");
        setLoading(false);
      }
    };

    // Call the fetchMovies function when the query changes
    fetchMovies();
  }, [query]);
  //api.themoviedb.org/3/search/movie?api_key=$
  return (
    <div>
      <div className="navbar-search">
        <input
          className="search-input"
          type="text"
          placeholder="Search for movies by title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <img src={Icon} alt={Icon} className="bannerIcon" />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="movie-results">
        {searchResults.map((movie) => (
          <div key={movie.id} className="movie-result">
            <img
              src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>Release Date: {movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;
