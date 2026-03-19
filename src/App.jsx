import { useState } from "react";
import { useMovieSearch } from "./hooks/useMovieSearch";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import EmptyState from "./components/EmptyState";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { movies, loading, error, searchMovies } = useMovieSearch();

  const handleSearch = () => {
    if (searchTerm.trim()) searchMovies(searchTerm);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-display">
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-rose-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <header className="text-center mb-14">
          <div className="inline-block mb-3">
            <span className="text-xs tracking-[0.3em] uppercase text-amber-400/70 font-mono">
              Your personal cinema
            </span>
          </div>
          <h1 className="text-6xl sm:text-7xl font-black tracking-tight leading-none mb-4">
            <span className="text-white">Rai'na</span>
            <span className="text-amber-400"> Movies</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-md mx-auto">
            Discover, explore, and find your next favourite film
          </p>
        </header>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-16">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            onSearch={handleSearch}
          />
        </div>

        {/* Results */}
        {loading ? (
          <Loader />
        ) : error ? (
          <div className="text-center text-rose-400 text-lg">{error}</div>
        ) : movies.length > 0 ? (
          <>
            <p className="text-zinc-500 text-sm mb-6 text-center tracking-wide uppercase font-mono">
              {movies.length} result{movies.length !== 1 ? "s" : ""} found
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          </>
        ) : (
          <EmptyState />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
