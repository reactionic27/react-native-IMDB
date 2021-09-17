import axios from 'axios';

const API_KEY = '549ca87aae681a7deb1b9bf608414fc8';

const params = `?api_key=${API_KEY}&language=en-US`;

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const fetchMoviesAPI = () => {
  return instance.get(`/trending/all/day${params}`);
};
