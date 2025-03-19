// Modificación de src/data/products.js
// Añadir género como propiedad a los productos

import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../assets/images/index";

const calculateDiscountedPrice = (price, discountPercentage) => {
  const numericPrice = parseFloat(price);
  const discountedPrice = numericPrice * (1 - discountPercentage / 100);
  return discountedPrice.toLocaleString('de-DE', { minimumFractionDigits: 0 });
};

export const products = [
  {
    id: "SHOE001",
    img: bestSellerOne,
    moreImages: [bestSellerOne, bestSellerThree, bestSellerFour],
    productName: "Nike Air Max",
    price: 350000,
    discountPercentage: 20,
    discountedPrice: calculateDiscountedPrice(350000, 20),
    color: "Black/White",
    badge: "Nuevo",
    category: "running",
    des: "Zapatillas deportivas Nike Air Max con tecnología de amortiguación superior.",
    inStock: true,
    sizes: ["38", "39", "40", "41", "42"],
    brand: "Nike",
    collection: "hombre" // Añadido colección
  },
  {
    id: "SHOE002",
    img: bestSellerTwo,
    moreImages: [bestSellerTwo, bestSellerThree, bestSellerFour],
    productName: "Adidas Ultraboost",
    price: 180000,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(180000, 30),
    color: "Gray",
    badge: "Destacado",
    category: "running",
    des: "Zapatillas Adidas Ultraboost con tecnología Boost para máximo confort.",
    inStock: true,
    sizes: ["39", "40", "41", "42", "43"],
    brand: "Adidas",
    collection: "hombre" // Añadido colección
  },
  {
    id: "SHOE003",
    img: bestSellerThree,
    moreImages: [bestSellerThree, bestSellerTwo, bestSellerFour],
    productName: "Puma RS-X",
    price: 250000,
    discountPercentage: 20,
    discountedPrice: calculateDiscountedPrice(250000, 20),
    color: "Mixed",
    badge: "Oferta",
    category: "casual",
    des: "Zapatillas Puma RS-X con diseño retro y tecnología moderna.",
    inStock: true,
    sizes: ["37", "38", "39", "40", "41"],
    brand: "Puma",
    collection: "mujer" // Añadido colección
  },
  {
    id: "SHOE004",
    img: bestSellerFour,
    moreImages: [bestSellerFour, bestSellerTwo, bestSellerThree],
    productName: "New Balance 574",
    price: 220000,
    discountPercentage: 20,
    discountedPrice: calculateDiscountedPrice(220000, 20),
    color: "Navy",
    badge: false,
    category: "casual",
    des: "Clásicas zapatillas New Balance 574 con diseño atemporal.",
    inStock: true,
    sizes: ["40", "41", "42", "43", "44"],
    brand: "New Balance",
    collection: "hombre" // Añadido colección
  },
  {
    id: "SHOE005",
    img: newArrOne,
    moreImages: [newArrOne, newArrThree, newArrFour],
    productName: "Nike Air Jordan",
    price: 450000,
    discountPercentage: 20,
    discountedPrice: calculateDiscountedPrice(450000, 20),
    color: "Red/Black",
    badge: "Premium",
    category: "basketball",
    des: "Icónicas zapatillas Air Jordan para baloncesto y estilo urbano.",
    inStock: true,
    sizes: ["41", "42", "43", "44", "45"],
    brand: "Nike",
    collection: "hombre" // Añadido colección
  },
  {
    id: "SHOE006",
    img: newArrTwo,
    moreImages: [newArrTwo, newArrThree, newArrFour],
    productName: "Adidas Superstar",
    price: 200000,
    discountPercentage: 20,
    discountedPrice: calculateDiscountedPrice(200000, 20),
    color: "White/Black",
    badge: "Clásico",
    category: "casual",
    des: "Zapatillas Adidas Superstar, un ícono del estilo urbano.",
    inStock: true,
    sizes: ["36", "37", "38", "39", "40"],
    brand: "Adidas",
    collection: "mujer" // Añadido colección
  },
  {
    id: "SHOE007",
    img: newArrThree,
    moreImages: [newArrThree, newArrTwo, newArrFour],
    productName: "Vans Old Skool",
    price: 180000,
    discountPercentage: 20,
    discountedPrice: calculateDiscountedPrice(180000, 20),
    color: "Black",
    badge: false,
    category: "skateboarding",
    des: "Clásicas zapatillas Vans Old Skool perfectas para skateboarding.",
    inStock: true,
    sizes: ["38", "39", "40", "41", "42"],
    brand: "Vans",
    collection: "ninos" // Añadido colección
  },
  {
    id: "SHOE008",
    img: newArrFour,
    moreImages: [newArrFour, newArrTwo, newArrThree],
    productName: "Converse Chuck Taylor",
    price: 150000,
    discountPercentage: 20,
    discountedPrice: calculateDiscountedPrice(150000, 20),
    color: "White",
    badge: "Clásico",
    category: "casual",
    des: "Zapatillas Converse Chuck Taylor All Star, un clásico atemporal.",
    inStock: true,
    sizes: ["37", "38", "39", "40", "41", "42"],
    brand: "Converse",
    collection: "ninos" // Añadido colección
  },
  {
    id: "SHOE009",
    img: newArrOne,
    moreImages: [newArrOne, newArrThree, newArrFour],
    productName: "Brooks Ghost 14",
    price: 380000,
    discountPercentage: 20,
    discountedPrice: calculateDiscountedPrice(380000, 20),
    color: "Blue/Silver",
    badge: "Nuevo",
    category: "running",
    des: "Zapatillas Brooks Ghost 14 con tecnología DNA LOFT para máxima amortiguación.",
    inStock: true,
    sizes: ["39", "40", "41", "42", "43"],
    brand: "Brooks",
    collection: "mujer" // Añadido colección
  },
  {
    id: "1101",
    img: spfOne,
    moreImages: [spfOne, spfThree, spfFour],
    productName: "Cap for Boys",
    price: 35000,
    discountPercentage: 20,
    discountedPrice: calculateDiscountedPrice(35000, 20),
    color: "Blank and White",
    badge: "Nuevo",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    category: "special",
    inStock: true,
    sizes: ["S", "M", "L"],
    brand: "Generic",
    collection: "ninos" // Añadido colección
  },
  {
    id: "1102",
    img: spfTwo,
    moreImages: [spfTwo, spfThree, spfFour],
    productName: "Adidas Samba",
    price: 190000,
    discountPercentage: 20,
    discountedPrice: calculateDiscountedPrice(190000, 20),
    color: "Negro",
    badge: "Oferta",
    des: "Favorito entre los amantes de la comodidad y el diseño retro.",
    category: "special",
    inStock: true,
    sizes: ["38", "39", "40", "41", "42"],
    brand: "Adidas",
    collection: "originales" // Añadido colección
  },
  {
    id: "1103",
    img: spfThree,
    moreImages: [spfThree, spfTwo, spfFour],
    productName: "Headphones",
    price: 2500,
    discountPercentage: 20,
    discountedPrice: calculateDiscountedPrice(2500, 20),
    color: "Mixed",
    badge: "Nuevo",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    category: "special",
    inStock: true,
    sizes: ["One Size"],
    brand: "Generic",
    collection: "originales" // Añadido colección
  },
  {
    id: "1104",
    img: spfFour,
    moreImages: [spfFour, spfTwo, spfThree],
    productName: "New Balance 530",
    price: 230000,
    discountPercentage: 20,
    discountedPrice: calculateDiscountedPrice(230000, 20),
    color: "White",
    badge: "Nuevo",
    des: "Los New Balance 530 son el equilibrio perfecto entre estilo retro y tecnología moderna, diseñados para quienes buscan comodidad y moda en cada paso. estos tenis destacan por su silueta atemporal y detalles icónicos que complementan cualquier look, desde casual hasta deportivo.",
    category: "special",
    inStock: true,
    sizes: ["40", "41", "42", "43", "44"],
    brand: "New Balance",
    collection: "originales" // Añadido colección
  }
];

