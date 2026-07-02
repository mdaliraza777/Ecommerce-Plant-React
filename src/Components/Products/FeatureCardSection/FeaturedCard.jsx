
import React from "react";
import SectionTitle from "../../Common/SectionTitle";
import aglaonema from "../../../assets/images/aglaonema.png";
import Button from "../../Common/Button";

const FeaturedCard = () => {
  return (
    <div className="mb-16 md:mb-20">
      <SectionTitle title="Our Best 02" />

      <div className=" mx-4 mt-12 md:mt-32 rounded-[40px] md:rounded-[90px] border border-white/20 bg-white/5 backdrop-blur-md px-6 py-8 md:px-12 md:py-12 " >
        <div className="flex flex-col items-center gap-10 md:flex-row">

          {/* Image */}

          <div className="flex justify-center w-full md:w-1/2">
            <img
              src={aglaonema}
              alt="Aglaonema Plant"
              className="w-64 md:w-full max-w-[700px] object-contain"
            />
          </div>

          {/* Content */}

          <div className="w-full md:w-1/2">

            <h3 className="text-2xl md:text-4xl font-bold leading-tight">
              We Have Small And Best O2 Plants Collection’s
            </h3>

            <p className="mt-6 text-sm md:text-lg text-gray-300">
              Oxygen-producing plants, often referred to as "O2 plants," are
              those that release oxygen into the atmosphere through the process
              of photosynthesis.
            </p>

            <p className="mt-4 text-sm md:text-lg text-gray-300">
              Many plants help filter pollutants like formaldehyde, benzene,
              and trichloroethylene, making indoor air cleaner and healthier.
            </p>

            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

              <Button content="Explore" />

              <div className="flex items-center justify-center gap-5">
                <span className="cursor-pointer text-3xl">‹</span>

                <span className="text-base md:text-lg text-gray-300">
                  01/04
                </span>

                <span className="cursor-pointer text-3xl">›</span>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Dots */}

      <div className="mt-6 flex justify-center gap-2">
        <span className="h-3 w-3 rounded-full bg-white"></span>
        <span className="h-3 w-3 rounded-full bg-white/50"></span>
        <span className="h-3 w-3 rounded-full bg-white/50"></span>
      </div>
    </div>
  );
};

export default FeaturedCard;