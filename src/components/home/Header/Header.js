import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { logo, logoLight } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
    return () => window.removeEventListener("resize", ResponsiveMenu);
  }, []);

  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        {/* Vista para escritorio */}
        <Flex className="hidden md:flex items-center justify-between h-full">
          <Link to="/">
            <Image className="w-20 object-cover" imgSrc={logo} />
          </Link>
          {showMenu && (
            <motion.ul
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center w-auto z-50 p-0 gap-2"
            >
              {navBarList.map(({ _id, title, link }) => (
                <NavLink
                  key={_id}
                  className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                  to={link}
                  state={{ data: location.pathname.split("/")[1] }}
                >
                  <li>{title}</li>
                </NavLink>
              ))}
            </motion.ul>
          )}
        </Flex>

        {/* Vista para móvil */}
        <Flex className="flex items-center justify-between h-full md:hidden">
          {/* Botón de menú hamburguesa */}
          <HiMenuAlt2
            onClick={() => setSidenav(!sidenav)}
            className="cursor-pointer w-8 h-6"
          />

          {/* Logo centrado */}
          <Link to="/">
            <Image className="w-20 object-cover mx-auto" imgSrc={logo} />
          </Link>

          {/* Botones de búsqueda y carrito */}
          <div className="flex items-center gap-4">
            <button
              className="text-lg flex items-center justify-center"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M4.5 10.5a6 6 0 1112 0 6 6 0 01-12 0z"
                />
              </svg>
            </button>
            <button
              className="text-lg flex items-center justify-center"
              aria-label="Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h18l-2.46 9.5a1.5 1.5 0 01-1.48 1.15H7.94a1.5 1.5 0 01-1.48-1.15L4 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 13a3 3 0 106 0M9 20a1 1 0 110-2 1 1 0 110 2zm8 0a1 1 0 110-2 1 1 0 110 2z"
                />
              </svg>
            </button>
          </div>
        </Flex>

        {/* Sidebar móvil */}
        {sidenav && (
          <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[80%] h-full relative"
            >
              <div className="w-full h-full bg-primeColor p-6">
                <img
                  className="w-28 mb-6"
                  src={logoLight}
                  alt="logoLight"
                />
                <ul className="text-gray-200 flex flex-col gap-2">
                  {navBarList.map((item) => (
                    <li
                      className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                      key={item._id}
                    >
                      <NavLink
                        to={item.link}
                        state={{ data: location.pathname.split("/")[1] }}
                        onClick={() => setSidenav(false)}
                      >
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h1
                    onClick={() => setCategory(!category)}
                    className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                  >
                    Shop by Category{" "}
                    <span className="text-lg">{category ? "-" : "+"}</span>
                  </h1>
                  {category && (
                    <motion.ul
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-sm flex flex-col gap-1"
                    >
                      <li className="headerSedenavLi">New Arrivals</li>
                      <li className="headerSedenavLi">Gadgets</li>
                      <li className="headerSedenavLi">Accessories</li>
                      <li className="headerSedenavLi">Electronics</li>
                      <li className="headerSedenavLi">Others</li>
                    </motion.ul>
                  )}
                </div>
              </div>
              <span
                onClick={() => setSidenav(false)}
                className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
              >
                <MdClose />
              </span>
            </motion.div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
