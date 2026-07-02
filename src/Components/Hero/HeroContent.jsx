import React from "react";
import Poligon2 from "../../assets/images/Polygon2.png";
import HeroReviewCard from "./HeroReviewCard";

const HeroContent = () => {
  return (
    <div className="max-w-full items-center md:w-3xl mt-6 md:mt-15 md:ml-10">

      <h1 className="md:text-7xl text-3xl font-bold leading-none text-white">
        Earth's Exhale
      </h1>

      <p className="mt-4 text- text-gray-300 leading-tight max-w-[650px]">
        "Earth Exhale" symbolizes the purity and vitality of the Earth's natural
        environment and its essential role in sustaining life.
      </p>


      <div className="flex md:items-center md:gap-10 mt-10">
        <button className="w-20 h-10 text-md md:w-40 md:h-15 md:w-[170px]  md:h-[60px] border border-white rounded-xl md:text-3xl font-light">
          Buy Now
        </button>

        <div className="flex items-center md:gap-4">
          <button className="w-10 mx-2 md:w-16 h-10 md:h-16 rounded-full border border-white flex items-center justify-center">
            <img src={Poligon2} alt="Play" className="w-4 h-4 ml-1" />
          </button>
          
          <span className="text-lg md:text-2xl font-light">Live Demo...</span>

        </div>
      </div>

      <HeroReviewCard />
    </div>
  );
};

export default HeroContent;
