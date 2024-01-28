import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] md:px-24 px-6 absolute text-white bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className="text-2xl md:text-6xl font-bold  w-3/5 md:w-3/4">
        {title}
      </h1>
      <p className="hidden md:inline-block py-6 text-base w-2/5">{overview}</p>
      <div className="my-4 md:my-0">
        <button className="bg-white text-black md:p-4 px-2 py-0 md:px-12 mb-3 text-xl font-bold rounded-lg hover:bg-opacity-80">
          ▷ PLAY
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white p-4 px-12 mx-2 text-xl opacity-50 rounded-lg hover:bg-opacity-80">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
