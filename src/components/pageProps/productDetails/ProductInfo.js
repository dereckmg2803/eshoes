import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");

  const handleAddToCart = () => {
    if (!selectedSize) {
      // Mejor opción: usar feedback visual
      alert("Por favor selecciona una talla antes de agregar al carrito.");
      return;
    }
    dispatch(
      addToCart({
        _id: productInfo.id,
        name: productInfo.productName,
        quantity: 1,
        size: selectedSize,
        image: productInfo.img,
        badge: productInfo.badge,
        price: productInfo.price,
        discountedPrice: Math.round(productInfo.price * 0.6),
        colors: productInfo.color,
      })
    );
  };

  const handleWhatsAppPurchase = () => {
    if (!selectedSize) {
      // Mejor opción: usar feedback visual
      alert("Por favor selecciona una talla antes de continuar.");
      return;
    }
    const message = `Hola, estoy interesado en comprar el producto \"${productInfo.productName}\" en talla \"${selectedSize}\". ¿Está disponible?`;
    const phoneNumber = "573158591463";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const formatPrice = (price) => {
    return `$${price.toLocaleString("es-CO", { minimumFractionDigits: 0 })}`;
  };

  return (
    <div className="flex flex-col gap-3 sm:gap-5 p-4 sm:p-6 md:p-8">
      <h2 className="text-2xl sm:text-4xl font-semibold">{productInfo.productName}</h2>
      <div className="text-lg sm:text-xl font-semibold flex gap-2">
        <p className="line-through text-gray-500">{formatPrice(productInfo.price)}</p>
        <p className="text-red-600">{formatPrice(Math.round(productInfo.price * 0.6))}</p>
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
        onClick={handleAddToCart}
        className={`py-2 px-10 bg-primeColor text-white font-semibold uppercase hover:bg-primeDark duration-300 ${!selectedSize && "opacity-50 cursor-not-allowed"}`}
        disabled={!selectedSize}  // Deshabilitar botón si no hay talla seleccionada
      >
        Agregar al carrito
      </button>
      <button
        onClick={handleWhatsAppPurchase}
        className={`py-2 px-10 bg-green-500 text-white font-semibold uppercase hover:bg-green-600 duration-300 mt-2 ${!selectedSize && "opacity-50 cursor-not-allowed"}`}
        disabled={!selectedSize}  // Deshabilitar botón si no hay talla seleccionada
      >
        Comprar por WhatsApp
      </button>
    </div>
  );
};

export default ProductInfo;
