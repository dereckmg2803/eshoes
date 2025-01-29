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

    // Añadir el producto al carrito con la talla seleccionada
    dispatch(
      addToCart({
        ...productInfo, // Incluye todos los detalles del producto
        size: selectedSize, // Añade la talla seleccionada
        quantity: 1, // Cantidad inicial
        image: productInfo.img,
      })
    );

    
  };

  const handleWhatsAppPurchase = () => {
    if (!selectedSize) {
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

      {/* Selector de talla con botones */}
      <div className="flex flex-col gap-2">
        <p className="font-medium">Tallas disponibles:</p>
        <div className="flex flex-wrap gap-2">
          {productInfo.sizes?.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`
                py-2 px-4 border text-sm font-semibold uppercase duration-300
                ${selectedSize === size
                  ? 'border-gray-900 bg-gray-900 text-white'
                  : 'border-gray-300 bg-white text-gray-800 hover:border-gray-900'
                }
              `}
            >
              {size}
            </button>
          ))}
        </div>
        {selectedSize && (
          <p className="text-sm text-gray-600">
            Talla seleccionada: {selectedSize}
          </p>
        )}
      </div>

      {/* Botón Agregar al carrito */}
      <button
        onClick={handleAddToCart}
        className={`py-2 px-6 border border-gray-800 text-gray-800 font-semibold uppercase bg-white hover:bg-gray-100 duration-300 ${
          !selectedSize && "opacity-50 cursor-not-allowed"
        }`}
        disabled={!selectedSize}
      >
        Agregar al carrito
      </button>

      {/* Botón Comprar por WhatsApp */}
      <button
        onClick={handleWhatsAppPurchase}
        className={`py-2 px-6 bg-gray-900 text-white font-semibold uppercase hover:bg-gray-800 duration-300 ${
          !selectedSize && "opacity-50 cursor-not-allowed"
        }`}
        disabled={!selectedSize}
      >
        Comprar por WhatsApp
      </button>
    </div>
  );
};

export default ProductInfo;