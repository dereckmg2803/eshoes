import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { decreaseQuantity, deleteItem, increaseQuantity } from "../../redux/orebiSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();

  const formatPrice = (price) => {
    return `$${price.toLocaleString("es-CO", { minimumFractionDigits: 0 })}`;
  };

  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2">
      {/* Imagen y Nombre */}
      <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
        <ImCross
          onClick={() => dispatch(deleteItem({ _id: item._id, size: item.size }))}
          className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
        />
        <img className="w-32 h-32" src={item.image} alt="productImage" />
        <div>
          <h1 className="font-titleFont font-semibold">{item.name}</h1>
          <p className="text-gray-500 text-sm">Talla: {item.size}</p>
        </div>
      </div>

      {/* Controles de cantidad y subtotal */}
      <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        <div className="flex w-1/3 items-center text-lg font-semibold">
          {formatPrice(item.price)}
        </div>
        <div className="w-1/3 flex items-center gap-6 text-lg">
          <span
            onClick={() => dispatch(decreaseQuantity({ _id: item._id, size: item.size }))}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            -
          </span>
          <p>{item.quantity}</p>
          <span
            onClick={() => dispatch(increaseQuantity({ _id: item._id, size: item.size }))}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            +
          </span>
        </div>
        <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
          <p>{formatPrice(item.quantity * item.price)}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;