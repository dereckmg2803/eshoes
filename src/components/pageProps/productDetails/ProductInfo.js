import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Por favor selecciona una talla antes de agregar al carrito.");
      return;
    }
    dispatch(
      addToCart({
        _id: productInfo.id,
        name: productInfo.productName,
        quantity: 1,
        size: selectedSize, // Agrega la talla seleccionada
        image: productInfo.img,
        badge: productInfo.badge,
        price: productInfo.price,
        discountedPrice: Math.round(productInfo.price * 0.6),
        colors: productInfo.color,
      })
    );
  };

  const formatPrice = (price) => {
    return `$${price.toLocaleString("es-CO", { minimumFractionDigits: 0 })}`;
  };

  return (
    <div className="flex flex-col gap-3 sm:gap-5 p-4 sm:p-6 md:p-8">
      <h2 className="text-2xl sm:text-4xl font-semibold">{productInfo.productName}</h2>
      <div className="text-lg sm:text-xl font-semibold flex gap-2">
        {/* Formateando los precios para incluir los miles */}
        <p className="line-through text-gray-500">
          {formatPrice(productInfo.price)}
        </p>
        <p className="text-red-600">
          {formatPrice(Math.round(productInfo.price * 0.6))}
        </p>
      </div>
      
      <p className="text-sm sm:text-base text-gray-600">{productInfo.des}</p>
      <p className="font-medium text-sm sm:text-lg">
        <span className="font-normal">Color:</span> {productInfo.color}
      </p>
      
      {/* Selector de talla */}
      <div>
        <label htmlFor="size" className="block font-medium">
          Selecciona una talla:
        </label>
        <select
          id="size"
          className="border border-gray-300 p-2 rounded mt-1"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          <option value="">-- Selecciona --</option>
          {productInfo.sizes?.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      
      <button
  onClick={() =>
    dispatch(
      addToCart({
        _id: productInfo._id, // Usa el ID único del producto
        name: productInfo.productName,
        price: Math.round(productInfo.price * 0.6),
        quantity: 1,
        image: productInfo.img,
        badge: productInfo.badge,
        color: productInfo.color,
        size: selectedSize, // Asegúrate de manejar la talla seleccionada
      })
    )
  }
  className="py-2 px-10 bg-primeColor text-white font-semibold uppercase hover:bg-primeDark duration-300"
>
  Agregar al carrito
</button>

      <p className="font-normal text-xs sm:text-sm">
        <span className="text-sm sm:text-base font-medium"> Categorías:</span> Spring collection, Streetwear, Women Tags: featured SKU: N/A
      </p>
    </div>
  );
};

export default ProductInfo;
