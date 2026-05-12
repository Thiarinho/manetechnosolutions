import bg from "../assets/bg.png";

export default function Hero() {
  return (
    <section
      className="relative h-[85vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center text-white px-6">

        <h2 className="text-5xl md:text-6xl font-bold text-orange-400 leading-tight">
          Solutions Informatiques <br />
          & Sécurité Professionnelle
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          CCTV, Réseaux, Électricité, Systeme d'intrusion, Climatisation et Solutions Digitales
          adaptées aux entreprises et particuliers.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition">
            Demander un devis
          </button>

          <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg text-lg transition">
            Nos Services
          </button>

        </div>

      </div>

    </section>
  );
}