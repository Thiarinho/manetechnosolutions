import { FaUserTie, FaHistory, FaBullseye } from "react-icons/fa";
import moiPhoto from "../assets/moi.jpeg";

export default function AboutMe() {
  return (
    <section className="bg-[#060B12] text-white py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* TITRE */}
        <div className="mb-10 rounded-[2rem] border border-gray-800 bg-gradient-to-br from-[#111827] to-[#0B1220] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
          <h2 className="text-center text-4xl font-bold text-[#F5B700] sm:text-5xl">
            Manetechnosolutions, expert en transformation digitale et services technologiques
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-start">

          {/* PHOTO */}
          <div className="rounded-[2rem] border border-gray-800 bg-gradient-to-br from-[#111827] to-[#0B1220] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.25)] lg:sticky lg:top-24">
            <div className="relative overflow-hidden rounded-[2rem] border border-gray-700 bg-[#111827] p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF]/15 via-transparent to-[#F5B700]/10" />

              <div className="relative flex h-full min-h-[30rem] items-center justify-center rounded-[1.75rem] border border-dashed border-gray-700 bg-[#0F172A] p-8">
                <div className="relative flex w-full max-w-sm flex-col items-center gap-6 rounded-[1.75rem] border border-[#00D1FF]/15 bg-[#161D2F]/90 p-5 shadow-[0_35px_70px_rgba(0,209,255,0.12)] backdrop-blur-sm">

                  <div className="absolute -top-7 right-6 h-20 w-20 rounded-full bg-[#F5B700]/10 blur-2xl" />

                  <span className="self-start rounded-full bg-[#00D1FF]/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-[#00D1FF]">
                    Portrait
                  </span>

                  <div className="overflow-hidden rounded-[1.75rem] border border-[#00D1FF]/15 shadow-[0_25px_50px_rgba(0,0,0,0.3)]">
                    <img
                      src={moiPhoto}
                      alt="Photo de Thierno Ismaila MANE"
                      className="h-80 w-full object-cover"
                    />
                  </div>

                  <div className="w-full rounded-[1.5rem] border border-gray-700 bg-[#0B1220]/90 px-4 py-5 text-center shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
                    <p className="text-xs uppercase tracking-[0.35em] text-[#00D1FF]/70">
                      Fondateur
                    </p>

                    <h3 className="mt-3 text-xl font-semibold text-white">
                      Thierno Ismaila MANE
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                      Visionnaire digital & architecte de solutions
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* CONTENU */}
          <div className="self-start">

            <span className="inline-flex items-center rounded-full bg-[#00D1FF]/15 px-4 py-2 text-sm font-semibold text-[#00D1FF]">
              À propos de nous
            </span>

            <h3 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
              Une présence digitale claire, professionnelle et adaptée à votre activité
            </h3>

            <p className="mt-6 text-gray-300 leading-8 text-lg">
              Manetechnosolutions propose des solutions digitales complètes
              pour les entreprises, les organisations et les entrepreneurs
              qui veulent moderniser leur activité.
            </p>

            {/* APPROCHE */}
            <div className="mt-8 rounded-[1.75rem] border border-gray-800 bg-[#111827]/90 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
              
              <p className="text-sm uppercase tracking-[0.35em] text-[#00D1FF]/70">
                Notre approche
              </p>

              <ul className="mt-5 space-y-4 text-gray-300 text-base leading-7">

                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#00D1FF]" />
                  Solutions web et mobiles personnalisées, conçues pour répondre aux besoins métier.
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#F5B700]" />
                  Sécurité, réseaux et maintenance pour garantir disponibilité et performance.
                </li>

                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#00D1FF]" />
                  Accompagnement local et conseils pratiques pour des livrables fiables et durables.
                </li>

              </ul>
            </div>

            <p className="mt-8 text-gray-300 leading-8 text-lg">
              Chacune de nos interventions est pensée pour offrir un résultat professionnel,
              un déploiement rapide et une expérience client fluide.
            </p>

            {/* CARTES */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              <div className="rounded-[1.5rem] border border-gray-800 bg-[#111827] p-5">
                <div className="flex items-center gap-3 text-[#00D1FF]">
                  <FaHistory size={24} />

                  <div>
                    <p className="text-sm text-gray-400">Expérience</p>

                    <p className="mt-2 text-white font-semibold">
                      Plus de 4 années d’expérience dans les technologies numériques
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-gray-800 bg-[#111827] p-5">
                <div className="flex items-center gap-3 text-[#F5B700]">
                  <FaUserTie size={24} />

                  <div>
                    <p className="text-sm text-gray-400">Formation</p>

                    <p className="mt-2 text-white font-semibold">
                      Licences en Réseaux Informatiques et Développement d’Application
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-gray-800 bg-[#111827] p-5">
                <div className="flex items-center gap-3 text-[#00D1FF]">
                  <FaBullseye size={24} />

                  <div>
                    <p className="text-sm text-gray-400">Certification</p>

                    <p className="mt-2 text-white font-semibold">
                      Cloud Computing AWS par Sonatel
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-gray-800 bg-[#111827] p-5">
                <div className="flex items-center gap-3 text-[#F5B700]">
                  <FaUserTie size={24} />

                  <div>
                    <p className="text-sm text-gray-400">Objectif</p>

                    <p className="mt-2 text-white font-semibold">
                      Solutions fiables, modernes et adaptées aux besoins réels
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}