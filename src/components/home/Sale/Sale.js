import React from "react";
import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";
<<<<<<< HEAD

const Sale = () => {
  return (
    
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 lg:w-1/2 h-full">
      
        <Link to="/shop">
          <Image className="h-full w-full object-cover" imgSrc={saleImgOne} />
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image className="h-full w-full object-cover" imgSrc={saleImgTwo} />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <Image
              className="h-full w-full object-cover"
              imgSrc={saleImgThree}
            />
=======
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Sale = () => {
  return (
    <div className="py-5">
      {/* Mobile View */}
      <div className="block md:hidden">
        <Swiper spaceBetween={10} slidesPerView={1}>
          <SwiperSlide>
            <Link to="/shop">
              <Image className="h-full w-full object-cover" imgSrc={saleImgOne} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/shop">
              <Image className="h-full w-full object-cover" imgSrc={saleImgOne} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/shop">
              <Image className="h-full w-full object-cover" imgSrc={saleImgOne} />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
      
      {/* Desktop View */}
      <div className="hidden md:flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-6">
        <div className="w-full md:w-1/3 h-auto">
          <Link to="/shop">
            <Image className="h-full w-full object-cover" imgSrc={saleImgOne} />
          </Link>
        </div>
        <div className="w-full md:w-1/3 h-auto">
          <Link to="/shop">
            <Image className="h-full w-full object-cover" imgSrc={saleImgOne} />
          </Link>
        </div>
        <div className="w-full md:w-1/3 h-auto">
          <Link to="/shop">
            <Image className="h-full w-full object-cover" imgSrc={saleImgOne} />
>>>>>>> nueva-rama
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
