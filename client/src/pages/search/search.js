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
        movieSearch(query, 1);
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
    <div className="page-container container mt-[30px]">
      <Form.Control
        className="form__control mb-6"
        id="search"
        type="text"
        placeholder="search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      {movies?.length === 0 || query.length <= 2 ? (
        <div className="trending__container mt-[30px] mb-2">
          <div className="flex flex-col trending__movies">
            <h2 className="text-slate-100 text-left">Trending Movies</h2>
            <ul className="flex flex-row flex-wrap justify-center poster__container">
              {trendingMovies
                .slice(0, displayMovieCount)
                .map((movie, index) => (
                  <li key={index}>
                    <img
                      className="poster"
                      src={
                        "https://image.tmdb.org/t/p/original/" +
                        movie.poster_path
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
            <h2 className="text-slate-100 text-left">Trending Shows</h2>
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
      ) : (
        <div className="text-slate-100 text-left">
          <h2 className="search__results text-[14px] pb-[16px]">
            Found {movies.total_results} results for "{query}"
          </h2>

          <ul className="p-0">
            {movies.results.map((movie, index) => (
              <li key={index} className="search__result flex py-[8px]">
                <img
                  className="search__poster"
                  src={
                    movie.poster_path
                      ? "https://image.tmdb.org/t/p/original/" +
                        movie.poster_path
                      : "https://placehold.co/70x105"
                  }
                  alt=""
                />
                <div className="ml-4 flex flex-col justify-center text-left">
                  <h2 className="text-[20px]">
                    {movie.original_title}
                    <span className="ml-2 text-[16px] font-thin text-slate-400">
                      {movie.release_date.split("-")[0]}
                    </span>
                  </h2>
                  <p className="m-0 text-[14px] font-medium text-slate-400">
                    TMDb Rating:
                    <span className="ml-1 text-[16px] text-slate-300">
                      {movie.vote_average.toFixed(1)}
                    </span>
                    /10
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* {movies?.length === 0 && query.length > 2 && <div>No movies found</div>} */}
    </div>
  );
}

export default Search;
