import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cart() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <section className="
        bg-[#0B0F14]
        text-white
        min-h-screen
        flex items-center justify-center
        px-4 py-12
      ">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Panier
          </h1>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            La page panier est en cours de développement
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}