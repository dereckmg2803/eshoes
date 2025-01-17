import React from "react";
import { SplOfferData } from "../../../constants";
import { useNavigate } from "react-router-dom";

const ProductsOnSale = () => {
  const navigate = useNavigate();

  const handleProductClick = (item) => {
    const rootId = String(item.productName).toLowerCase().split(" ").join("");
    navigate(`/product/${rootId}`, { state: { item } });
  };

  return (
    <div className="md:border-l md:pl-8">
      <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
        Similares
      </h3>
      <div className="flex flex-col gap-4">
        {SplOfferData.map((item) => (
          <div
            key={item._id}
            className="flex items-center gap-4 border-b border-gray-300 pb-4 cursor-pointer hover:bg-gray-50"
            onClick={() => handleProductClick(item)}
          >
            <div className="w-24">
              <img
                className="w-full rounded-md"
                src={item.img}
                alt={item.productName}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-base font-medium">{item.productName}</p>
              <p className="text-sm font-semibold">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsOnSale;
