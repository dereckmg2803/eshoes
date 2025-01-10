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
    return <div>Cargando...</div>; // Renderiza un cargando si no hay producto
  }

  return (
    <div className="w-full grid grid-cols-1 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
      {/* Sección de imagen del producto */}
      <div className="order-1 md:order-2 h-full xl:col-span-2">
        <img
          className="w-full h-full object-cover"
          src={productInfo.img}
          alt={productInfo.productName}
        />
      </div>

      {/* Información del producto */}
      <div className="order-2 md:order-3 h-full w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
        <ProductInfo productInfo={productInfo} />
      </div>

      {/* Productos similares */}
      <div className="order-3 md:order-1 h-full">
        <ProductsOnSale />
      </div>
    </div>
  );
};

export default ProductDetails;
