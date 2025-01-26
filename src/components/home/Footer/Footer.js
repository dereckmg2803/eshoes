import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Sección de enlaces */}
          <div className="flex gap-6 text-sm">
            <a href="https://wa.me/3158591463" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              WhatsApp
            </a>
            <a href="/colecciones" className="hover:text-purple-400">
              Colecciones
            </a>
            <a href="/terminos" className="hover:text-purple-400">
              Términos del servicio
            </a>
            <a href="/politica-reembolso" className="hover:text-purple-400">
              Política de reembolso
            </a>
          </div>

          {/* Sección de iconos sociales */}
          <div className="flex gap-6 text-2xl">
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <FaTiktok />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <FaFacebook />
            </a>
          </div>
        </div>
        {/* Texto adicional para diseño */}
        <div className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
