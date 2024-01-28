import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_URL } from "../utils/constants";

//GPT Search Page
const GPTSearch = () => {
  return (
    <>
      <div className="fixed w-screen -z-10">
        <img
          className="h-screen md:w-screen aspect-auto object-cover"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
