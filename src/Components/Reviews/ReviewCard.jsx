import React from "react";
import customerReviewImage from '../../assets/images/customer-review-image.png'

const ReviewCard = () => {
  return (
    <div className="my-0 mx-4  md:my-8 md:mx-3">
    <div className="max-w-[320px] max-h-[300px] mt-10 rounded-[35px] border border-white/20 bg-white/5 backdrop-blur-md px-10 pt-15 pb-10">
      {/* Header */}
      <div className="flex items-center gap-3">
        <img
          src={customerReviewImage}
          alt="Customer Image"
          className="w-12 h-12 rounded-full object-cover"
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
    </div>
  );
};

export default ReviewCard;