import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen text-white" style={{
      background: `
        linear-gradient(180deg, #0B0F14 0%, #0f1622 50%, #0B0F14 100%),
        repeating-linear-gradient(45deg, rgba(0, 209, 255, 0.05) 0px, rgba(0, 209, 255, 0.05) 10px, transparent 10px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(245, 183, 0, 0.05) 0px, rgba(245, 183, 0, 0.05) 10px, transparent 10px, transparent 20px)
      `,
      backgroundAttachment: 'fixed'
    }}>
      <Navbar />

      <section className="bg-[#0B0F14] text-white py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid gap-8 md:gap-12 lg:grid-cols-[1.5fr_1fr] items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5B700]">
              Contactez-nous
            </h1>
            <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-300">
              Pour un devis, une question ou une étude de projet, contactez notre équipe dès aujourd'hui.
            </p>

            <div className="mt-8 md:mt-10 space-y-5 md:space-y-6 text-gray-300">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-white">Adresse</h2>
                <p className="text-sm md:text-base mt-1">Sangalkam, Rufisque, Sénégal</p>
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-white">Email</h2>
                <a
                  href="mailto:manetechnosolutions@gmail.com"
                  className="text-sm md:text-base mt-1 inline-block text-[#00D1FF] hover:text-[#F5B321] transition"
                >
                  manetechnosolutions@gmail.com
                </a>
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-white">Téléphone</h2>
                <a
                  href="tel:+221707901662"
                  className="text-sm md:text-base mt-1 inline-block text-[#00D1FF] hover:text-[#F5B321] transition"
                >
                  +221 70 790 16 62
                </a>
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-white">WhatsApp</h2>
                <a
                  href="https://wa.me/221707901662"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm md:text-base mt-1 inline-block text-[#25D366] hover:text-[#F5B321] transition"
                >
                  Discuter sur WhatsApp
                </a>
              </div>
            </div>

          </div>

          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#00D1FF]">Envoyez-nous un message</h2>
            <form className="mt-6 md:mt-8 space-y-4 md:space-y-6">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full rounded-xl md:rounded-2xl border border-gray-700 bg-[#111827] px-4 md:px-5 py-3 md:py-4 text-sm md:text-base text-white outline-none focus:border-[#00D1FF] transition"
              />
              <input
                type="email"
                placeholder="Votre email"
                className="w-full rounded-xl md:rounded-2xl border border-gray-700 bg-[#111827] px-4 md:px-5 py-3 md:py-4 text-sm md:text-base text-white outline-none focus:border-[#00D1FF] transition"
              />
              <textarea
                rows="5"
                placeholder="Votre message"
                className="w-full rounded-xl md:rounded-2xl border border-gray-700 bg-[#111827] px-4 md:px-5 py-3 md:py-4 text-sm md:text-base text-white outline-none focus:border-[#00D1FF] transition resize-none"
              />
              <button className="w-full bg-[#F5B321] hover:bg-yellow-500 text-black font-semibold px-6 py-3 md:py-4 rounded-xl md:rounded-2xl transition duration-300 text-sm md:text-base">
                Envoyer
              </button>
            </form>
          </div>
        </div>

        {/* Carte de Dakar pleine largeur */}
        <div className="max-w-5xl mx-auto mt-8 px-4 md:px-0">
          <div className="w-full rounded-2xl overflow-hidden border border-gray-800">
            <iframe
              title="Carte de Dakar"
              src="https://maps.google.com/maps?q=Dakar%20Senegal&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 md:h-96 border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
