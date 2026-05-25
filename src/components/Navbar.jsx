import { useState } from "react";
import { Link } from "react-router-dom";  
import logo from "../assets/img/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl h-16 bg-black/80 backdrop-blur-md text-white p-5 sm:px-6 rounded-2xl shadow-xl border border-white/10 z-50">

      <div className="flex items-center justify-between h-full">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Duckode"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Botón móvil */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link to="/" className="hover:text-gray-300 transition">
              Inicio
            </Link>
          </li>

          <li>
            <Link to="/portafolio" className="hover:text-gray-300 transition">
              Portafolio
            </Link>
          </li>

          <li>
            <Link to="/contacto" className="hover:text-gray-300 transition">
              Contacto
            </Link>
          </li>
        </ul>

      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-center border-t border-white/10 pt-4 bg-black/95 rounded-xl py-4">

          <Link to="/" onClick={() => setOpen(false)}>
            Inicio
          </Link>

          <Link to="/portafolio" onClick={() => setOpen(false)}>
            Portafolio
          </Link>

          <Link to="/contacto" onClick={() => setOpen(false)}>
            Contacto
          </Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;