import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getSimilarProducts } from "../../../data/products";

const ProductsOnSale = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentProduct = location.state?.item || location.state?.fullProductData;

  // Obtener productos similares usando memo para optimizar rendimiento
  const similarProducts = useMemo(() => {
    return currentProduct ? getSimilarProducts(currentProduct) : [];
  }, [currentProduct]);

  const handleProductClick = (item) => {
    navigate(`/product/${item.id}`, {
      state: { 
        item: item,
        fullProductData: item 
      }
    });
    // Forzar un reload de la página para actualizar los productos similares
    window.location.reload();
  };

  if (!currentProduct || similarProducts.length === 0) {
    return null;
  }

  return (
    <div className="md:border-l md:pl-8">

      <div className="flex flex-col gap-4">
        {similarProducts.map((item) => (
          <div
            key={item.id}
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
              <div className="flex gap-2">
                <p className="text-sm line-through text-gray-500">${item.price.toLocaleString('es-CO')}</p>
                <p className="text-sm font-semibold text-red-600">${item.discountedPrice}</p>
              </div>
              <p className="text-xs text-gray-500">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsOnSale;
