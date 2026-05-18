import { useState, useMemo } from "react";
import { MdSearch, MdStar } from "react-icons/md";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceDetailModal from "../components/ServiceDetailModal";
import cctvImg from "../assets/services/cctv.png";
import networkImg from "../assets/services/network.png";
import electricImg from "../assets/services/electric.png";
import climImg from "../assets/services/clim.png";
import cvImg from "../assets/services/cv.png";
import digitalImg from "../assets/services/digital.png";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [sortBy, setSortBy] = useState("populaire");

  const services = [
    {
      id: 1,
      title: "Vidéosurveillance",
      category: "Sécurité",
      badge: "Best seller",
      rating: 4.9,
      reviews: 248,
      image: cctvImg,
      shortDescription: "Installation et maintenance de systèmes CCTV haute performance pour entreprises et habitations.",
      details: "Surveillance 24/7 avec enregistrement intelligent, alertes en temps réel et analyse vidéo intelligente pour la protection de vos locaux.",
      features: [
        { title: "Installation professionnelle", description: "Caméras HD & systèmes de stockage" },
        { title: "Supervision 24/7", description: "Accès mobile et alertes instantanées" },
        { title: "Maintenance", description: "Support technique garanti" }
      ]
    },
    {
      id: 2,
      title: "Réseaux Informatiques",
      category: "Réseau",
      badge: "Popular",
      rating: 4.8,
      reviews: 181,
      image: networkImg,
      shortDescription: "Conception, câblage et sécurisation de réseaux d’entreprise fiables et évolutifs.",
      details: "Architecture réseau sur-mesure, serveurs, Wi-Fi professionnel et sécurisation avancée pour fluidifier vos opérations.",
      features: [
        { title: "Conception réseau", description: "Planification adaptée à votre organisation" },
        { title: "Maintenance proactive", description: "Surveillance et interventions rapides" },
        { title: "Sécurité renforcée", description: "Pare-feu et contrôle d’accès" }
      ]
    },
    {
      id: 3,
      title: "Électricité & Climatisation",
      category: "Énergie",
      badge: "Pratique",
      rating: 4.7,
      reviews: 124,
      image: electricImg,
      shortDescription: "Solutions énergétiques intelligentes pour garantir performance et confort.",
      details: "Installation électrique sécurisée, régulation climatique et optimisation énergétique pour bâtiments professionnels et résidences.",
      features: [
        { title: "Installation complète", description: "Câblage, armoires et équipements" },
        { title: "Maintenance continue", description: "Vérifications de performance" },
        { title: "Confort optimal", description: "Climatisation fiable et silencieuse" }
      ]
    },
    {
      id: 4,
      title: "Cyber Sécurité",
      category: "Sécurité",
      badge: "Nouveau",
      rating: 4.6,
      reviews: 73,
      image: cvImg,
      shortDescription: "Protection des systèmes pour une sécurité maximale de vos données.",
      details: "Audit, sécurisation des infrastructures et formation des équipes pour prévenir les cyberattaques et garantir la continuité de service.",
      features: [
        { title: "Audit sécurité", description: "Analyse des vulnérabilités" },
        { title: "Protection réseau", description: "Filtrage et chiffrement" },
        { title: "Formation", description: "Sensibilisation des collaborateurs" }
      ]
    },
    {
      id: 5,
      title: "Transformation Digitale",
      category: "Digital",
      badge: "Premium",
      rating: 4.8,
      reviews: 156,
      image: digitalImg,
      shortDescription: "Création de solutions web et digitales adaptées à vos objectifs business.",
      details: "Sites web, applications et plateformes métiers avec design moderne, expérience utilisateur optimisée et intégration métier.",
      features: [
        { title: "Développement web", description: "Sites vitrines et e-commerce" },
        { title: "Applications métiers", description: "Solutions sur mesure" },
        { title: "Optimisation UX", description: "Interface intuitive et responsive" }
      ]
    },
    {
      id: 6,
      title: "Support & Maintenance",
      category: "Support",
      badge: "Essentiel",
      rating: 4.7,
      reviews: 99,
      image: climImg,
      shortDescription: "Assistance technique continue pour maintenir vos installations performantes.",
      details: "Interventions rapides, assistance à distance et maintenance préventive pour limiter les interruptions de service.",
      features: [
        { title: "Assistance 7/7", description: "Support rapide" },
        { title: "Maintenance préventive", description: "Réduire les risques" },
        { title: "Optimisation continue", description: "Amélioration des performances" }
      ]
    }
  ];

  const categories = ["Tous", ...new Set(services.map((service) => service.category))];

  const filteredServices = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();
    let result = services.filter((service) => {
      const matchesSearch =
        service.title.toLowerCase().includes(searchLower) ||
        service.shortDescription.toLowerCase().includes(searchLower) ||
        service.details.toLowerCase().includes(searchLower);
      const matchesCategory = selectedCategory === "Tous" || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    if (sortBy === "rating") {
      result = result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "avis") {
      result = result.sort((a, b) => b.reviews - a.reviews);
    }

    return result;
  }, [searchTerm, selectedCategory, sortBy]);

  const renderStars = (rating) => (
    <div className="flex items-center gap-1 text-sm text-yellow-400">
      {[...Array(5)].map((_, idx) => (
        <span key={idx} className={idx < Math.floor(rating) ? "text-yellow-400" : "text-gray-600"}>
          ★
        </span>
      ))}
      <span className="text-gray-400 ml-2">{rating.toFixed(1)}</span>
    </div>
  );

  return (
    <div className="min-h-screen text-white" style={{
      background: `
        linear-gradient(135deg, #0B0F14 0%, #141820 50%, #0B0F14 100%),
        radial-gradient(circle at 30% 30%, rgba(0, 209, 255, 0.08) 0%, transparent 40%),
        radial-gradient(circle at 70% 70%, rgba(245, 183, 0, 0.08) 0%, transparent 40%)
      `,
      backgroundAttachment: 'fixed'
    }}>
      <Navbar />

      <section className="bg-[#0B0F14] text-white py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5B700]">
              Nos Services
            </h1>
            <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-300 max-w-2xl mx-auto px-2">
              Découvrez nos offres professionnelles et choisissez le service qui correspond le mieux à votre entreprise.
            </p>
          </div>

          <div className="max-w-7xl mx-auto mb-10 grid gap-4 md:grid-cols-[1.6fr_1fr]">
            <div className="relative">
              <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher un service..."
                className="w-full bg-gray-900/60 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-[#00D1FF] outline-none transition"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-gray-900/60 border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-[#00D1FF] transition"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-gray-900/60 border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-[#00D1FF] transition"
              >
                <option value="populaire">Plus populaire</option>
                <option value="rating">Meilleure note</option>
                <option value="avis">Plus d'avis</option>
              </select>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mb-8 flex flex-wrap gap-3 text-sm text-gray-400">
            <span>{filteredServices.length} service{filteredServices.length !== 1 ? "s" : ""} trouvés</span>
            <span className="text-[#00D1FF]">Catégorie: {selectedCategory}</span>
            {searchTerm && <span>Recherche : "{searchTerm}"</span>}
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group overflow-hidden rounded-3xl border border-gray-800 bg-gray-900/70 shadow-2xl hover:border-[#00D1FF] transition duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="bg-[#F5B700] text-black text-xs font-semibold uppercase px-3 py-2 rounded-full">
                      {service.category}
                    </span>
                    <span className="bg-[#00D1FF] text-black text-xs font-semibold uppercase px-3 py-2 rounded-full">
                      {service.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col h-[360px] justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{service.title}</h2>
                    <p className="text-gray-300 leading-7 mb-4">{service.shortDescription}</p>
                    <div className="flex items-center gap-3 mb-4">
                      {renderStars(service.rating)}
                      <span className="text-xs text-gray-500">{service.reviews} avis</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full bg-[#00D1FF] hover:bg-[#00B8E6] text-black font-semibold py-3 rounded-2xl transition duration-300"
                  >
                    Découvrir le service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <ServiceDetailModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}

