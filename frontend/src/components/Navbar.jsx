import { FaBars, FaTimes, FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Charger le panier initial
    const updateCartCount = () => {
      const cart = localStorage.getItem("cart");
      const items = cart ? JSON.parse(cart) : [];
      const count = items.reduce((total, item) => total + item.quantity, 0);
      setCartCount(count);
    };

    updateCartCount();

    // Écouter les changements du panier
    window.addEventListener("cartUpdated", updateCartCount);
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  return (
    <header className="bg-[#111827] text-white sticky top-0 z-50 shadow-lg border-b border-[#1F2937]">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer">

          <img
            src={logo}
            alt="Logo"
            className="w-32 md:w-40 h-auto object-contain"
          />

        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-4 font-medium text-sm lg:text-base">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition duration-300 ${isActive ? "text-[#F5B321]" : "hover:text-[#F5B321]"}`
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `transition duration-300 ${isActive ? "text-[#F5B321]" : "hover:text-[#F5B321]"}`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `transition duration-300 ${isActive ? "text-[#F5B321]" : "hover:text-[#F5B321]"}`
            }
          >
            Produits
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `transition duration-300 ${isActive ? "text-[#F5B321]" : "hover:text-[#F5B321]"} flex items-center gap-2 relative`
            }
          >
            <FaShoppingCart />
            Panier
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition duration-300 ${isActive ? "text-[#F5B321]" : "hover:text-[#F5B321]"}`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition duration-200 ${isActive ? "text-[#F5B321]" : "hover:text-[#F5B321]"}`
            }
          >
            À propos
          </NavLink>

          <Link
            to="/devis"
            className="bg-[#F5B321] hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg transition duration-300 shadow-md"
          >
            Devis
          </Link>

          <a
            href="https://wa.me/221707901662"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-[#111827] font-semibold px-4 py-2 rounded-full hover:bg-[#20b85b] transition"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

        </nav>

        {/* MOBILE MENU ICON */}
        <button className="md:hidden text-2xl text-[#19B5F1]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[#111827] border-t border-[#1F2937] px-6 py-4">
          <nav className="flex flex-col gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-[#F5B321] transition duration-300 py-2 ${isActive ? "text-[#F5B321]" : ""}`
              }
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `hover:text-[#F5B321] transition duration-300 py-2 ${isActive ? "text-[#F5B321]" : ""}`
              }
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `hover:text-[#F5B321] transition duration-300 py-2 ${isActive ? "text-[#F5B321]" : ""}`
              }
              onClick={() => setIsOpen(false)}
            >
              Produits
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `hover:text-[#F5B321] transition duration-300 py-2 flex items-center gap-2 relative ${isActive ? "text-[#F5B321]" : ""}`
              }
              onClick={() => setIsOpen(false)}
            >
              <FaShoppingCart />
              Panier
              {cartCount > 0 && (
                <span className="bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-[#F5B321] transition duration-300 py-2 ${isActive ? "text-[#F5B321]" : ""}`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
            <Link
              to="/about"
              className="bg-[#F5B321] hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg transition duration-300 shadow-md w-fit"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Link
              to="/devis"
              className="bg-[#F5B321] hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-lg transition duration-300 shadow-md w-fit"
              onClick={() => setIsOpen(false)}
            >
              Devis
            </Link>
            <a
              href="https://wa.me/221707901662"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-[#111827] font-semibold px-4 py-2 rounded-full hover:bg-[#20b85b] transition w-fit"
              onClick={() => setIsOpen(false)}
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </nav>
        </div>
      )}

    </header>
  );
}