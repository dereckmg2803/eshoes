import React from "react";
import { Link } from "react-router-dom";
import { productOfTheYear } from "../../../assets/images";
import ShopNow from "../../designLayouts/buttons/ShopNow";
import Image from "../../designLayouts/Image";
import BlurText from "./BlurText"; // Import the BlurText component

const YearProduct = () => {
  return (
    <Link to="/Hombre">
      <div className="w-full h-80 bg-[#f3f3f3] md:bg-transparent relative font-titleFont">
        <Image
          className="w-full h-full object-cover hidden md:inline-block"
          imgSrc={productOfTheYear}
        />
        <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
          <BlurText text="Descuentos" className="text-4xl font-semibold text-primeColor" />
          <BlurText text="Por tiempo limitado en referencias seleccionadas" className="text-base font-normal text-primeColor max-w-[600px] mr-4" />
          <ShopNow />
        </div>
      </div>
    </Link>
  );
};

export default YearProduct;