import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";

const Product = (props) => {
  const navigate = useNavigate();

  const idString = (name) => String(name).toLowerCase().split(" ").join("");
  const rootId = idString(props.productName);

  const handleProductClick = () => {
    navigate(`/product/${rootId}`, {
      state: { item: props },
    });
  };

  return (
    <div
      onClick={handleProductClick}
      className={`product-card cursor-pointer w-full relative group transition-all duration-300 ease-in-out transform hover:shadow-lg md:hover:-translate-y-1 rounded-lg overflow-hidden shadow-md ${
        props.isSliding ? "glassmorphism-disable" : ""
      }`}
    >
      {/* Fondo con efecto glassmorphism */}
      <div
        className={`absolute inset-0 backdrop-blur-sm backdrop-saturate-180 bg-white/30 border border-white/30 rounded-lg z-0 ${
          props.isSliding ? "glassmorphism-disable" : ""
        }`}
      ></div>
      {/* Contenido (texto e imagen) */}
      <div className="relative z-10">
        <div className="max-w-80 max-h-80 relative overflow-y-hidden h-48">
          <Image
            className="w-full h-48 object-cover"
            imgSrc={props.img}
            alt={props.productName}
          />
          {props.badge && (
            <div className="absolute top-6 left-8">
              <Badge text={props.badge} />
            </div>
          )}
        </div>
        <div className="p-4 flex flex-col gap-1">
          <h3 className="text-md font-medium text-primeColor">
            {props.productName}
          </h3>
          <div>
            {props.discountedPrice ? (
              <div className="flex items-center gap-2">
                <p className="text-red-500 text-xs line-through">
                  ${props.price.toLocaleString("es-CO")}
                </p>
                <p className="text-black text-sm font-semibold">
                  ${props.discountedPrice.toLocaleString("es-CO")}
                </p>
              </div>
            ) : (
              <p className="text-black text-xs font-semibold">
                ${props.price.toLocaleString("es-CO")}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  productName: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discountedPrice: PropTypes.number,
  badge: PropTypes.string,
};

export default Product;