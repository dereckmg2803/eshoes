import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { getNewArrivals } from "../../../data/products";

const NewArrivals = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const products = getNewArrivals();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: () => setIsSliding(true),
    afterChange: () => setIsSliding(false),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <div className="w-full">
        <Slider {...settings} className="w-full">
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <Product {...product} isMobile={isMobile} isSliding={isSliding} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewArrivals;