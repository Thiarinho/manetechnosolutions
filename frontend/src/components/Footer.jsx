export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-5">

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* LOGO + DESCRIPTION */}
        <div>
          <h2 className="text-xl font-bold text-orange-400">
            MTS - Manetechnosolutions
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Solutions informatiques, réseaux et vidéosurveillance.
            Nous accompagnons entreprises et particuliers dans leur transformation digitale.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400">Services</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Vidéosurveillance (CCTV)</li>
            <li>Réseaux Informatiques</li>
            <li>Installation Électrique et Climatisation</li> 
            <li>Création de CV</li>
            <li>Design & Flyers</li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-blue-400">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Dakar, Sénégal</li>
            <li>Téléphone : +221 70 790 16 62</li>
            <li>Email : thiernomane932@gmail.com</li>
            <li className="text-orange-400 cursor-pointer">
              WhatsApp disponible
            </li>
          </ul>
        </div>

      </div>

      {/* BARRE BASSE */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Manetechnosolutions - Tous droits réservés
      </div>

    </footer>
  );
}