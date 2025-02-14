import React, { useEffect, useState, useRef } from "react";
<<<<<<< HEAD
import { Link, useLocation, useNavigate } from "react-router-dom";
=======
import { Link, useNavigate } from "react-router-dom";
>>>>>>> nueva-rama
import { MdClose } from "react-icons/md";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
<<<<<<< HEAD
import { useSelector } from "react-redux"; // Solo una vez
=======
import { useSelector } from "react-redux";
>>>>>>> nueva-rama
import { paginationItems } from "../../../constants";
import { logo } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import Flex from "../../designLayouts/Flex";

<<<<<<< HEAD


const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

=======
const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
>>>>>>> nueva-rama
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
<<<<<<< HEAD
  const navigate = useNavigate();
  
  
  const ref = useRef(null);
  const products = useSelector((state) => state.orebiReducer.products);
  
  const handleAnnouncementClick = () => {
    window.open("https://shhhhtenisco.my.canva.site", "_blank");
  };
  



=======
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 950); // Estado para manejar el tamaño de la pantalla
  const navigate = useNavigate();
  const ref = useRef(null);
  const products = useSelector((state) => state.orebiReducer.products);

  // Efecto para detectar cambios en el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 950);
      setShowMenu(window.innerWidth >= 950); // Ajustar el menú para dispositivos móviles
    };

    window.addEventListener("resize", handleResize);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
>>>>>>> nueva-rama

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
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

  useEffect(() => {
    const filtered = paginationItems.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

<<<<<<< HEAD
  useEffect(() => {
    const ResponsiveMenu = () => {
      setShowMenu(window.innerWidth >= 667);
    };

    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
    return () => window.removeEventListener("resize", ResponsiveMenu);
  }, []);
  

  return (
    
    
    <div className="w-full h-25 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      
      <div className="w-full h-25 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      {/* Black announcement bar como enlace */}
      <div
        className="w-full bg-black text-white py-2 text-center cursor-pointer"
        onClick={handleAnnouncementClick} // Activar el enlace al hacer clic
      >
        <span>¡Descuento de 40% en toda la tienda!</span>
      </div>
    </div>

      <nav className="h-24 px-4 max-w-container mx-auto relative">
        {/* Vista para escritorio */}
        
        <Flex className="hidden md:flex items-center justify-between h-full px-6">
  {/* Logo a la izquierda */}
  <Link to="/" className="flex justify-center items-center">
    <Image className="w-20 object-cover" imgSrc={logo} />
  </Link>

  {/* Secciones centradas */}
  <div className="flex gap-6 mx-auto">
    <Link to="/sneakers" className="text-primeColor hover:text-gray-600 duration-300">
      Sneakers
    </Link>
    <Link to="/hombre" className="text-primeColor hover:text-gray-600 duration-300">
      Hombre
    </Link>
    <Link to="/mujer" className="text-primeColor hover:text-gray-600 duration-300">
      Mujer
    </Link>
    <Link to="/ninos" className="text-primeColor hover:text-gray-600 duration-300">
      Niños
    </Link>
    <Link to="/originales" className="text-primeColor hover:text-gray-600 duration-300">
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
      />
      <button className="text-lg" aria-label="Search">
        <FaSearch className="w-5 h-5" />
      </button>

      {/* Resultados de búsqueda */}
      {searchQuery && (
        <div className="absolute top-14 left-0 w-full max-h-96 bg-white shadow-2xl z-50 overflow-y-auto rounded-lg">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div
                key={item._id}
                onClick={() => {
                  navigate(`/product/${item.productName.toLowerCase().replace(/\s+/g, "")}`, {
                    state: { item },
                  });
                  setSearchQuery("");
                }}
                className="flex items-center gap-3 p-3 border-b hover:bg-gray-200 cursor-pointer"
              >
                <img className="w-16 h-16 object-cover" src={item.img} alt={item.productName} />
                <div>
                  <p className="text-sm font-semibold">{item.productName}</p>
                  <p className="text-xs text-gray-500">{item.des}</p>
                  <p className="text-sm text-primeColor font-semibold">${item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="p-3 text-gray-500 text-sm">No se encontraron resultados</p>
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
            {products.length > 0 ? products.length : 0}
          </span>
        </div>
      </Link>
    </div>
  </div>
</Flex>


        {/* Vista para móvil */}
        <Flex className="flex items-center justify-between h-full md:hidden">
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
=======
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
              <Link to="/sneakers" className="text-primeColor hover:text-gray-600 duration-300">
                Sneakers
              </Link>
              <Link to="/hombre" className="text-primeColor hover:text-gray-600 duration-300">
                Hombre
              </Link>
              <Link to="/mujer" className="text-primeColor hover:text-gray-600 duration-300">
                Mujer
              </Link>
              <Link to="/ninos" className="text-primeColor hover:text-gray-600 duration-300">
                Niños
              </Link>
              <Link to="/originales" className="text-primeColor hover:text-gray-600 duration-300">
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
                />
                <button className="text-lg" aria-label="Search">
                  <FaSearch className="w-5 h-5" />
                </button>

                {/* Resultados de búsqueda */}
                {searchQuery && (
                  <div className="absolute top-14 left-0 w-full max-h-96 bg-white shadow-2xl z-50 overflow-y-auto rounded-lg">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((item) => (
                        <div
                          key={item._id}
                          onClick={() => {
                            navigate(`/product/${item.productName.toLowerCase().replace(/\s+/g, "")}`, {
                              state: { item },
                            });
                            setSearchQuery("");
                          }}
                          className="flex items-center gap-3 p-3 border-b hover:bg-gray-200 cursor-pointer"
                        >
                          <img className="w-16 h-16 object-cover" src={item.img} alt={item.productName} />
                          <div>
                            <p className="text-sm font-semibold">{item.productName}</p>
                            <p className="text-xs text-gray-500">{item.des}</p>
                            <p className="text-sm text-primeColor font-semibold">${item.price}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="p-3 text-gray-500 text-sm">No se encontraron resultados</p>
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
>>>>>>> nueva-rama
                  <motion.ul
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
<<<<<<< HEAD
                    className="absolute top-14 z-50 bg-primeColor w-auto text-[#767676] h-auto p-4 pb-6"
                  >
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Accessories
                    </li>
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Furniture
                    </li>
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Electronics
                    </li>
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Clothes
                    </li>
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Bags
                    </li>
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                      Home appliances
=======
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
                      {products.length > 0 ? products.length : 0}
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
                      <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        Sneakers
                      </li>
                      <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        Hombre
                      </li>
                      <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        Mujer
                      </li>
                      <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        Niños
                      </li>
                      <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                        Originales
                      </li>
                      
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
                    {products.length > 0 ? products.length : 0}
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
>>>>>>> nueva-rama
                    </li>
                  </motion.ul>
                )}
              </div>
<<<<<<< HEAD
              
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
                                      {products.length > 0 ? products.length : 0}
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
=======
            </div>
          </Flex>
        )}
>>>>>>> nueva-rama

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
                    key={item._id}
                    onClick={() => {
                      navigate(`/product/${item.productName}`);
                      setSearchQuery("");
                      setShowSearchBar(false);
                    }}
                    className="flex items-center gap-3 p-3 border-b cursor-pointer"
                  >
                    <img
                      src={item.img}
                      alt={item.productName}
                      className="w-12 h-12 object-cover"
                    />
                    <div>
                      <p className="font-semibold">{item.productName}</p>
                      <p className="text-sm">{item.des}</p>
                      <p className="text-primeColor font-bold">
                        ${item.price}
                      </p>
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

<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> nueva-rama
