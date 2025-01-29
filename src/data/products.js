import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../assets/images/index";

const calculateDiscountedPrice = (price) => {
  const numericPrice = parseFloat(price);
  const discountedPrice = numericPrice * 0.8; // 20% de descuento
  return discountedPrice.toLocaleString('de-DE', { minimumFractionDigits: 0 });
};

export const products = [
  {
    id: "SHOE001",
    img: bestSellerOne,
    productName: "Nike Air Max",
    price: 350000,
    discountedPrice: calculateDiscountedPrice(350000),
    color: "Black/White",
    badge: "Nuevo",
    category: "running",
    des: "Zapatillas deportivas Nike Air Max con tecnología de amortiguación superior.",
    inStock: true,
    sizes: ["38", "39", "40", "41", "42"],
    brand: "Nike"
  },
  {
    id: "SHOE002",
    img: bestSellerTwo,
    productName: "Adidas Ultraboost",
    price: 180000,
    discountedPrice: calculateDiscountedPrice(180000),
    color: "Gray",
    badge: "Destacado",
    category: "running",
    des: "Zapatillas Adidas Ultraboost con tecnología Boost para máximo confort.",
    inStock: true,
    sizes: ["39", "40", "41", "42", "43"],
    brand: "Adidas"
  },
  {
    id: "SHOE003",
    img: bestSellerThree,
    productName: "Puma RS-X",
    price: 250000,
    discountedPrice: calculateDiscountedPrice(250000),
    color: "Mixed",
    badge: "Oferta",
    category: "casual",
    des: "Zapatillas Puma RS-X con diseño retro y tecnología moderna.",
    inStock: true,
    sizes: ["37", "38", "39", "40", "41"],
    brand: "Puma"
  },
  {
    id: "SHOE004",
    img: bestSellerFour,
    productName: "New Balance 574",
    price: 220000,
    discountedPrice: calculateDiscountedPrice(220000),
    color: "Navy",
    badge: false,
    category: "casual",
    des: "Clásicas zapatillas New Balance 574 con diseño atemporal.",
    inStock: true,
    sizes: ["40", "41", "42", "43", "44"],
    brand: "New Balance"
  },
  {
    id: "SHOE005",
    img: newArrOne,
    productName: "Nike Air Jordan",
    price: 450000,
    discountedPrice: calculateDiscountedPrice(450000),
    color: "Red/Black",
    badge: "Premium",
    category: "basketball",
    des: "Icónicas zapatillas Air Jordan para baloncesto y estilo urbano.",
    inStock: true,
    sizes: ["41", "42", "43", "44", "45"],
    brand: "Nike"
  },
  {
    id: "SHOE006",
    img: newArrTwo,
    productName: "Adidas Superstar",
    price: 200000,
    discountedPrice: calculateDiscountedPrice(200000),
    color: "White/Black",
    badge: "Clásico",
    category: "casual",
    des: "Zapatillas Adidas Superstar, un ícono del estilo urbano.",
    inStock: true,
    sizes: ["36", "37", "38", "39", "40"],
    brand: "Adidas"
  },
  {
    id: "SHOE007",
    img: newArrThree,
    productName: "Vans Old Skool",
    price: 180000,
    discountedPrice: calculateDiscountedPrice(180000),
    color: "Black",
    badge: false,
    category: "skateboarding",
    des: "Clásicas zapatillas Vans Old Skool perfectas para skateboarding.",
    inStock: true,
    sizes: ["38", "39", "40", "41", "42"],
    brand: "Vans"
  },
  {
    id: "SHOE008",
    img: newArrFour,
    productName: "Converse Chuck Taylor",
    price: 150000,
    discountedPrice: calculateDiscountedPrice(150000),
    color: "White",
    badge: "Clásico",
    category: "casual",
    des: "Zapatillas Converse Chuck Taylor All Star, un clásico atemporal.",
    inStock: true,
    sizes: ["37", "38", "39", "40", "41", "42",],
    brand: "Converse"
  },
  {
    id: "SHOE009",
    img: newArrOne,
    productName: "Brooks Ghost 14",
    price: 380000,
    discountedPrice: calculateDiscountedPrice(380000),
    color: "Blue/Silver",
    badge: "Nuevo",
    category: "running",
    des: "Zapatillas Brooks Ghost 14 con tecnología DNA LOFT para máxima amortiguación.",
    inStock: true,
    sizes: ["39", "40", "41", "42", "43"],
    brand: "Brooks"
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

// Función para obtener productos similares
export const getSimilarProducts = (currentProduct, limit = 4) => {
  // Filtrar productos de la misma categoría, excluyendo el producto actual
  const similarProducts = products.filter(
    product => 
      product.category === currentProduct.category && 
      product.id !== currentProduct.id
  );
  
  // Mezclar el array de forma aleatoria
  const shuffled = [...similarProducts].sort(() => 0.5 - Math.random());
  
  // Devolver solo la cantidad especificada
  return shuffled.slice(0, limit);
};

export default products;
