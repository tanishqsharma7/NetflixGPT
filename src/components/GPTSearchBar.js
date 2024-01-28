import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GPTSearchBar = () => {
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);

    //Make an API call to GPT and get movie results

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query " +
      searchText.current.value +
      "only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya ";

    const GPTResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(GPTResults.choices);
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langkey].gptSearchPlaceHolder}
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4"
          onClick={handleGPTSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
