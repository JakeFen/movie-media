import { useState } from "react";
import {
  fetchTrendingMovies,
  fetchTrendingShows,
  fetchSearchMovies,
} from "../utils/api/tmdb";

export const useMovieSearch = () => {
  const [trendingMovies, setTrendingMovies] = useState(["test"]);
  const [trendingShows, setTrendingShows] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  // Get top movies when page is loaded
  const trendingMoviesSearch = async () => {
    try {
      const data = await fetchTrendingMovies();
      setTrendingMovies(data.results);
    } catch (error) {
      setError("Error fetching trending movies ", error);
    }
  };

  const trendingShowsSearch = async () => {
    try {
      const data = await fetchTrendingShows();
      setTrendingShows(data.results);
    } catch (error) {
      setError("Error fetching trending shows ", error);
    }
  };

  // Run this and update movies state when a movie is searched
  const movieSearch = async (query) => {
    try {
      setLoading(true);
      const data = await fetchSearchMovies(query);

      setMovies(data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching movies ", error);
    }
  };

  return {
    movieSearch,
    trendingMoviesSearch,
    trendingShowsSearch,
    trendingMovies,
    trendingShows,
    movies,
    loading,
    error,
  };
};
