import React from "react";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const navigate = useNavigate();

  // Generar identificador único para la URL
  const idString = (name) => String(name).toLowerCase().split(" ").join("");
  const rootId = idString(props.productName);

  // Manejar navegación a detalles del producto
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: props, // Pasa el producto completo
      },
    });
  };

  return (
    <div
      className="w-full relative group cursor-pointer"
      onClick={handleProductDetails}
    >
      <div className="max-w-80 max-h-80 relative overflow-y-hidden">
        <div>
          <Image className="w-full h-full" imgSrc={props.img} />
        </div>
        <div className="absolute top-6 left-8">
          {props.badge && <Badge text={props.badge} />}
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">{props.productName}</h2>
          <div className="text-right">
            <p className="text-[#767676] text-[14px] line-through">${props.price}</p>
            <p className="text-primeColor text-[14px] font-bold">${props.discountedPrice}</p>
          </div>
        </div>
        <div>
          <p className="text-[#767676] text-[14px]">{props.color}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
