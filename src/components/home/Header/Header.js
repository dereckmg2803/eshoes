import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { paginationItems } from "../../../constants";
import { logo } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import Flex from "../../designLayouts/Flex";
import { products } from "../../../data/products";
import './Header.css'; // Importar el archivo CSS


const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 950);
  const navigate = useNavigate();
  const ref = useRef(null);
  const cartProducts = useSelector((state) => state.orebiReducer.products);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 950);
      setShowMenu(window.innerWidth >= 950);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = products.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  const handleProductClick = (item) => {
    const rootId = String(item.productName).toLowerCase().split(" ").join("");
    navigate(`/product/${rootId}`, { state: { item } });
    setSearchQuery("");
    setShowSearchBar(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-25 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <div className="w-full h-25 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
        {/* Black announcement bar como enlace */}
        <div
          className="w-full bg-black text-white py-2 text-center cursor-pointer"
          onClick={() => window.open("https://shhhhtenisco.my.canva.site", "_blank")}
        >
          <span>¡Descuento de 40% en toda la tienda!</span>
        </div>
      </div>

      <nav className="h-24 px-4 max-w-container mx-auto relative">
        {/* Vista para escritorio (solo se muestra si no es móvil) */}
{!isMobile && (
  <Flex className="hidden md:flex items-center justify-between h-full px-6">
    {/* Logo a la izquierda */}
    <Link to="/" className="flex justify-center items-center">
      <Image className="w-20 object-cover" imgSrc={logo} />
    </Link>

    {/* Secciones centradas */}
    <div className="flex gap-6 mx-auto">
      <Link to="/hombre" className="text-primeColor hover-effect">
        Hombre
      </Link>
      <Link to="/mujer" className="text-primeColor hover-effect">
        Mujer
      </Link>
      <Link to="/ninos" className="text-primeColor hover-effect">
        Niños
      </Link>
      <Link to="/originales" className="text-primeColor hover-effect">
        Originales
      </Link>
    </div>

    {/* Barra de búsqueda y elementos de usuario a la derecha */}
    <div className="flex items-center gap-6">
      {/* Barra de búsqueda */}
      <div className="relative w-[290px] h-[50px] text-base text-primeColor bg-gray-100 flex items-center gap-2 justify-between px-6 rounded-xl">
        <input
          className="flex-1 h-full outline-none placeholder:text-[#767676] placeholder:text-[11px] bg-transparent"
          type="text"
          onChange={handleSearch}
          value={searchQuery}
          placeholder="Buscar"
          onFocus={() => setShow(true)}
          onBlur={() => setTimeout(() => setShow(false), 200)}
        />
        <button className="text-lg" aria-label="Search">
          <FaSearch className="w-5 h-5" />
        </button>

        {/* Resultados de búsqueda */}
        {show && searchQuery.length > 0 && (
          <div className="absolute top-full right-0 w-full md:w-[500px] bg-white border border-gray-300 shadow-lg rounded-b-md max-h-[70vh] overflow-y-auto z-50">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleProductClick(item)}
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-200"
                >
                  <img
                    src={item.img}
                    alt={item.productName}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.productName}</h3>
                    <p className="text-sm text-gray-600">{item.brand}</p>
                    <div className="flex items-center gap-2">
                      {item.discountPercentage ? (
                        <>
                          <p className="text-gray-500 line-through text-sm">
                            ${item.price.toLocaleString('es-CO')}
                          </p>
                          <p className="text-primeColor font-bold">
                            ${item.discountedPrice}
                          </p>
                        </>
                      ) : (
                        <p className="text-primeColor font-bold">
                          ${item.price.toLocaleString('es-CO')}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="text-xs px-2 py-1 bg-gray-100 rounded">
                    {item.category}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">
                No se encontraron productos
              </div>
            )}
          </div>
        )}
      </div>

      {/* Ícono de usuario y carrito */}
      <div className="flex gap-4 items-center cursor-pointer relative">
        <div onClick={() => setShowUser(!showUser)} className="flex">
          <FaUser />
          <FaCaretDown />
        </div>
        {showUser && (
          <motion.ul
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-6 left-0 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"
          >
            <Link to="/signin">
              <li className="text-gray-400 px-4 py-1 border-b border-gray-400 hover:border-white hover:text-white duration-300 cursor-pointer">
                Login
              </li>
            </Link>
            <Link onClick={() => setShowUser(false)} to="/signup">
              <li className="text-gray-400 px-4 py-1 border-b border-gray-400 hover:border-white hover:text-white duration-300 cursor-pointer">
                Sign Up
              </li>
            </Link>
            <li className="text-gray-400 px-4 py-1 border-b border-gray-400 hover:border-white hover:text-white duration-300 cursor-pointer">
              Profile
            </li>
            <li className="text-gray-400 px-4 py-1 border-b border-gray-400 hover:border-white hover:text-white duration-300 cursor-pointer">
              Others
            </li>
          </motion.ul>
        )}
        <Link to="/cart">
          <div className="relative">
            <FaShoppingCart />
            <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
              {cartProducts.length > 0 ? cartProducts.length : 0}
            </span>
          </div>
        </Link>
      </div>
    </div>
  </Flex>
)}


        {/* Vista para móvil (solo se muestra si es móvil) */}
        {isMobile && (
          <Flex className="flex items-center justify-between h-full">
            {/* Botón de menú hamburguesa */}
            <div className="max-w-container mx-0">
              <Flex className="flex flex-col lg:flex-row items-center justify-between w-full px-4 pb-4 lg:pb-0 h-5 lg:h-0">
                <div
                  onClick={() => setShow(!show)}
                  ref={ref}
                  className="flex h-14 cursor-pointer items-center gap-2 text-primeColor"
                >
                  <HiOutlineMenuAlt4 className="w-5 h-5" />
                  <p className="text-[14px] font-normal"></p>

                  {show && (
                    <motion.ul
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-14 z-50 bg-primeColor w-auto text-[#767676] h-auto p-4 pb-6"
                    >
                      {[
                        { name: "Hombre", path: "/hombre" },
                        { name: "Mujer", path: "/mujer" },
                        { name: "Niños", path: "/ninos" },
                        { name: "Originales", path: "/originales" },
                      ].map((item) => (
                        <li
                          key={item.path}
                          className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer"
                          onClick={() => navigate(item.path)}
                        >
                          {item.name}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              </Flex>
            </div>

            {/* Logo */}
            <Link to="/" className="flex justify-center items-center">
              <Image
                className={`mx-auto object-cover transition-transform duration-300 ${
                  isScrolled ? "w-24 scale-110" : "w-20 scale-100"
                }`}
                imgSrc={logo}
              />
            </Link>

            {/* Botones de búsqueda, carrito y usuario */}
            <div className="flex items-center gap-4">
              {/* Botón de búsqueda */}
              <button
                className="text-lg"
                onClick={() => setShowSearchBar(!showSearchBar)}
                aria-label="Search"
              >
                <FaSearch className="w-5 h-5" />
              </button>

              {/* Botón de carrito */}
              <Link to="/cart">
                <div className="relative">
                  <FaShoppingCart />
                  <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                    {cartProducts.length > 0 ? cartProducts.length : 0}
                  </span>
                </div>
              </Link>

              {/* Menú de usuario */}
              <div className="flex gap-4mt-2 lg:mt-0 items-center pr-0 cursor-pointer relative">
                <div onClick={() => setShowUser(!showUser)} className="flex">
                  <FaUser />
                  <FaCaretDown />
                </div>
                {showUser && (
                  <motion.ul
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-6 right-1 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"
                  >
                    <Link to="/signin">
                      <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        Login
                      </li>
                    </Link>
                    <Link onClick={() => setShowUser(false)} to="/signup">
                      <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        Sign Up
                      </li>
                    </Link>
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Profile
                    </li>
                  </motion.ul>
                )}
              </div>
            </div>
          </Flex>
        )}

        {/* Barra de búsqueda móvil */}
        {showSearchBar && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 right-0 w-full max-w-[300px] h-full bg-white shadow-lg z-50"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-bold">Search</h2>
              <button
                onClick={() => setShowSearchBar(false)}
                className="text-xl"
                aria-label="Close"
              >
                <MdClose />
              </button>
            </div>
            <div className="p-4">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                className="w-full p-2 border rounded-lg outline-none"
                placeholder="Search for products..."
              />
              <div className="mt-4 overflow-y-auto max-h-[70vh]">
                {filteredProducts.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleProductClick(item)}
                    className="flex items-center gap-3 p-3 border-b cursor-pointer hover:bg-gray-50"
                  >
                    <img
                      src={item.img}
                      alt={item.productName}
                      className="w-12 h-12 object-cover"
                    />
                    <div>
                      <p className="font-semibold">{item.productName}</p>
                      <p className="text-sm text-gray-600">{item.brand}</p>
                      <div className="flex items-center gap-2">
                        {item.discountPercentage ? (
                          <>
                            <p className="text-gray-500 line-through text-sm">
                              ${item.price.toLocaleString('es-CO')}
                            </p>
                            <p className="text-primeColor font-bold">
                              ${item.discountedPrice}
                            </p>
                          </>
                        ) : (
                          <p className="text-primeColor font-bold">
                            ${item.price.toLocaleString('es-CO')}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export default Header;
