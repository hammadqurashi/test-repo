import React from "react";

const MovieCard = ({ img, title = "" }) => {
  return (
    <div className="relative flex flex-col h-full">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 bg-[#CCF1FF] rounded-lg py-3">
          <span className="text-center font-semibold">200</span>
          <span></span>
          <span className="text-center font-semibold">200</span>
        </div>

        <div className="grid grid-cols-3 bg-[#CCF1FF] rounded-lg py-3">
          <span className="text-center font-semibold">400</span>
          <span></span>
          <span className="text-center font-semibold">400</span>
        </div>

        <div className="grid grid-cols-3 bg-[#CCF1FF] rounded-lg py-3">
          <span className="text-center font-semibold">600</span>
          <span></span>
          <span className="text-center font-semibold">600</span>
        </div>
      </div>

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-max z-10 h-full rounded-md shadow-xl">
        <div className="h-4/5 text-center">
          <img src={img} alt="" className="h-full" />
        </div>

        <div className="p-1 h-1/5 bg-white rounded-b-md">
          <div className="h-full bg-primary p-1 rounded-md flex items-center justify-center">
            <p className="text-black font-bold text-xs">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
