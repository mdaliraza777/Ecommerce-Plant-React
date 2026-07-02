import React from "react";
import logoImage from "../../assets/images/logoImage.png";
import bag from "../../assets/images/bag.png";
import searchIcon from "../../assets/images/search-icon.png";

const Navbar = () => {
  return (
   
    <div className="px-5 w-full flex items-center justify-between mt-5 md:mt-16">
      {/* logo */}
      <div className=" flex items-center h-[48px] ml-2 ">
        <img className="  h-8 md:h-12 " src={logoImage} alt="logo-image" />
        <h1 className="opacity-75  font-black md:text-xl md:text-2xl leading-none ml-2">
          FloraVision.
        </h1>
      </div>

      {/* Menu items  */}
      <div className="hidden md:flex items-center md:gap-10">
        <a className="mx-5" href="">Home</a>

        <div>
          <a href="">Plants Type</a>
          <span className="mx-2 cursor-pointer">▼</span>
        </div>

        <a href="">More</a>

        <a href="">Contact</a>
      </div>

      {/* right Icons */}
      <div className="flex items-center md:mr-5">
        <img className="h-5 w-5 md:max-h-[26px] md:max-w-[26px] cursor-pointer" src={searchIcon} alt="" />
        <img className="h-5 w-5  md:max-h-[26px] md:max-w-[26px] mx-2 md:mx-6 cursor-pointer" src={bag} alt="" />

        <div className="h-5 relative top-1 md:-top-1.5 cursor-pointer">
          <div className=" w-5 md:w-[35px] rounded-xl border-2 md:border-4"></div>
          <div className=" w-3 md:w-[26px] rounded-xl border-2 md:border-4 absolute right-0 top-2 md:top-3.5"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
