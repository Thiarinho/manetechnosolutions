export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 pt-8 md:pt-12 pb-4 md:pb-5 border-t border-[#1E293B]">

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">

        {/* LOGO + DESCRIPTION */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[#F5B321]">
            MTS - Manetechnosolutions
          </h2>

          <div className="w-20 h-1 bg-[#19B5F1] mt-2 rounded-full"></div>

          <p className="mt-3 md:mt-4 text-xs md:text-sm text-gray-400 leading-6">
            Solutions informatiques, réseaux, vidéosurveillance et transformation digitale.
            Nous accompagnons entreprises et particuliers avec des solutions technologiques modernes et sécurisées.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-[#19B5F1]">
            Services
          </h3>

          <div className="w-16 h-1 bg-[#F5B321] mt-2 rounded-full"></div>

          <ul className="mt-3 md:mt-4 space-y-2 md:space-y-3 text-xs md:text-sm text-gray-400">

            <li className="hover:text-[#F5B321] transition duration-300 cursor-pointer">
              Vidéosurveillance (CCTV)
            </li>

            <li className="hover:text-[#F5B321] transition duration-300 cursor-pointer">
              Réseaux Informatiques
            </li>

            <li className="hover:text-[#F5B321] transition duration-300 cursor-pointer">
              Installation Électrique
            </li>

            <li className="hover:text-[#F5B321] transition duration-300 cursor-pointer">
              Climatisation
            </li>

            <li className="hover:text-[#F5B321] transition duration-300 cursor-pointer">
              Création de CV Professionnels
            </li>

            <li className="hover:text-[#F5B321] transition duration-300 cursor-pointer">
              Design & Flyers Publicitaires
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-[#19B5F1]">
            Contact
          </h3>

          <div className="w-16 h-1 bg-[#F5B321] mt-2 rounded-full"></div>

          <ul className="mt-3 md:mt-4 space-y-2 md:space-y-3 text-xs md:text-sm text-gray-400 leading-6">

          <li className="hover:text-[#F5B321] transition duration-300 cursor-pointer">
               Dakar, Sénégal
            </li>
            <li className="hover:text-[#F5B321] transition duration-300 cursor-pointer">
             +221 70 790 16 62 <br />
              +221 77 602 32 15
            </li>

            <li className="hover:text-[#F5B321] transition duration-300 cursor-pointer">
             thiernomane932@gmail.com
            </li>
    
            <li className="text-[#25D366] font-medium cursor-pointer hover:opacity-80 transition">
              WhatsApp disponible
            </li>

          </ul>
        </div>

      </div>

      {/* BARRE BASSE */}
      <div className="border-t border-[#1E293B] mt-6 md:mt-10 pt-4 md:pt-5 text-center text-xs md:text-sm text-gray-500 px-4">

        © {new Date().getFullYear()} 
        <span className="text-[#F5B321] font-semibold">
          {" "}Manetechnosolutions
        </span>
        {" "} - Tous droits réservés

      </div>

    </footer>
  );
}