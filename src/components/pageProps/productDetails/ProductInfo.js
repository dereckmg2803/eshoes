import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-3 sm:gap-5 p-4 sm:p-6 md:p-8">
      <h2 className="text-2xl sm:text-4xl font-semibold">{productInfo.productName}</h2>
      <p className="text-lg sm:text-xl font-semibold">${productInfo.price}</p>
      <p className="text-sm sm:text-base text-gray-600">{productInfo.des}</p>
      <p className="text-xs sm:text-sm">Be the first to leave a review.</p>
      <p className="font-medium text-sm sm:text-lg">
        <span className="font-normal">Colors:</span> {productInfo.color}
      </p>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              _id: productInfo.id,
              name: productInfo.productName,
              quantity: 1,
              image: productInfo.img,
              badge: productInfo.badge,
              price: productInfo.price,
              colors: productInfo.color,
            })
          )
        }
        className="productButton w-full"
      >
        Add to Cart
      </button>
      <p className="font-normal text-xs sm:text-sm">
        <span className="text-sm sm:text-base font-medium"> Categories:</span> Spring
        collection, Streetwear, Women Tags: featured SKU: N/A
      </p>
    </div>
  );
};



export default ProductInfo;
