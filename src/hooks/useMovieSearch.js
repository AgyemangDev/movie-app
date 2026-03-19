import { useState } from "react";
import { fetchMovies } from "../services/movieService";

export function useMovieSearch() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async (title) => {
    if (!title?.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const results = await fetchMovies(title);
      setMovies(results);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return { movies, loading, error, searchMovies };
}
