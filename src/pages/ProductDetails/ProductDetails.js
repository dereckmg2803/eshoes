import React, { useEffect, useState, useMemo } from "react";
import './efectbotones.css';
import { useLocation } from "react-router-dom";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import ProductsOnSale from "../../components/pageProps/productDetails/ProductsOnSale";

const ProductDetails = () => {
  const location = useLocation();
  const [productInfo, setProductInfo] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (location.state && location.state.item) {
      const item = location.state.item;
      setProductInfo({
        ...item,
        sizes: item.sizes || [38, 39, 40, 41, 42],
      });
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const handleNextImage = () => {
    if (productInfo.moreImages?.length) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productInfo.moreImages.length);
    }
  };

  const handlePrevImage = () => {
    if (productInfo.moreImages?.length) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + productInfo.moreImages.length) % productInfo.moreImages.length);
    }
  };

  const handlePreviewClick = (index) => {
    setCurrentImageIndex(index);
  };

  const stableProductsOnSale = useMemo(() => <ProductsOnSale />, []);

  const scaleValue = Math.min(0.9 + scrollY / 900, 1.0);
  const glassEffect = scrollY < 100;

  if (!productInfo.productName) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-4 bg-gray-100 p-4 pb-10 relative">
      {/* Sección sticky con las imágenes */}
      <div className="sticky top-0 w-full flex flex-col items-center justify-center z-10 bg-gray-100 pt-4 pb-4">
        {/* Imagen principal */}
        <div className="w-full flex items-center justify-center">
          <img
            className="max-w-[90%] max-h-[50vh] object-contain"
            src={productInfo.moreImages?.[currentImageIndex] || productInfo.img}
            alt={productInfo.productName}
          />
        </div>

        {/* Previews de imágenes */}
        <div className="w-full flex justify-center mt-4 space-x-2">
          {productInfo.moreImages?.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center overflow-hidden rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all"
              onClick={() => handlePreviewClick(index)}
            >
              <img
                className="w-full h-full object-cover"
                src={image}
                alt={`Preview ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tarjeta de información con posición ajustada */}
      <div
        className="relative z-20 p-6 rounded-2xl shadow-lg transition-all duration-500 -mt-4"
        style={{
          transform: `scale(${scaleValue})`,
          opacity: 1,
          backgroundColor: glassEffect ? "rgba(255, 255, 255, 0.3)" : "white",
          border: glassEffect ? "1px solid rgba(255, 255, 255, 0.4)" : "1px solid rgba(200, 200, 200, 0.8)",
          transition: "backdrop-filter 0.5s ease, background-color 0.5s ease",
          position: "relative",
        }}
      >
        {/* Efecto de vidrio esmerilado */}
        <div
          className="absolute inset-0 rounded-2xl backdrop-blur-lg"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.3)", zIndex: -1 }}
        ></div>

        {/* Contenido de la tarjeta */}
        <div className="relative">
          <ProductInfo productInfo={productInfo} />

          {/* Productos relacionados */}
          <div className="mt-6 border-t pt-4">
            <h2 className="text-lg font-semibold mb-3">Productos similares</h2>
            {stableProductsOnSale}
          </div>
        </div>
      </div>
      
      {/* Espaciador final */}
      <div className="h-16"></div>
    </div>
  );
};

export default ProductDetails;