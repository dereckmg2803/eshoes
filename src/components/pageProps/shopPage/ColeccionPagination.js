import React, { useState, useEffect } from "react";
import { getProductsByCollection } from "../../../data/products";
import Product from "../../home/Products/Product";

const ColeccionPagination = ({ itemsPerPage, collection }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("desc"); // 'asc' o 'desc'
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    let filteredProducts = getProductsByCollection(collection);
    
    // Aplicar ordenamiento
    filteredProducts = filteredProducts.sort((a, b) => {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });

    setProductsToDisplay(filteredProducts);
    setTotalPages(Math.ceil(filteredProducts.length / itemsPerPage));
    setCurrentPage(1); // Resetear a primera página al cambiar ordenamiento
  }, [collection, itemsPerPage, sortOrder]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = productsToDisplay.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {/* Botón de filtrado por precio */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setSortOrder(prev => prev === "asc" ? "desc" : "asc")}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
        >
          Ordenar: {sortOrder === "asc" ? "Menor a Mayor ↑" : "Mayor a Menor ↓"}
        </button>
      </div>

      {/* Grid responsive 2 columnas en móvil */}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <div key={item.id} className="w-full">
              <Product
                _id={item.id}
                img={item.img}
                productName={item.productName}
                price={item.price}
                discountedPrice={item.discountedPrice} // Precio con descuento
                badge={item.badge}
                des={item.des}
                color={item.color}
                moreImages={item.moreImages} 
                fullProductData={item}
              />
            </div>
          ))
        ) : (
          <div className="col-span-4 text-center py-10">
            <p>No hay productos disponibles en esta colección.</p>
          </div>
        )}
      </div>

      {/* Paginación mejorada */}
      {totalPages > 1 && (
        <div className="flex flex-col mdl:flex-row justify-between items-center mt-8">
          <p className="text-sm text-gray-600 mb-4 mdl:mb-0">
            Mostrando {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, productsToDisplay.length)} de {productsToDisplay.length} productos
          </p>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded ${
                currentPage === 1 
                ? "bg-gray-200 cursor-not-allowed" 
                : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              ←
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`w-8 h-8 rounded ${
                  currentPage === i + 1
                  ? "bg-black text-white"
                  : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
            
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded ${
                currentPage === totalPages
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ColeccionPagination;