import { FaUserTie, FaHistory, FaBullseye } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section className="bg-[#060B12] text-white py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
        <div className="rounded-[2rem] border border-gray-800 bg-gradient-to-br from-[#111827] to-[#0B1220] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
          <div className="relative overflow-hidden rounded-[2rem] border border-gray-700 bg-[#111827] p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/10 to-transparent" />
            <div className="relative flex h-full min-h-[28rem] items-center justify-center rounded-[1.75rem] border border-dashed border-gray-700 bg-[#0F172A] p-10">
              <div className="flex h-72 w-72 items-center justify-center rounded-[1.5rem] border border-gray-700 bg-[#161D2F] text-gray-500 text-center text-sm font-semibold leading-tight">
                Votre photo ici
                <span className="block text-xs text-gray-400 mt-2">Remplacez ce bloc par votre image</span>
              </div>
            </div>
          </div>
        </div>

        <div className="self-center">
          <span className="inline-flex items-center rounded-full bg-[#00D1FF]/15 px-4 py-2 text-sm font-semibold text-[#00D1FF]">
            À propos
          </span>
          <h2 className="mt-5 text-4xl font-bold text-[#F5B700] sm:text-5xl">
            Fondateur de Manetechnosolutions
          </h2>
          <p className="mt-6 text-gray-300 leading-8 text-lg">
            Fondateur de Manetechnosolutions, je suis passionné par les technologies numériques, le développement d’applications, les réseaux informatiques et l’intelligence artificielle.
          </p>
          <p className="mt-4 text-gray-300 leading-8 text-lg">
            Mon parcours académique m’a permis d’acquérir de solides compétences grâce à une Licence en Réseaux Informatiques obtenue à l’Institut Supérieur d'Informatique ainsi qu’une Licence en Développement d’Application à l’Université Numérique Cheikh Hamidou Kane.
          </p>
          <p className="mt-4 text-gray-300 leading-8 text-lg">
            J’ai également renforcé mon expertise avec une certification en Cloud Computing AWS délivrée par Sonatel. Avec plus de 4 années d’expérience dans le domaine, j’ai développé des compétences pratiques en intelligence artificielle appliquée, notamment dans l’automatisation, l’analyse de données et l’intégration de solutions intelligentes dans les systèmes numériques.
          </p>
          <p className="mt-4 text-gray-300 leading-8 text-lg">
            J’accompagne ainsi particuliers, entreprises et organisations dans leurs projets technologiques à travers des solutions innovantes en développement web et mobile, réseaux informatiques, cybersécurité, vidéosurveillance, maintenance et transformation digitale, avec pour objectif de fournir des services fiables, modernes et adaptés aux besoins réels des clients.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-gray-800 bg-[#111827] p-5">
              <div className="flex items-center gap-3 text-[#00D1FF]">
                <FaHistory size={24} />
                <div>
                  <p className="text-sm text-gray-400">Expérience</p>
                  <p className="mt-2 text-white font-semibold">Plus de 4 années d’expérience dans les technologies numériques</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-gray-800 bg-[#111827] p-5">
              <div className="flex items-center gap-3 text-[#F5B700]">
                <FaUserTie size={24} />
                <div>
                  <p className="text-sm text-gray-400">Formation</p>
                  <p className="mt-2 text-white font-semibold">Licences en Réseaux Informatiques et Développement d’Application</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-gray-800 bg-[#111827] p-5">
              <div className="flex items-center gap-3 text-[#00D1FF]">
                <FaBullseye size={24} />
                <div>
                  <p className="text-sm text-gray-400">Certification</p>
                  <p className="mt-2 text-white font-semibold">Cloud Computing AWS par Sonatel</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-gray-800 bg-[#111827] p-5">
              <div className="flex items-center gap-3 text-[#F5B700]">
                <FaUserTie size={24} />
                <div>
                  <p className="text-sm text-gray-400">Objectif</p>
                  <p className="mt-2 text-white font-semibold">Solutions fiables, modernes et adaptées aux besoins réels</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
