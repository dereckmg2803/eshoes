import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
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
      _id: "1101",
      img: spfOne,
      productName: "Cap for Boys",
      price: "3500",
      discountedPrice: calculateDiscountedPrice("3500"),
      color: "Blank and White",
      badge: "Nuevo",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "1102",
      img: spfTwo,
      moreImages: [
            
        spfTwo,    // Imagen adicional 2
        spfFour,   // Imagen adicional 3
      ],
    
      productName: "Adidas Samba",
      price: "190000",
      discountedPrice: calculateDiscountedPrice("190000"),
      color: "Negro",
      badge: "Oferta",
      des: "Favorito entre los amantes de la comodidad y el diseño retro.",
    },
    {
      _id: "1103",
      img: spfThree,
      moreImages: [
            
        spfThree,    // Imagen adicional 2
        spfFour,   // Imagen adicional 3
      ],
    
      productName: "Headphones",
      price: "2500",
      discountedPrice: calculateDiscountedPrice("2500"),
      color: "Mixed",
      badge: "Nuevo",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "1104",
      img: spfFour,
      productName: "New Balance 530",
      price: "230000",
      discountedPrice: calculateDiscountedPrice("230000"),
      color: "White",
      badge: "Nuevo",
      des: "Los New Balance 530 son el equilibrio perfecto entre estilo retro y tecnología moderna, diseñados para quienes buscan comodidad y moda en cada paso. estos tenis destacan por su silueta atemporal y detalles icónicos que complementan cualquier look, desde casual hasta deportivo.",
    },
  ];

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
    <div className="w-full pb-20">
<<<<<<< HEAD
      <Heading heading="Tenis Urbanos" />
=======
      <Heading heading="" />
>>>>>>> nueva-rama
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

export default SpecialOffers;
