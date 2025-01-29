import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { getNewArrivals } from "../../../data/products";

const NewArrivals = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculateDiscountedPrice = (price) => {
    const numericPrice = parseFloat(price.replace(/\./g, '').replace(',', '.'));
    const discountedPrice = numericPrice * 0.6;
    return discountedPrice.toLocaleString('de-DE', { minimumFractionDigits: 0 });
  };

  const products = getNewArrivals();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="w-full pb-16">
      <Heading heading="" />
      <div className="w-full">
        <Slider {...settings} className="w-full">
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <Product {...product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewArrivals;
