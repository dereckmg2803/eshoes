// src/pages/colecciones/Mujer.js
import React from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ColeccionPagination from "../../components/pageProps/shopPage/ColeccionPagination";

const Mujer = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs />
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          
          <ColeccionPagination itemsPerPage={12} collection="mujer" />
        </div>
      </div>
    </div>
  );
};

export default Mujer;