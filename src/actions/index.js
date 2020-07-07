import axios from "axios";

const getDog = () => ({
  type: "GET_DOG",
  payload: axios.get("https://api.thedogapi.com/v1/images/search")
});

const getCat = () => ({
  type: "GET_CAT",
  payload: axios.get("https://api.thecatapi.com/v1/images/search")
});

const getBreeds = () => ({
  type: "GET_BREEDS",
  payload: axios.get("https://api.thedogapi.com/v1/breeds")
});

export { getDog, getBreeds, getCat };
