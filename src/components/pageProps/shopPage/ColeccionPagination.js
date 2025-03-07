// src/components/pageProps/shopPage/ColeccionPagination.js
import React, { useState, useEffect } from "react";
import { getProductsByCollection } from "../../../data/products";
import Product from "../../home/Products/Product";
import { paginationItems } from "../../../constants";

const ColeccionPagination = ({ itemsPerPage, collection }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // Obtener productos por colección
    const filteredProducts = getProductsByCollection(collection);
    
    // Establecer los productos a mostrar
    setProductsToDisplay(filteredProducts);
    
    // Calcular número total de páginas
    setTotalPages(Math.ceil(filteredProducts.length / itemsPerPage));
  }, [collection, itemsPerPage]);

  // Calcular índices para la paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productsToDisplay.slice(indexOfFirstItem, indexOfLastItem);

  // Función para cambiar de página
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <div key={item.id} className="w-full">
              <Product
                _id={item.id}
                img={item.img}
                productName={item.productName}
                price={item.price.toLocaleString('de-DE', { minimumFractionDigits: 0 })}
                badge={item.badge}
                des={item.des}
                color={item.color}
              />
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-10">
            <p>No hay productos disponibles en esta colección.</p>
          </div>
        )}
      </div>
      {totalPages > 1 && (
        <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
          <div className="hidden mdl:inline-flex items-center gap-3">
            <p className="text-base font-normal text-lightText">
              Mostrando {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, productsToDisplay.length)} de {productsToDisplay.length} productos
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4 mdl:mt-0">
            <button
              onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
              className={`${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-primeColor hover:text-white hover:bg-primeColor duration-300"
              } w-8 h-8 border border-lightColor text-base font-medium flex justify-center items-center`}
              disabled={currentPage === 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`${
                  currentPage === i + 1
                    ? "bg-primeColor text-white"
                    : "text-primeColor hover:text-white hover:bg-primeColor duration-300"
                } w-8 h-8 border border-lightColor text-base font-medium flex justify-center items-center`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
              className={`${
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-primeColor hover:text-white hover:bg-primeColor duration-300"
              } w-8 h-8 border border-lightColor text-base font-medium flex justify-center items-center`}
              disabled={currentPage === totalPages}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ColeccionPagination;