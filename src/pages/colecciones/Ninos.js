// src/pages/colecciones/Ninos.js
import React from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ColeccionPagination from "../../components/pageProps/shopPage/ColeccionPagination";

const Ninos = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs />
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <div className="bg-white py-6 px-4 rounded-md">
            <h1 className="text-3xl font-bold mb-4">Colección para Niños</h1>
            <p className="text-gray-600">Encuentra el calzado perfecto para los más pequeños con nuestra selección de estilos cómodos y divertidos.</p>
          </div>
          <ColeccionPagination itemsPerPage={12} collection="ninos" />
        </div>
      </div>
    </div>
  );
};

export default Ninos;