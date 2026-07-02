// import React from "react";

// const SectionTitle = ({ title }) => {
//   return (
//     <div className="flex justify-center">
//       <h2 className="relative text-white text-[40px] font-semibold px-4">
//         {title}


//         {/* Left line */}
//         <span className="absolute left-0 bottom-0 w-12 h-12 border-l-4 border-b-4 rounded-bl-xl border-[#A6D65B]"></span>

//         {/* Right line */}
//         <span className="absolute right-0 top-0 w-12 h-12 border-r-4 border-t-4 rounded-tr-xl border-[#A6D65B]"></span>

//       </h2>
//     </div>
//   );
// };

// export default SectionTitle;

import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex justify-center">
      <h2 className="relative px-4 text-2xl font-semibold text-white md:text-[40px]">
        {title}

        {/* Left Corner */}
        <span
          className="
            absolute
            left-0
            bottom-0
            h-7 w-7
            rounded-bl-lg
            border-b-[3px]
            border-l-[3px]
            border-[#A6D65B]
            md:h-12
            md:w-12
            md:rounded-bl-xl
            md:border-b-4
            md:border-l-4
          "
        ></span>

        {/* Right Corner */}
        <span
          className="
            absolute
            top-0
            right-0
            h-7 w-7
            rounded-tr-lg
            border-t-[3px]
            border-r-[3px]
            border-[#A6D65B]
            md:h-12
            md:w-12
            md:rounded-tr-xl
            md:border-t-4
            md:border-r-4
          "
        ></span>
      </h2>
    </div>
  );
};

export default SectionTitle;