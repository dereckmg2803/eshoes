import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import TerminosServicio from "./pages/terminosServicio/TerminosServicio"; // Ajusta la ruta según tu estructura de archivos
import PoliticaReembolso from "./pages/PoliticaReembolso/PoliticaReembolso";
import PoliticasDePrivacidad from "./pages/politicasdeprivacidad/politicasdeprivacidad";
import Hombre from "./pages/colecciones/Hombre";
import Mujer from "./pages/colecciones/Mujer";
import Ninos from "./pages/colecciones/Ninos";
import Originales from "./pages/colecciones/Originales";



const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
      
      
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/politica-reembolso" element={<PoliticaReembolso />} />
        


        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/product/:_id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/paymentgateway" element={<Payment />} />
        <Route path="/terminosServicio" element={<TerminosServicio />} /> 
        <Route path="/politicasdeprivacidad" element={<PoliticasDePrivacidad />} />{/* ✅ Nueva ruta añadida */}
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/hombre" element={<Layout />}>
  <Route index element={<Hombre />} />
</Route>
<Route path="/mujer" element={<Layout />}>
  <Route index element={<Mujer />} />
</Route>
<Route path="/ninos" element={<Layout />}>
  <Route index element={<Ninos />} />
</Route>
<Route path="/originales" element={<Layout />}>
  <Route index element={<Originales />} />
</Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
