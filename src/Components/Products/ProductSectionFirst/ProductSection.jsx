

import React from "react";
import SectionTitle from "../../Common/SectionTitle";
import ProductCardOne from "./ProductCardOne";
import ProductCardTwo from "./ProductCardTwo";

const ProductSection = () => {
  return (
    <div className="mt-16 px-5 md:mt-32 md:px-10">
      <SectionTitle title="Our Trendy plants" />

      <div className="mt-10 flex flex-col gap-8 md:mt-12 md:gap-10">
        <ProductCardOne />
        <ProductCardTwo />
      </div>
    </div>
  );
};

export default ProductSection;