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

    if (!response.ok) throw new Error("Failed to fetch trending movies");

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const fetchGenres = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_API_KEY}`,
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      options
    );

    if (!response.ok) throw new Error("Failed to fetch trending genres");

    return await response.json();
  } catch (error) {
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

    if (!response.ok) throw new Error("Failed to fetch trending movies");

    return await response.json();
  } catch (error) {
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

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=en-US&region=United%20States`,
      options
    );

    if (!response.ok) throw new Error("Failed to fetch trending movies");

    return await response.json();
  } catch (error) {
    throw error;
  }
};
