import "./search.styles.scss";
import { useEffect, useState } from "react";
import { useMovieSearch } from "../../hooks/useMovieSearch";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Search() {
  const [query, setQuery] = useState("");
  const [displayMovieCount, setDisplayMovieCount] = useState(5);
  const [displayShowCount, setDisplayShowCount] = useState(5);

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

  const loadMoreMovies = () => {
    setDisplayMovieCount((prevCount) => prevCount + 5);
  };

  const loadMoreShows = () => {
    setDisplayShowCount((prevCount) => prevCount + 5);
  };

  return (
    <div className="page-container container">
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
        <div className="flex flex-col trending__movies">
          <h3 className="text-white text-left">Trending Movies</h3>
          <ul className="flex flex-row flex-wrap justify-center poster__container">
            {trendingMovies.slice(0, displayMovieCount).map((movie, index) => (
              <li key={index}>
                <img
                  className="poster"
                  src={
                    "https://image.tmdb.org/t/p/original/" + movie.poster_path
                  }
                  alt=""
                />
              </li>
            ))}
          </ul>
          {trendingMovies.length > displayMovieCount && (
            <Button
              className="no-underline self-center"
              size="sm"
              variant="link"
              onClick={loadMoreMovies}
            >
              Load More
            </Button>
          )}
        </div>

        <div className="flex flex-col trending__shows">
          <h3 className="text-white text-left">Trending Shows</h3>
          <ul className="flex flex-row flex-wrap justify-center poster__container">
            {trendingShows.slice(0, displayShowCount).map((show, index) => (
              <li key={index}>
                <img
                  className="poster"
                  src={
                    "https://image.tmdb.org/t/p/original/" + show.poster_path
                  }
                  alt=""
                />
              </li>
            ))}
          </ul>
          {trendingShows.length > displayShowCount && (
            <Button
              className="no-underline self-center"
              size="sm"
              variant="link"
              onClick={loadMoreShows}
            >
              Load More
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
