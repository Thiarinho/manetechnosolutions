import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import cctvImg from "../assets/services/cctv.png";
import networkImg from "../assets/services/network.png";
import electricImg from "../assets/services/electric.png";
import climImg from "../assets/services/clim.png";
import cvImg from "../assets/services/cv.png";
import digitalImg from "../assets/services/digital.png";
import ajaxImg from "../assets/services/ajax.png";

import product1Image from "../assets/products/product1.jpeg";
import product2Image from "../assets/products/product2.jpeg";
import product3Image from "../assets/products/product3.jpeg";
import product4Image from "../assets/products/product4.jpeg";
import product5Image from "../assets/products/product5.jpeg";
import product6Image from "../assets/products/product6.jpeg";

export default function Home() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    fetch(`${apiUrl}/api/services`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  const serviceImages = {
    video: cctvImg,
    network: networkImg,
    electric: electricImg,
    cold: climImg,
    cv: cvImg,
    digital: digitalImg,
  };

  const ajaxSecurityService = {
    id: 7,
    title: "Ajax Security",
    category: "Sécurité",
    badge: "Premium",
    rating: 4.9,
    reviews: 87,
    image: ajaxImg,
    shortDescription:
      "Système d’alarme intelligent et sécurité connectée haut de gamme.",
  };

  const products = [
    { id: 1, name: "Lenovo ThinkPad X1", price: "170.000 FCFA", image: product1Image },
    { id: 2, name: "HP EliteBook 840", price: "210.000 FCFA", image: product2Image },
    { id: 3, name: "Dell Latitude 5420", price: "185.000 FCFA", image: product3Image },
    { id: 4, name: "TP-Link Archer C80", price: "25.000 FCFA", image: product4Image },
    { id: 5, name: "HP x360 G2", price: "95.000 FCFA", image: product5Image },
    { id: 6, name: "Boxe IPTV", price: "40.000 FCFA", image: product6Image },
  ];

  return (
    <div className="min-h-screen text-white bg-[#0B0F14]">

      <Navbar />
      <Hero />

      {/* SERVICES PREVIEW */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10 py-12">

        {services.slice(0, 5).map((service) => (
          <div key={service.id} className="bg-[#111827] rounded-3xl overflow-hidden border border-gray-800">
            <div className="h-56">
              <img
                src={serviceImages[service.icon]}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-gray-400 mt-2">{service.description}</p>

              <Link
                to="/services"
                className="inline-block mt-4 bg-[#00D1FF] text-black px-4 py-2 rounded-lg font-semibold"
              >
                Découvrir
              </Link>
            </div>
          </div>
        ))}

        {/* AJAX SECURITY */}
        <div className="bg-[#111827] rounded-3xl overflow-hidden border border-[#00D1FF]">
          <div className="h-56">
            <img src={ajaxSecurityService.image} className="w-full h-full object-cover" />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold">{ajaxSecurityService.title}</h3>
            <p className="text-gray-400 mt-2">{ajaxSecurityService.shortDescription}</p>

            <Link
              to="/services"
              className="inline-block mt-4 bg-[#F5B700] text-black px-4 py-2 rounded-lg font-semibold"
            >
              Voir Ajax Security
            </Link>
          </div>
        </div>

      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="px-4 md:px-10 pb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#F5B700]">Produits populaires</h2>
          <Link to="/products" className="text-[#00D1FF]">Voir tout</Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((p) => (
            <Link key={p.id} to="/products" className="bg-[#0F172A] rounded-xl overflow-hidden">
              <img src={p.image} className="h-28 w-full object-cover" />
              <div className="p-2">
                <p className="text-xs">{p.name}</p>
                <p className="text-[#F5B700] text-sm">{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <WhyChooseUs />
      <Footer />
    </div>
  );
}