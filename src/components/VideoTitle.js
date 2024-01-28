import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-base w-2/5">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-12 text-xl font-bold rounded-lg hover:bg-opacity-80">
          ▷ PLAY
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 mx-2 text-xl opacity-50 rounded-lg hover:bg-opacity-80">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
