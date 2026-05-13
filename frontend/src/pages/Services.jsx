import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <section className="bg-[#0B0F14] text-white py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5B700]">
              Nos Services
            </h1>
            <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-300 max-w-2xl mx-auto px-2">
              Découvrez nos offres professionnelles en réseaux, vidéosurveillance, électricité et transformation digitale.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-900/80 border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:border-[#00D1FF] transition duration-300">
              <h2 className="text-xl md:text-2xl font-semibold text-[#00D1FF]">Vidéosurveillance</h2>
              <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-300 leading-6">
                Installation et maintenance de systèmes CCTV haute performance pour entreprises et habitations.
              </p>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:border-[#00D1FF] transition duration-300">
              <h2 className="text-xl md:text-2xl font-semibold text-[#00D1FF]">Réseaux Informatiques</h2>
              <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-300 leading-6">
                Conception, câblage et sécurisation de réseaux d’entreprise fiables et évolutifs.
              </p>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:border-[#00D1FF] transition duration-300">
              <h2 className="text-xl md:text-2xl font-semibold text-[#00D1FF]">Électricité & Climatisation</h2>
              <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-300 leading-6">
                Solutions énergétiques intelligentes pour garantir performance et confort.
              </p>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:border-[#00D1FF] transition duration-300">
              <h2 className="text-xl md:text-2xl font-semibold text-[#00D1FF]">Cyber Sécurité</h2>
              <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-300 leading-6">
                protection des systèmes pour une sécurité maximale de vos données.
              </p>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:border-[#00D1FF] transition duration-300">
              <h2 className="text-xl md:text-2xl font-semibold text-[#00D1FF]">Transformation Digitale</h2>
              <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-300 leading-6">
                Création de solutions web et digitales adaptées à vos objectifs business.
              </p>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:border-[#00D1FF] transition duration-300">
              <h2 className="text-xl md:text-2xl font-semibold text-[#00D1FF]">Support & Maintenance</h2>
              <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-300 leading-6">
                Assistance technique continue pour maintenir vos installations performantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
