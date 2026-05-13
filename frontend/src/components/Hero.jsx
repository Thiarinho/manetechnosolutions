import bg from "../assets/bg.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen md:h-[90vh] bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/70 via-[#111827]/60 to-[#0B3C5D]/50"></div>

      {/* LIGHT EFFECT */}
      <div className="absolute w-48 h-48 md:w-[500px] md:h-[500px] bg-[#19B5F1]/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>

      <div className="absolute w-40 h-40 md:w-[400px] md:h-[400px] bg-[#F5B321]/10 blur-3xl rounded-full bottom-10 right-10 animate-pulse delay-1000"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center text-white px-4 md:px-6 max-w-5xl animate-fade-in-up py-8 md:py-0">

        <span className="inline-block bg-[#19B5F1]/20 text-[#19B5F1] border border-[#19B5F1]/30 px-3 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium">
          Solutions technologiques modernes & sécurisées
        </span>

        <h2 className="mt-4 md:mt-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">

          <span className="text-white">
            Solutions
          </span>

          <span className="text-[#F5B321]">
            {" "}Informatiques
          </span>

          <br />

          <span className="text-[#19B5F1]">
            & Sécurité Professionnelle
          </span>

        </h2>

        <p className="mt-8 text-lg md:text-xl text-gray-300 leading-8 max-w-3xl mx-auto">

          CCTV, Réseaux Informatiques,Maintenance,Systèmes d’intrusion,
          Électricité, Climatisation et solutions digitales
          adaptées aux entreprises et particuliers.

        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col md:flex-row gap-5 justify-center">

          <Link
            to="/devis"
            className="bg-[#F5B321] hover:bg-yellow-400 hover:scale-105 text-black px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Demander un devis
          </Link>

          <Link
            to="/services"
            className="border-2 border-[#19B5F1] text-[#19B5F1] hover:bg-[#19B5F1] hover:text-white hover:scale-105 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Nos Services
          </Link>

        </div>

      </div>

    </section>
  );
}