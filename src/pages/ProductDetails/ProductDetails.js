import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import ProductsOnSale from "../../components/pageProps/productDetails/ProductsOnSale";

const ProductDetails = () => {
  const location = useLocation();
  const [productInfo, setProductInfo] = useState({});

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

  // Verificar si productInfo está disponible antes de renderizar
  if (!productInfo.productName) {
    return <div>Cargando...</div>; // Renderiza un mensaje mientras carga
  }

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 bg-gray-100 p-4 pb-10">
      {/* Sección de imagen e información del producto */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Imagen del producto */}
        <div className="flex-1 max-w-lg">
          <img
            className="w-full max-w-md h-auto rounded-md object-contain mx-auto"
            src={productInfo.img}
            alt={productInfo.productName}
          />
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
