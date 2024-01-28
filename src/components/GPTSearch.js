import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_URL } from "../utils/constants";

//GPT Search Page
const GPTSearch = () => {
  return (
    <div>
      <div className="fixed w-screen -z-10">
        <img src={BG_URL} alt="logo" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
