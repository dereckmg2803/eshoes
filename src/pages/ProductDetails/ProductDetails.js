import React, { useEffect, useState } from "react";
import './efectbotones.css';  // Asegúrate de que la ruta sea correcta

import { useLocation } from "react-router-dom";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import ProductsOnSale from "../../components/pageProps/productDetails/ProductsOnSale";

const ProductDetails = () => {
  const location = useLocation();
  const [productInfo, setProductInfo] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (location.state && location.state.item) {
      const item = location.state.item;

      // Agrega tallas predeterminadas si no están presentes
      setProductInfo({
        ...item,
        sizes: item.sizes || [38, 39, 40, 41, 42], // Array de tallas por defecto
      });
    }
  }, [location]);

  const handleNextImage = () => {
    if (productInfo.moreImages && productInfo.moreImages.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productInfo.moreImages.length);
    }
  };

  const handlePrevImage = () => {
    if (productInfo.moreImages && productInfo.moreImages.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + productInfo.moreImages.length) % productInfo.moreImages.length);
    }
  };

  // Verificar si productInfo está disponible antes de renderizar
  if (!productInfo.productName) {
    return <div>Cargando...</div>; // Renderiza un mensaje mientras carga
  }

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 bg-gray-100 p-4 pb-10">
      {/* Sección de imagen e información del producto */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Galería de imágenes del producto */}
        <div className="flex-1 max-w-lg relative">
          <div className="w-full max-w-md mx-auto">
            {/* Imagen principal */}
            <div className="relative overflow-hidden">
              <img
                className="w-full h-auto rounded-md object-contain transition-transform duration-500 ease-in-out transform"
                src={productInfo.moreImages && productInfo.moreImages.length > 0 
                  ? productInfo.moreImages[currentImageIndex] 
                  : productInfo.img}
                alt={productInfo.productName}
              />

              {/* Indicadores de imagen actual */}
              {productInfo.moreImages && productInfo.moreImages.length > 0 && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white px-2 py-0 rounded-full">
                  {currentImageIndex + 1} / {productInfo.moreImages.length}
                </div>
              )}

              {/* Botones para cambiar de imagen */}
              {productInfo.moreImages && productInfo.moreImages.length > 1 && (
                <div className="absolute inset-x-0 bottom-4 flex justify-between px-4">
                  <div className="image-buttons">
                  <button
  onClick={handlePrevImage}
  className="button w-10 h-10 flex items-center justify-center hover:bg-gray-600"
>
  &#8592;
</button>
<button
  onClick={handleNextImage}
  className="button w-10 h-10 flex items-center justify-center hover:bg-gray-600"
>
  &#8594;
</button>

                </div>
                </div>
              )}
            </div>

            {/* Miniaturas adicionales */}
            {productInfo.moreImages && productInfo.moreImages.length > 0 && (
              <div className="flex gap-2 mt-4 overflow-x-auto">
                {productInfo.moreImages.map((image, index) => (
                  <img
                    key={index}
                    className={`w-20 h-20 rounded-md object-cover cursor-pointer border ${
                      index === currentImageIndex ? "border-gray-800" : "border-gray-300"
                    } hover:border-gray-500`}
                    src={image}
                    alt={`${productInfo.productName} ${index + 1}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Información del producto */}
        <div className="flex-1 max-w-lg">
          <ProductInfo productInfo={productInfo} />
        </div>
      </div>

      {/* Productos similares */}
      <div className="w-full">
        <ProductsOnSale />
      </div>
    </div>
  );
};

export default ProductDetails;