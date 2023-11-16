import "./App.css";
import { useEffect, useState } from "react";
import searchButton from "./image/search.svg";
import MovieCard from "./MovieCard";



const URL_API = "https://www.omdbapi.com/?i=tt3896198&apikey=48618005";

function App() {
  const [movies, setMovies] = useState("");
  const [searchTerm, setSearchTerm] = useState("")

  const SearchMovies = async (title) => {
    const response = await fetch(`${URL_API}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    SearchMovies();
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input
          placeholder="Search your movie here"
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
          onKeyDown={(e) => {
            if(e.keyCode === 13) {
              SearchMovies(searchTerm)
            }
          }}
        />
        <img src={searchButton} 
        alt="search button"
        onClick={() => SearchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {
            movies.map((movie) => (
               <MovieCard movie={movie} />
            ))
          }
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
