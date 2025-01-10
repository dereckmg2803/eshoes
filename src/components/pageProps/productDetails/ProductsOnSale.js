import React from "react";
import { SplOfferData } from "../../../constants";
import { useNavigate } from "react-router-dom";

const ProductsOnSale = () => {
  const navigate = useNavigate();

  const handleProductClick = (item) => {
    // Redirige al componente de detalles con el producto seleccionado
    const rootId = String(item.productName).toLowerCase().split(" ").join(""); // Crear un ID único para la URL
    navigate(`/product/${rootId}`, { state: { item } });
  };

  return (
    <div>
      <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
        Products on sale
      </h3>
      <div className="flex flex-col gap-2">
        {SplOfferData.map((item) => (
          <div
            key={item._id}
            className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2 cursor-pointer hover:bg-gray-100"
            onClick={() => handleProductClick(item)} // Maneja el clic para redirigir
          >
            <div>
              <img className="w-24" src={item.img} alt={item.productName} />
            </div>
            <div className="flex flex-col gap-2 font-titleFont">
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
