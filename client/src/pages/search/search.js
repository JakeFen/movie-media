import "./search.styles.scss";
import { useEffect, useState } from "react";
import { useMovieSearch } from "../../hooks/useMovieSearch";
import Form from "react-bootstrap/Form";

function Search() {
  const [query, setQuery] = useState("");
  const {
    movieSearch,
    trendingMoviesSearch,
    trendingShowsSearch,
    trendingMovies,
    trendingShows,
    movies,
    loading,
    error,
  } = useMovieSearch();

  useEffect(() => {
    let timer;

    if (query.length > 2) {
      timer = setTimeout(() => {
        // Show queried movie when used types in atleast 3 characters
        movieSearch(query);
      }, 500);
    } else if (query.length === 0) {
      // Show top movies when app is loaded or when query is empty
      trendingMoviesSearch();
      trendingShowsSearch();
    }

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    console.log(trendingMovies);
  }, [trendingMovies]);

  return (
    <div className="background--primary page-container">
      <p className="text-white">Search</p>

      <Form.Control
        className="form__control mb-2"
        id="search"
        type="text"
        placeholder="search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />

      <div className="trending__container">
        <div className="trending__movies">
          <p className="text-white">Trending Movies</p>
          <div className="flex flex-row flex-wrap">
            {trendingMovies.map((movie, index) => (
              <div key={index}>
                <img
                  className="poster"
                  src={
                    "https://image.tmdb.org/t/p/original/" + movie.poster_path
                  }
                  alt=""
                />
                {/* <p className="text-white">{movie.original_title}</p> */}
              </div>
            ))}
          </div>
        </div>

        <div className="trending__shows">
          <p className="text-white">Trending Shows</p>
          <div className="flex flex-row flex-wrap">
            {trendingShows.map((show, index) => (
              <div key={index}>
                <img
                  className="poster"
                  src={
                    "https://image.tmdb.org/t/p/original/" + show.poster_path
                  }
                  alt=""
                />
                {/* <p className="text-white">{show.original_title}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
