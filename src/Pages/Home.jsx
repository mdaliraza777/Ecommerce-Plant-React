import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import backgroundImage from "../assets/images/background-image.jpg";
import HeroSection from "../Components/Hero/HeroSection";
import ProductSection from "../Components/Products/ProductSectionFirst/ProductSection";
import TopSellingSection from "../Components/Products/TopSellingSection/TopSellingSection";
import ReviewSection from "../Components/Reviews/ReviewSection";
import FeaturedCard from "../Components/Products/FeatureCardSection/FeaturedCard";
import FooterSection from "../Components/Footer/FooterSection";


const Home = () => {
  return (
      <div className=" max-h-[1800px] bg-[url('/background-image.jpg')] bg-no-repeat bg-center bg-cover">
      <div>
       <Navbar />
        <HeroSection />
        <ProductSection />
        <TopSellingSection />
        <ReviewSection />
        <FeaturedCard />
        <FooterSection />
         </div>
        </div>
  );
};
export default Home;



