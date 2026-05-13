import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Devis() {
  const [formData, setFormData] = useState({
    company: "",
    fullName: "",
    email: "",
    phone: "",
    serviceType: "Vidéosurveillance",
    projectDescription: "",
    budget: "",
    urgency: "Standard",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(`${API_URL}/devis`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de l'envoi du devis.");
      }

      setStatus({ type: "success", message: data.message });
      setFormData({
        company: "",
        fullName: "",
        email: "",
        phone: "",
        serviceType: "Vidéosurveillance",
        projectDescription: "",
        budget: "",
        urgency: "Standard",
      });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <section className="bg-[#0B0F14] text-white py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid gap-8 md:gap-12 lg:grid-cols-[1fr_1fr] items-start">
          <div>
            <div className="mb-8">
              <span className="inline-block bg-[#19B5F1]/20 text-[#19B5F1] px-4 py-2 rounded-full text-sm font-semibold">
                Devis Professionnel
              </span>
              <h1 className="mt-6 text-5xl font-bold text-[#F5B700]">
                Obtenez votre devis sur mesure
              </h1>
              <p className="mt-5 text-gray-300 leading-8">
                Nous préparons une proposition professionnelle adaptée à votre projet de sécurité, réseau ou transformation digitale.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="rounded-3xl border border-gray-800 bg-gray-900/80 p-6 shadow-xl">
                <h2 className="text-2xl font-semibold text-[#00D1FF]">Ce que nous incluons</h2>
                <ul className="mt-4 space-y-3 text-gray-300">
                  <li>Audit de vos besoins</li>
                  <li>Plan d’action personnalisé</li>
                  <li>Chiffrage détaillé</li>
                  <li>Délais et planning clairs</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-gray-800 bg-gray-900/80 p-6 shadow-xl">
                <h2 className="text-2xl font-semibold text-[#F5B700]">Pourquoi un devis pro ?</h2>
                <p className="mt-4 text-gray-300 leading-7">
                  Un devis professionnel vous permet de visualiser précisément les coûts, les prestations et le calendrier pour sécuriser votre projet sans surprise.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl md:rounded-3xl border border-gray-800 bg-gray-900/80 p-6 md:p-8 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#00D1FF]">Demande de devis</h2>
            <form onSubmit={handleSubmit} className="mt-6 md:mt-8 space-y-4 md:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nom de l’entreprise</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  type="text"
                  placeholder="Ex: ABC Tech"
                  className="w-full rounded-2xl border border-gray-700 bg-[#111827] px-5 py-4 text-white outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nom et prénom</label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Ex: Abdou Ndiaye"
                  className="w-full rounded-2xl border border-gray-700 bg-[#111827] px-5 py-4 text-white outline-none"
                  required
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="exemple@mail.com"
                    className="w-full rounded-2xl border border-gray-700 bg-[#111827] px-5 py-4 text-white outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Téléphone</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+221 77 123 45 67"
                    className="w-full rounded-2xl border border-gray-700 bg-[#111827] px-5 py-4 text-white outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Type de prestation</label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-700 bg-[#111827] px-5 py-4 text-white outline-none"
                >
                  <option>Vidéosurveillance</option>
                  <option>Réseaux Informatiques</option>
                  <option>Maintenance</option>
                  <option>Électricité / Climatisation</option>
                  <option>Transformation Digitale</option>
                  <option>CV pro </option>
                  <option>Audit & Sécurité</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Description du projet</label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Détaillez vos besoins et contraintes"
                  className="w-full rounded-2xl border border-gray-700 bg-[#111827] px-5 py-4 text-white outline-none"
                  required
                />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Budget estimé</label>
                  <input
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    type="text"
                    placeholder="Ex: 2 500 000 FCFA"
                    className="w-full rounded-2xl border border-gray-700 bg-[#111827] px-5 py-4 text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Urgence</label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-700 bg-[#111827] px-5 py-4 text-white outline-none"
                  >
                    <option>Standard</option>
                    <option>Rapide</option>
                    <option>Immédiat</option>
                  </select>
                </div>
              </div>
              {status && (
                <div
                  className={`rounded-2xl px-5 py-4 text-sm ${
                    status.type === "success"
                      ? "bg-emerald-500/10 text-emerald-200 border border-emerald-500/20"
                      : "bg-red-500/10 text-red-200 border border-red-500/20"
                  }`}
                >
                  {status.message}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#F5B321] hover:bg-yellow-500 text-black font-semibold px-6 py-4 rounded-2xl transition duration-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Envoi en cours..." : "Obtenir mon devis pro"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
