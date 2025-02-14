import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Alertas.css"; // Asegúrate de que esta línea existe

const alertasData = [
  { title: "ENVÍOS", text: ["A TODA", "COLOMBIA"] },
  { title: "SALE", text: ["DESCUENTOS", "HASTA 40%"] },
  { title: "CAMBIOS", text: ["AL RECIBIR TIENES", "10 DÍAS"] },
];

const cardClass =
  "w-full min-h-[100px] flex flex-col items-center justify-center p-4 bg-gray-100 text-center rounded-lg shadow-md";

const Alertas = () => {
  return (
    <div className="relative">
      <style>
        {`.swiper-pagination-bullet-active { background-color: black !important; }`}
      </style>

      {/* Mobile View - Swiper */}
      <div className="block md:hidden relative pb-100">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="pb-6"
        >
          <div className="swiper-pagination mt-4"></div>
          {alertasData.map((alerta, index) => (
            <SwiperSlide key={index}>
              <div className={cardClass}>
                <h3 className="text-lg font-bold">{alerta.title}</h3>
                <p className="text-sm">
                  {alerta.text[0]}{" "}
                  <span className="font-bold">{alerta.text[1]}</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop View - Static */}
      <div className="hidden md:flex flex-row justify-center items-center gap-4">
        {alertasData.map((alerta, index) => (
          <div key={index} className="w-full md:w-1/3">
            <div className={cardClass}>
              <h3 className="text-lg font-bold">{alerta.title}</h3>
              <p className="text-sm">
                {alerta.text[0]}{" "}
                <span className="font-bold">{alerta.text[1]}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alertas;
