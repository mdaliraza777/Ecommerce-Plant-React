import React from "react";
import bagIcon from "../../../assets/images/bag.png";

const PlantCard = ({ index, image, name, description, price}) => {
  return (
// h-[450px]
    <div className="mx-5 md:mx-0 w-full md:max-w-[350px] min-h-[450px] relative rounded-[45px] border border-white/20 bg-white/5 backdrop-blur-md px-7 pb-8 my-8">

      {/* Plant Image */}
      <img src={image} alt="Plant image" className="absolute left-1/2 -top-15 -translate-x-1/2 w-[320px] z-10" />

      {/* Content */}
      <div className="absolute bottom-8 left-7 right-7">
        <h2 className="text-[18px] text-white font-medium">
          {name}
        </h2>

        <p className=" mt-2 text-[14px] text-gray-300 leading-5">
          {description}
        </p>

        <div className="mt-8 flex justify-between">
          <h3 className="text-[20px] font-medium text-white">
            Rs. {price}/-
          </h3>

          <button className=" w-10 h-10 rounded-lg border border-white/50 flex items-center justify-center">
            <img src={bagIcon} alt="bag" className="w-4 h-4"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;