import axios from 'axios';

const API_KEY = '549ca87aae681a7deb1b9bf608414fc8';

const params = `?api_key=${API_KEY}&language=en-US`;

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const fetchMoviesAPI = (query: string) => {
  return instance.get(`/search/movie${params}&query=${query}`);
};

export const fetchShowAPI = (query: string) => {
  return instance.get(`/search/tv${params}&query=${query}`);
};
