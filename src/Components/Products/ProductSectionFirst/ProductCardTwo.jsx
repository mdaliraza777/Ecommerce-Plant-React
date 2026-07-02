
import React from "react";
import Button from "../../Common/Button";
import bag from "../../../assets/images/bag.png";
import cardImage from "../../../assets/images/monogram-plant-img.png";

const ProductCardTwo = () => {
  return (
    <div className="w-full md:mt-20 md:min-h-[340px]">

      {/* Main Card */}
      <div className=" relative w-full rounded-[40px] md:rounded-[100px] border border-white/20 bg-white/5 backdrop-blur-md flex flex-col-reverse md:flex-row items-center gap-8 px-6 py-8 md:px-16 " >
       
        {/* Content */}
        <div className="w-full md:w-[60%]">
          <h2 className="text-2xl md:text-[40px] font-semibold text-white leading-tight">
            For your desks decoration
          </h2>

          <p className="mt-4 text-sm md:text-lg text-gray-300">
            The greenery adds a touch of nature and serenity to my desk,
            making it feel more inviting and calming.
          </p>

          <h3 className="mt-5 text-2xl md:text-[36px] font-bold">
            Rs. 399/-
          </h3>

          <div className="mt-6 flex items-center gap-4">
            <Button content="Explore" />

            <button className="w-11 h-11 rounded-xl border border-white flex items-center justify-center">
              <img src={bag} alt="" className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Plant Image */}
        <img src={cardImage}alt=""className="w-44 md:w-[480px] object-contains tatic md:absolute md:right-8 md:bottom-0"/>
          
      </div>
    </div>
  );
};

export default ProductCardTwo;