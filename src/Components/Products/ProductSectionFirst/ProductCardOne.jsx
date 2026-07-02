
import React from "react";
import cardImage from "../../../assets/images/plaintain.png";
import bag from "../../../assets/images/bag.png";
import Button from "../../Common/Button";

const ProductCardOne = () => {
  return (
    <div className="w-full">

      <div className=" w-full rounded-[40px] md:rounded-[100px] border border-white/20 bg-white/5 backdrop-blur-md flex flex-col md:flex-row items-center gap-8 px-6 py-8 md:px-16 md:py-8 " >
        <img
          src={cardImage}
          alt=""
          className = "w-44 md:w-[480px] object-contain static md:absolute md:left-8 md:bottom-0"
      
        />

        {/* Content */}

        <div className="w-full md:ml-auto md:w-[45%]">

          <h2 className="text-2xl md:text-[40px] font-semibold text-white leading-tight">
            For Your Desks decoration
          </h2>

          <p className="mt-4 text-sm md:text-lg text-gray-300">
            I recently added a beautiful desk decoration plant to my
            workspace, and it has made such a positive difference!
          </p>

          <h3 className="mt-5 text-2xl md:text-[36px] font-bold">
            Rs. 599/-
          </h3>

          <div className="mt-6 flex items-center gap-4">

            <Button content="Explore" />

            <button className="w-11 h-11 rounded-xl border border-white flex items-center justify-center">
              <img src={bag} alt="" className="w-5 h-5" />
            </button>

          </div>

        </div>
      </div>

    </div>
  );
};

export default ProductCardOne;