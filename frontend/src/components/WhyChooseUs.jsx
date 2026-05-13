import {
  FaShieldAlt,
  FaTools,
  FaHeadset,
  FaCheckCircle
} from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0B0F14] text-white py-12 md:py-20 px-4 md:px-6">

      {/* TITLE */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-[#F5B700]">
          Pourquoi Choisir MTS ?
        </h2>

        <p className="text-sm md:text-base text-gray-400 mt-3 md:mt-4">
          Des solutions technologiques fiables adaptées à vos besoins.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">

        {/* CARD 1 */}
        <div className="bg-gray-900/60 backdrop-blur-md p-6 md:p-8 rounded-xl md:rounded-2xl text-center hover:scale-105 transition duration-300 border border-gray-800 hover:border-[#00D1FF]">
          <FaShieldAlt className="text-4xl md:text-5xl text-[#00D1FF] mx-auto mb-3 md:mb-4" />
          <h3 className="text-lg md:text-xl font-bold text-white">
            Sécurité
          </h3>
          <p className="text-sm md:text-base text-gray-400 mt-2 md:mt-3 leading-5">
            Solutions sécurisées pour protéger votre entreprise et/ou maison.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-gray-900/60 backdrop-blur-md p-6 md:p-8 rounded-xl md:rounded-2xl text-center hover:scale-105 transition duration-300 border border-gray-800 hover:border-[#00D1FF]">
          <FaTools className="text-4xl md:text-5xl text-[#F5B700] mx-auto mb-3 md:mb-4" />
          <h3 className="text-lg md:text-xl font-bold text-white">
            Expertise Technique
          </h3>
          <p className="text-sm md:text-base text-gray-400 mt-2 md:mt-3 leading-5">
            Une maîtrise des réseaux, CCTV et solutions digitales modernes.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-gray-900/60 backdrop-blur-md p-6 md:p-8 rounded-xl md:rounded-2xl text-center hover:scale-105 transition duration-300 border border-gray-800 hover:border-[#00D1FF]">
          <FaHeadset className="text-4xl md:text-5xl text-[#00D1FF] mx-auto mb-3 md:mb-4" />
          <h3 className="text-lg md:text-xl font-bold text-white">
            Assistance
          </h3>
          <p className="text-sm md:text-base text-gray-400 mt-2 md:mt-3 leading-5">
            Support et accompagnement professionnel pour tous vos projets.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-gray-900/60 backdrop-blur-md p-6 md:p-8 rounded-xl md:rounded-2xl text-center hover:scale-105 transition duration-300 border border-gray-800 hover:border-[#F5B700]">
          <FaCheckCircle className="text-4xl md:text-5xl text-[#F5B700] mx-auto mb-3 md:mb-4" />
          <h3 className="text-lg md:text-xl font-bold text-white">
            Qualité
          </h3>
          <p className="text-sm md:text-base text-gray-400 mt-2 md:mt-3 leading-5">
            Des prestations fiables avec un haut niveau de professionnalisme.
          </p>
        </div>

      </div>

    </section>
  );
}