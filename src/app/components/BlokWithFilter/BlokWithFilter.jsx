"use client";
import { useDebouncedCallback } from "use-debounce";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { FormSearch } from "../FormSearch/FormSearch";
import { CardCharacter } from "../CardCharacter/CardCharacter";

export const BlokWithFilter = ({ characters }) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    replace(`${pathname}`);
    // eslint-disable-next-line
  }, []);

  const handlerSearch = useDebouncedCallback((value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  const handlerReset = () => {
    replace(`${pathname}`);
  };

  return (
    <>
      <FormSearch handlerSearch={handlerSearch} handlerReset={handlerReset} />
      <ul>
        {characters &&
          characters.map((character) => (
            <CardCharacter key={character.nickname} character={character} />
          ))}
      </ul>
    </>
  );
};
