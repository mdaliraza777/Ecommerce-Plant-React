import React from "react";
import heroCardImage from '../../assets/images/heroCardImage.png'
import Button from "../Common/Button";

const HeroPlantCard = () => {
  return (
    <div className="md:relative md:mr-10 max-w-90 relative bottom-10 md:max-h-110 md:mt-20 rounded-[50px] border border-white/40 backdrop-blur-sm bg-white/5 flex flex-col items-center pb-6">
      
      {/* Plant Image */}
      <img src={heroCardImage} alt={name} className="max-w-full max-h-80 md:relative relative bottom-15"  />

      {/* Content */}
      <div className="md:-mt-15 -mt-15 w-full px-6">
        <p className="text-gray-300">Indoor Plant</p>

        <div className=" flex justify-between">
          <h3 className="text-3xl md:mb-2">Aglaonema  plant</h3>
          <span className="text-3xl"> › </span>
        </div>


        {/* Common button component */}
        <Button content="Buy Now" />

        <div className="flex justify-center mt-6 gap-2">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroPlantCard;
