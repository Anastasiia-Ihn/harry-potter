import { LIST_HOUSES } from "@/app/const";
import { useState } from "react";

export const FormSearch = ({ handlerReset, handlerSearch }) => {
  // const [searchOption, setSearchOption] = useState("");
  // const handlerChooseOption = (e) => {
  //   setSearchOption(e?.target.value);
  // };

  return (
    <form>
      {/* <label htmlFor="search">Choose option</label>
      <select
        name="search"
        id="search"
        aria-label="select"
        placeholder="Choose option"
        defaultValue=""
        onChange={handlerChooseOption}
      >
        <option value="-">-</option>
        <option value="house">house</option>
        <option value="character">character</option>
      </select> */}
      {/* {searchOption === "house" && (
        <select
          name="houses"
          id="houses"
          aria-label="select"
          placeholder="Choose house"
          defaultValue=""
          onChange={(e) => handlerSearch(e.target.value)}
        >
          {LIST_HOUSES?.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
      )} */}
      <>
        <label htmlFor="nickname">Enter nickname</label>
        <input
          type="text"
          name="nickname"
          id="nickname"
          defaultValue=""
          onChange={(e) => handlerSearch(e.target.value)}
        />
      </>

      <button type="reset" onClick={handlerReset}>
        Reset
      </button>
    </form>
  );
};
