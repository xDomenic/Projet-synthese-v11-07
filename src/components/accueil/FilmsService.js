import axios from "axios";

const API_KEY = "b9590de348b1de72934da4fdd68b6f97"; // ajouter votre clé API
const URL_GET_POP = "https://api.themoviedb.org/3/movie/popular?api_key=";

const URL_GET_CAT = `https://api.themoviedb.org/3/discover/movie?api_key=11c5603767c58ad4b5e0b33c3d09fc60&with_genres=`;

const URL_GET_MOVIE_ID = (idMovie) =>
  `https://api.themoviedb.org/3/movie/${idMovie}?api_key=11c5603767c58ad4b5e0b33c3d09fc60&language=fr-CAN`;

const URL_GET_CAST_ID = (idMovie) =>
  `https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=11c5603767c58ad4b5e0b33c3d09fc60&language=fr-CAN`;

const getPopMovies = async () => {
  const result = await axios.get(`${URL_GET_POP}${API_KEY}`);
  console.log("result:", result.data.results);
  return result?.data?.results || [];
};

export const getMoviesByCat = async (with_genres) => {
  const result = await axios.get(`${URL_GET_CAT}${with_genres.join(",")}`);
  console.log("result:", result.data.results);
  return result?.data?.results || [];
};

export const getMovieById = async (idMovie) => {
  const result = await axios.get(`${URL_GET_MOVIE_ID(idMovie)}`);
  const resultCast = await axios.get(`${URL_GET_CAST_ID(idMovie)}`);
  result.data.cast = resultCast?.data?.cast;

  console.log("resultMovieId:", result?.data);
  return result?.data || [];
};

export default getPopMovies;