// Funciones de utilidad para filtrar productos
export const getProductById = (id) => products.find(product => product.id === id);
export const getProductsByCategory = (category) => products.filter(product => product.category === category);
export const getProductsByBrand = (brand) => products.filter(product => product.brand === brand);
export const getNewArrivals = () => {
  // Devolver los últimos 5 productos como nuevas llegadas
  return products.slice(-5);
};
export const getBestSellers = () => products.slice(0, 4); // Primeros 4 productos como best sellers

// Nueva función para obtener productos por colección
export const getProductsByCollection = (collection) => 
  products.filter(product => product.collection === collection.toLowerCase());

// Mejorar la función para obtener productos similares
export const getSimilarProducts = (currentProduct, limit = 4) => {
  if (!currentProduct) return [];
  
  // Filtrar productos que coincidan con la categoría o colección
  const similarProducts = products.filter(
    product => 
      (product.category === currentProduct.category || 
       product.collection === currentProduct.collection) && 
      product.id !== currentProduct.id
  );
  
  // Mezclar el array de forma aleatoria
  const shuffled = [...similarProducts].sort(() => 0.5 - Math.random());
  
  // Devolver solo la cantidad especificada
  return shuffled.slice(0, limit);
};

export const getSpecialOffers = () => products.filter(product => product.category === "special");

export default products;