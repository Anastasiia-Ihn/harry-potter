import { URL_API } from "../const";

export const fetchBooks = async () => {
  try {
    const res = await fetch(`${URL_API}/books`);
    const books = await res.json();
    return books;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCharacters = async () => {
  try {
    const res = await fetch(`${URL_API}/characters`);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchCharactersFiltered = async (value) => {
  try {
    const res = await fetch(`${URL_API}/characters?search=${value}`);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchHousesFiltered = async (value) => {
  try {
    const res = await fetch(`${URL_API}/houses?search=${value}`);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
