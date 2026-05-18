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

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}