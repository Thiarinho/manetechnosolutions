import {
  FaShieldAlt,
  FaTools,
  FaHeadset,
  FaCheckCircle
} from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-950 text-white py-20 px-6">

      {/* TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-orange-400">
          Pourquoi Choisir MTS ?
        </h2>

        <p className="text-gray-400 mt-4">
          Des solutions technologiques fiables adaptées à vos besoins.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {/* CARD 1 */}
        <div className="bg-gray-900 p-8 rounded-2xl text-center hover:scale-105 transition duration-300 border border-gray-800">
          <FaShieldAlt className="text-5xl text-orange-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-blue-400">
            Sécurité
          </h3>
          <p className="text-gray-400 mt-3">
            Solutions sécurisées pour protéger vos installations et données.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-gray-900 p-8 rounded-2xl text-center hover:scale-105 transition duration-300 border border-gray-800">
          <FaTools className="text-5xl text-orange-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-blue-400">
            Expertise Technique
          </h3>
          <p className="text-gray-400 mt-3">
            Une maîtrise des réseaux, CCTV et solutions digitales modernes.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-gray-900 p-8 rounded-2xl text-center hover:scale-105 transition duration-300 border border-gray-800">
          <FaHeadset className="text-5xl text-orange-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-blue-400">
            Assistance
          </h3>
          <p className="text-gray-400 mt-3">
            Support et accompagnement professionnel pour tous vos projets.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-gray-900 p-8 rounded-2xl text-center hover:scale-105 transition duration-300 border border-gray-800">
          <FaCheckCircle className="text-5xl text-orange-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-blue-400">
            Qualité
          </h3>
          <p className="text-gray-400 mt-3">
            Des prestations fiables avec un haut niveau de professionnalisme.
          </p>
        </div>

      </div>

    </section>
  );
}