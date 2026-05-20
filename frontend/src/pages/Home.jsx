import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import cctvImg from "../assets/services/cctv.png";
import networkImg from "../assets/services/network.png";
import electricImg from "../assets/services/electric.png";
import climImg from "../assets/services/clim.png";
import cvImg from "../assets/services/cv.png";
import digitalImg from "../assets/services/digital.png";
import { Link } from "react-router-dom";
import product1Image from "../assets/products/product1.jpeg";
import product2Image from "../assets/products/product2.jpeg";
import product3Image from "../assets/products/product3.jpeg";
import product4Image from "../assets/products/product4.jpeg";
import product5Image from "../assets/products/product5.jpeg";
import product6Image from "../assets/products/product6.jpeg";
import {
  FaVideo,
  FaNetworkWired,
  FaBolt,
  FaSnowflake,
  FaFileAlt,
  FaLaptopCode
} from "react-icons/fa";

import { useEffect, useState } from "react";

export default function Home() {

  // STATE
  const [services, setServices] = useState([]);

  // FETCH BACKEND DATA
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    fetch(`${apiUrl}/api/services`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  // ICONS
  const serviceImages = {
  video: cctvImg,
  network: networkImg,
  electric: electricImg,
  cold: climImg,
  cv: cvImg,
  digital: digitalImg,
};

  return (
    <div className="min-h-screen" style={{
      background: `
        linear-gradient(135deg, #0B0F14 0%, #1a1f2e 50%, #0B0F14 100%),
        radial-gradient(circle at 20% 80%, rgba(0, 209, 255, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(245, 183, 0, 0.1) 0%, transparent 50%)
      `,
      backgroundAttachment: 'fixed'
    }}>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      {/* SERVICES PREVIEW */}
      <section className="pt-8 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F5B700]">Services populaires</h2>
          <Link to="/services" className="text-sm text-[#00D1FF] hover:text-[#F5B321]">Voir tous les services</Link>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {(services.length ? services.slice(0,6) : [
            {id:1, title:'Vidéosurveillance', icon:'video'},
            {id:2, title:'Réseaux', icon:'network'},
            {id:3, title:'Électricité', icon:'electric'},
            {id:4, title:'Climatisation', icon:'cold'},
            {id:5, title:'CV Professionnel', icon:'cv'},
            {id:6, title:'Digital', icon:'digital'},
          ]).map((s, idx) => (
            <Link key={s.id || idx} to="/services" className="group bg-[#0F172A] border border-gray-800 rounded-xl overflow-hidden hover:shadow-lg">
              <div className="h-28 md:h-32 w-full flex items-center justify-center bg-gray-900">
                <img src={serviceImages[s.icon] || cctvImg} alt={s.title} className="h-20 w-20 object-contain" />
              </div>
              <div className="p-3 text-xs md:text-sm text-gray-300">
                <div className="font-semibold text-white line-clamp-2">{s.title}</div>
                {s.description && <div className="text-gray-400 mt-1">{s.description.substring(0,60)}...</div>}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SERVICES (full) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">

        {services.map((service) => (
          <ServiceCard
            key={service.id}
            image={serviceImages[service.icon]}
            title={service.title}
            description={service.description}
          />
        ))}

      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="pt-6 pb-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F5B700]">Produits populaires</h2>
            <Link to="/products" className="text-sm text-[#00D1FF] hover:text-[#F5B321]">Voir tous les produits</Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[{
              id:1, name: 'Lenovo ThinkPad X1 Carbon', price: '170.000 FCFA', image: product1Image
            },{
              id:2, name: 'HP EliteBook 840', price: '210.000 FCFA', image: product2Image
            },{
              id:3, name: 'Dell Latitude 5420', price: '185.000 FCFA', image: product3Image
            },{
              id:4, name: 'TP-Link Archer C80', price: '25.000 FCFA', image: product4Image
            },{
              id:5, name: 'HP x360 G2', price: '95.000 FCFA', image: product5Image
            },{
              id:6, name: 'Boxe IPTV Android', price: '40.000 FCFA', image: product6Image
            }].map(p => (
              <Link key={p.id} to="/products" className="group bg-[#0F172A] border border-gray-800 rounded-xl overflow-hidden hover:shadow-lg">
                <div className="h-28 md:h-32 w-full overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-2 text-xs md:text-sm text-gray-300">
                  <div className="font-semibold text-white line-clamp-2">{p.name}</div>
                  <div className="text-[#F5B700] mt-1">{p.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}