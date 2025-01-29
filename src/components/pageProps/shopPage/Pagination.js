import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import { paginationItems } from "../../../constants";

const items = paginationItems;

// Componente para renderizar los productos
function Items({ currentItems }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {currentItems.map((item) => (
        <div key={item._id} className="w-full">
          <Product
            _id={item._id}
            img={item.img}
            productName={item.productName}
            price={item.price}
            color={item.color}
            badge={item.badge}
            des={item.des}
          />
        </div>
      ))}
    </div>
  );
}

const Pagination = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8); // Valor por defecto
  const [itemStart, setItemStart] = useState(1);

  // Detectar el tamaño de la pantalla y ajustar itemsPerPage
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(4); // 2x2 en móvil
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(6); // 2x3 en tablet
      } else {
        setItemsPerPage(8); // 2x4 en pantallas grandes
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Manejar el cambio de página
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    setItemStart(newOffset);
  };

  return (
    <div>
      <Items currentItems={currentItems} />
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center mt-6">
        <ReactPaginate
          nextLabel=">"
          previousLabel="<"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          pageLinkClassName="w-9 h-9 border border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-2"
          containerClassName="flex text-base font-semibold font-titleFont py-6"
          activeClassName="bg-black text-white"
        />

        <p className="text-base font-normal text-lightText">
          Productos de {itemStart === 0 ? 1 : itemStart} a {endOffset} de {items.length}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
