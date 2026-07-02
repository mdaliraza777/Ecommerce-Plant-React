import React from "react";
import customerReviewImage from '../../assets/images/customer-review-image.png'

const HeroReviewCard = () => {
  return (
    <div className="max-w-[320px] mt-15 mb-25 md:mt-30 h-auto rounded-[35px] border border-white/20 bg-white/5 backdrop-blur-md p-6">
      
      {/* Header */}
      <div className="flex items-center">
        <img
          src={customerReviewImage}
          alt="Customer Image"
          className="mr-3 w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h3 className="text-white text-xl font-semibold">
           Ronnie Hamill
          </h3>

          <p className="text-yellow-400 text-sm">
            ★★★★☆ 
          </p>
        </div>
      </div>

      {/* Review */}
      <p className="mt-6 text-sm text-gray-300 leading-5">
        I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
      </p>
    </div>
  );
};

export default HeroReviewCard;