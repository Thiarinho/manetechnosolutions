import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      title: "Installation Vidéosurveillance",
      category: "Vidéosurveillance",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Câblage Réseau",
      category: "Réseaux",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Infrastructure IT",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Climatisation Professionnelle",
      category: "Climatisation",
      image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Système Électrique Avancé",
      category: "Électricité",
      image: "https://images.unsplash.com/photo-1605787607131-0ad8c3fcbef5?w=500&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Transformation Digitale",
      category: "Digital",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=400&fit=crop"
    },
  ];

  return (
    <div className="min-h-screen text-white" style={{
      background: `
        linear-gradient(135deg, #0B0F14 0%, #1a1420 50%, #0B0F14 100%),
        radial-gradient(circle at 40% 60%, rgba(245, 183, 0, 0.08) 0%, transparent 40%),
        radial-gradient(circle at 60% 40%, rgba(0, 209, 255, 0.08) 0%, transparent 40%)
      `,
      backgroundAttachment: 'fixed'
    }}>
      <Navbar />

      <section className="bg-[#0B0F14] bg-opacity-70 text-white py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* TITLE */}
          <div className="text-center mb-10 md:mb-14">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5B700]">
              Notre Galerie
            </h1>
            <p className="text-sm md:text-base text-gray-400 mt-3 md:mt-4">
              Découvrez nos réalisations et projets complétés avec succès
            </p>
          </div>

          {/* GALLERY GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl md:rounded-3xl overflow-hidden border border-gray-800 hover:border-[#00D1FF] transition duration-300 cursor-pointer"
              >
                {/* IMAGE */}
                <div className="h-64 sm:h-72 md:h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                  <p className="text-[#00D1FF] text-xs md:text-sm font-semibold mb-2">
                    {item.category}
                  </p>
                  <h3 className="text-lg md:text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
