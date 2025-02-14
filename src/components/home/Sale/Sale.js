import React from "react";
import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";
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
              <Image className="h-full w-full object-cover" imgSrc={saleImgTwo} />
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
            <Image className="h-full w-full object-cover" imgSrc={saleImgTwo} />
          </Link>
        </div>
        <div className="w-full md:w-1/3 h-auto">
          <Link to="/shop">
            <Image className="h-full w-full object-cover" imgSrc={saleImgOne} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
