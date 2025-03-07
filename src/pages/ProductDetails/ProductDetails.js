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
    <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 bg-gray-100 p-4 pb-10 relative">
      {/* Contenedor de la imagen principal y previews */}
      <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-10">
        {/* Imagen principal del producto */}
        <div className="w-full flex items-center justify-center">
          <img
            className="max-w-[90%] max-h-[70vh] object-contain"
            src={productInfo.moreImages?.[currentImageIndex] || productInfo.img}
            alt={productInfo.productName}
          />
        </div>

        {/* Previews de las imágenes */}
        <div className="w-full flex justify-center mt-4 space-x-2">
          {productInfo.moreImages?.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className="w-24 h-24 flex items-center justify-center overflow-hidden rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all"
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

      {/* Tarjeta de información del producto */}
      <div
        className="relative z-20 mt-[53vh] p-6 rounded-2xl shadow-lg transition-all duration-500"
        style={{
          transform: `scale(${scaleValue})`,
          opacity: 1,
          backgroundColor: glassEffect ? "rgba(255, 255, 255, 0.3)" : "white",
          border: glassEffect ? "1px solid rgba(255, 255, 255, 0.4)" : "1px solid rgba(200, 200, 200, 0.8)",
          transition: "backdrop-filter 0.5s ease, background-color 0.5s ease",
          position: "relative",
        }}
      >
        {/* Fondo de la tarjeta con efecto glass separado */}
        <div
          className="absolute inset-0 rounded-2xl backdrop-blur-lg"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.3)", zIndex: -1 }}
        ></div>

        {/* Contenido de la tarjeta sin desenfoque */}
        <div className="relative">
          <ProductInfo productInfo={productInfo} />

          <div className="mt-6 border-t pt-4">
            <h2 className="text-lg font-semibold mb-3">Productos similares</h2>
            {stableProductsOnSale}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;