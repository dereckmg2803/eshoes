import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux"; // Solo una vez
import { paginationItems } from "../../../constants";
import { logo } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import Flex from "../../designLayouts/Flex";



const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  
  const ref = useRef(null);
  const products = useSelector((state) => state.orebiReducer.products);
  
  const handleAnnouncementClick = () => {
    window.open("https://shhhhtenisco.my.canva.site", "_blank");
  };




  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = paginationItems.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

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
        <span>¡Aprovecha hasta 40% OFF en Outlet!</span>
      </div>
    </div>

      <nav className="h-24 px-4 max-w-container mx-auto relative">
        {/* Vista para escritorio */}
        
        <Flex className="hidden md:flex items-center justify-center h-full">
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
                          className="absolute top-36 z-50 bg-primeColor w-auto text-[#767676] h-auto p-4 pb-6"
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
                          </li>
                        </motion.ul>
                      )}
                    </div>
                    
          <Link to="/" className="flex justify-center items-center">
            <Image className="w-20 object-cover" imgSrc={logo} />
          </Link>
          <div className="relative w-full lg:w-[290px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
                      <input
                        className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[11px]"
                        type="text"
                        onChange={handleSearch}
                        value={searchQuery}
                        placeholder="Buscar"
                      />
                      <FaSearch className="w-5 h-5" />
                      {searchQuery && (
                        <div
                          className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
                        >
                          {searchQuery &&
                            filteredProducts.map((item) => (
                              <div
                                onClick={() =>
                                  navigate(
                                    `/product/${item.productName
                                      .toLowerCase()
                                      .split(" ")
                                      .join("")}`,
                                    {
                                      state: {
                                        item: item,
                                      },
                                    }
                                  ) &
                                  setShowSearchBar(true) &
                                  setSearchQuery("")
                                }
                                key={item._id}
                                className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                              >
                                <img className="w-24" src={item.img} alt="productImg" />
                                <div className="flex flex-col gap-1">
                                  <p className="font-semibold text-lg">
                                    {item.productName}
                                  </p>
                                  <p className="text-xs">{item.des}</p>
                                  <p className="text-sm">
                                    Price:{" "}
                                    <span className="text-primeColor font-semibold">
                                      ${item.price}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
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
                                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
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
                  <motion.ul
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
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
                    </li>
                  </motion.ul>
                )}
              </div>
              
            </Flex>
          </div>
          

          {/* Logo */}
          <Link to="/" className="flex justify-center items-center">
            <Image className="w-20 object-cover mx-auto" imgSrc={logo} />
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

export default Header;
