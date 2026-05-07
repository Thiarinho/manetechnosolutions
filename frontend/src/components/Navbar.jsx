import { FaSearch, FaBars } from "react-icons/fa";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  return (
    <header className="bg-gray-950 text-white sticky top-0 z-50 shadow-lg border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer">

          <img
            src={logo}
            alt="MTS Logo"
            className="w-12 h-12 object-cover rounded-full border-2 border-orange-400"
          />

          <div>
            <h1 className="text-2xl font-bold text-orange-400">
              MTS
            </h1>

            <p className="text-xs text-gray-400">
              Manetechnosolutions
            </p>
          </div>

        </div>

        {/* SEARCH BAR */}
        <div className="hidden md:flex items-center bg-gray-900 rounded-lg overflow-hidden w-1/3 border border-gray-700">

          <input
            type="text"
            placeholder="Rechercher un service..."
            className="w-full bg-transparent px-4 py-2 outline-none text-sm"
          />

          <button className="bg-orange-500 px-4 py-3 hover:bg-orange-600 transition">
            <FaSearch />
          </button>

        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 font-medium">

          <a
            href="/"
            className="hover:text-orange-400 transition"
          >
            Accueil
          </a>

          <a
            href="/services"
            className="hover:text-orange-400 transition"
          >
            Services
          </a>

          <a
            href="/contact"
            className="hover:text-orange-400 transition"
          >
            Contact
          </a>

          <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg transition">
            Devis
          </button>

        </nav>

        {/* MOBILE MENU ICON */}
        <button className="md:hidden text-2xl text-orange-400">
          <FaBars />
        </button>

      </div>

    </header>
  );
}