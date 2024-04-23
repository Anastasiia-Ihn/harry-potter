import { fetchCharacters, fetchCharactersFiltered } from "../(utils)/fetchApi";
import { BlokWithFilter } from "../components/BlokWithFilter/BlokWithFilter";

export default async function Page({ searchParams }) {
  let characters = [];

  if (!Object.keys(searchParams).length) {
    characters = await fetchCharacters();
  } else {
    const value = searchParams.search;
    characters = await fetchCharactersFiltered(value);
  }

  // console.log(characters);

  return (
    <>
      <h1>About </h1>
      <BlokWithFilter characters={characters} />;
    </>
  );
}
