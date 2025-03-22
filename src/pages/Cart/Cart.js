import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../redux/orebiSlice";
import { emptyCart } from "../../assets/images/index";
import ItemCard from "./ItemCard";
import { FiShoppingBag, FiTrash2, FiTag, FiArrowRight } from "react-icons/fi";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalAmt, setTotalAmt] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");

  const formatPrice = (price) => {
    return `$${price.toLocaleString("es-CO", { minimumFractionDigits: 0 })}`;
  };

  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += parseFloat(item.price) * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [products]);

  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(30);
    } else if (totalAmt <= 400) {
      setShippingCharge(25);
    } else if (totalAmt > 401) {
      setShippingCharge(20);
    }
  }, [totalAmt]);

  return (
    <div className="max-w-container mx-auto px-4">
      
      {products.length > 0 ? (
        <div className="pb-20">
          {/* Encabezado mejorado */}
          <div className="w-full bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
              <FiShoppingBag className="text-indigo-600" />
              Tu Carrito de Compras
              <span className="text-indigo-600 ml-2">({products.length})</span>
            </h1>
          </div>

          {/* Lista de productos */}
          <div className="grid gap-6">
            <div className="hidden lg:grid grid-cols-12 gap-4 bg-gray-50 p-4 rounded-lg">
              <div className="col-span-6 font-semibold text-gray-600">Producto</div>
              <div className="col-span-2 font-semibold text-gray-600">Precio</div>
              <div className="col-span-2 font-semibold text-gray-600">Cantidad</div>
              <div className="col-span-2 font-semibold text-gray-600 text-right">Total</div>
            </div>
            
            <div className="space-y-4">
              {products.map((item) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ItemCard item={item} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Acciones del carrito */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
            <button
              onClick={() => dispatch(resetCart())}
              className="flex items-center gap-2 px-6 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
            >
              <FiTrash2 />
              Vaciar Carrito
            </button>
            
            <div className="flex-1 max-w-md">
              <div className="flex gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <input
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="text"
                  placeholder="Código de descuento"
                />
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
                  <FiTag />
                  Aplicar
                </button>
              </div>
            </div>
          </div>

          {/* Resumen de compra */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Resumen de Compra</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold">{formatPrice(totalAmt)}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Envío:</span>
                <span className="font-semibold">{formatPrice(shippingCharge)}</span>
              </div>
              
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">Total:</span>
                  <span className="text-2xl font-bold text-indigo-600">
                    {formatPrice(totalAmt + shippingCharge)}
                  </span>
                </div>
              </div>
            </div>

            <Link to="/paymentgateway">
              <button className="w-full mt-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 text-lg">
                Finalizar Compra
                <FiArrowRight className="text-xl" />
              </button>
            </Link>
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 pb-20"
        >
          <div className="max-w-xs">
            <img
              className="w-full h-auto"
              src={emptyCart}
              alt="Carrito vacío"
            />
          </div>
          <div className="text-center max-w-md">
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-2xl">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Tu carrito está vacío</h1>
              <p className="text-gray-600 mb-6">
                Explora nuestra colección y encuentra productos increíbles para agregar a tu carrito.
              </p>
              <Link to="/shop">
                <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 mx-auto">
                  <FiShoppingBag />
                  Comenzar a comprar
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;