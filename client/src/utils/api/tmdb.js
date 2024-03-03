const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const fetchTrendingMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_API_KEY}`,
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
      options
    );

    if (!response.ok) {
      throw new Error("Failed to fetch trending movies");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchTrendingShows = async (query) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_API_KEY}`,
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/tv/week?language=en-US",
      options
    );

    if (!response.ok) {
      throw new Error("Failed to fetch trending movies");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchSearchMovies = async (query) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_API_KEY}`,
    },
  };

  fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
