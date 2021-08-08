import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '1e0525e20627be78dee09db4f0508bb2';
axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

const getTrends = async () => {
  try {
    const { data } = await axios.get(`/trending/movie/day`);
    return data.results;
  } catch (error) {
    return [];
  }
};

const getMovies = async movieTitle => {
  try {
    const { data } = await axios.get(`/search/movie?query=${movieTitle}`);
    return data.results;
  } catch (error) {
    return [];
  }
};
const getMovieById = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}`);
    return data;
  } catch (error) {
    return null;
  }
};
const getMovieInfoById = async (id, url) => {
  try {
    const { data } = await axios.get(`/movie/${id}/${url}`);
    return data;
  } catch (error) {
    return null;
  }
};

export { getTrends, getMovies, getMovieById, getMovieInfoById };
