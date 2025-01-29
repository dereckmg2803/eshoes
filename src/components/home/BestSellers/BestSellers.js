import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { getBestSellers } from "../../../data/products";

const BestSellers = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detectar el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Pantallas móviles tienen un ancho menor o igual a 768px
    };

    handleResize(); // Comprobar inicialmente
    window.addEventListener("resize", handleResize); // Listener para cambios de tamaño

    return () => {
      window.removeEventListener("resize", handleResize); // Eliminar listener
    };
  }, []);

  const calculateDiscountedPrice = (price) => {
    return Math.round(price * 0.6).toLocaleString("es-CO"); // Aplica el 40% de descuento y formatea
  };

  const products = getBestSellers();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
          slidesToScroll: 1,
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
    <div className="w-full py-5">
      <Heading heading="" />
      {isMobile ? (
        // Diseño en grid para pantallas móviles
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
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

export default BestSellers;
