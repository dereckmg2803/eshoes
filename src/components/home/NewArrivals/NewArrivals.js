import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si el usuario está en una pantalla móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Pantallas de 768px o menos serán consideradas móviles
    };

    handleResize(); // Comprobar inicialmente
    window.addEventListener("resize", handleResize); // Añadir listener para cambios de tamaño

    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el listener
    };
  }, []);

 
  const calculateDiscountedPrice = (price) => {
    const numericPrice = parseFloat(price.replace(/\./g, '').replace(',', '.'));
    const discountedPrice = numericPrice * 0.6;
    return discountedPrice.toLocaleString('de-DE', { minimumFractionDigits: 0 });
  };

  const products = [
    {
      _id: "100001",
      img: newArrOne,
      productName: "Round Table Clock",
      price: "350000",
      discountedPrice: calculateDiscountedPrice("3500.00"),
      color: "Black",
      badge: "Nuevo",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "100002",
      img: newArrTwo,
      productName: "Smart Watch",
      price: "3500",
      discountedPrice: calculateDiscountedPrice("3500"),
      color: "Black",
      badge: "Nuevo",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "100003",
      img: newArrThree,
      productName: "Cloth Basket",
      price: "3500",
      discountedPrice: calculateDiscountedPrice("3500"),
      color: "Mixed",
      badge: "Nuevo",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "100004",
      img: newArrFour,
      productName: "Funny Toys for Babies",
      price: "35000",
      discountedPrice: calculateDiscountedPrice("35000"),
      color: "Mixed",
      badge: false,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "100005",
      img: newArrTwo,
      productName: "Funny Toys for Babies",
      price: "250000",
      discountedPrice: calculateDiscountedPrice("250000"),
      color: "Mixed",
      badge: false,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-full pb-16">
      <Heading heading="Más Vendidos" />
      {isMobile ? (
        // Diseño en grid para pantallas móviles
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {products.map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </div>
      ) : (
        // Carrusel para pantallas más grandes
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product._id} className="px-2">
              <Product {...product} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default NewArrivals;
