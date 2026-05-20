import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const initialFormData = {
  company: "",
  fullName: "",
  email: "",
  phone: "",
  serviceType: "Vidéosurveillance",
  projectDescription: "",
  budget: "",
  urgency: "Standard",
};

const serviceOptions = [
  "Vidéosurveillance",
  "Réseaux Informatiques",
  "Maintenance",
  "Électricité / Climatisation",
  "Transformation Digitale",
  "CV Professionnel",
  "Audit & Sécurité",
];

export default function Devis() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.projectDescription.trim()) {
      setStatus({
        type: "error",
        message: "Merci de renseigner au minimum votre nom, votre email et une description claire du projet.",
      });
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ type: "error", message: "Merci de saisir une adresse email valide." });
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

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

      setStatus({ type: "success", message: "Votre demande a bien été envoyée. Nous revenons vers vous rapidement." });
      setFormData(initialFormData);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: `
          linear-gradient(135deg, #0B0F14 0%, #141820 40%, #0B0F14 100%),
          radial-gradient(circle at 25% 75%, rgba(0, 209, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 75% 25%, rgba(245, 183, 0, 0.08) 0%, transparent 50%)
        `,
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />

      <section className="bg-[#0B0F14] text-white py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-8">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full bg-[#19B5F1]/20 px-4 py-2 text-sm font-semibold text-[#19B5F1]">
                Devis Professionnel
              </span>
              <h1 className="mt-6 text-5xl font-bold tracking-tight text-[#F5B700] sm:text-6xl">
                Obtenez un devis clair et sur mesure
              </h1>
              <p className="mt-5 text-gray-300 leading-8 text-lg">
                Nous co-construisons une proposition détaillée et adaptée à votre projet de sécurité, d’infrastructure réseau ou de transformation digitale.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-gray-800 bg-gray-900/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.3)]">
                <h2 className="text-xl font-semibold text-[#00D1FF]">Audit & conseil</h2>
                <p className="mt-3 text-gray-300 leading-7">
                  Une analyse précise de votre environnement et des recommandations claires pour avancer en toute confiance.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-gray-800 bg-gray-900/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.3)]">
                <h2 className="text-xl font-semibold text-[#F5B700]">Budget maîtrisé</h2>
                <p className="mt-3 text-gray-300 leading-7">
                  Devis transparent, chiffrage détaillé et phases de livraison définies pour éviter toute surprise.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-gray-800 bg-gray-900/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.3)]">
                <h2 className="text-xl font-semibold text-[#00D1FF]">Réponse rapide</h2>
                <p className="mt-3 text-gray-300 leading-7">
                  Nous vous contactons sous 24h ouvrées pour affiner la proposition et lancer votre projet rapidement.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-gray-800 bg-gray-900/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.3)]">
                <h2 className="text-xl font-semibold text-[#F5B700]">Suivi dédié</h2>
                <p className="mt-3 text-gray-300 leading-7">
                  Un interlocuteur unique vous accompagne de la demande de devis jusqu’à la livraison.
                </p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-gray-800 bg-gray-900/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.3)]">
              <h2 className="text-2xl font-semibold text-white">Ce que vous obtenez</h2>
              <ul className="mt-5 space-y-3 text-gray-300 text-sm leading-7">
                <li>• Proposition détaillée avec coûts et échéances</li>
                <li>• Plan d’action personnalisé pour votre projet</li>
                <li>• Recommandations techniques et budget priorisé</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[2rem] border border-gray-800 bg-gray-900/90 p-6 md:p-8 shadow-[0_30px_120px_rgba(0,0,0,0.25)] md:sticky md:top-24">
            <div className="mb-6">
              <h2 className="text-3xl font-semibold text-[#00D1FF]">Demande de devis</h2>
              <p className="mt-3 text-gray-400 leading-7">
                Donnez-nous les informations clés et recevez une proposition de qualité rapidement.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Entreprise / Association</label>
                  <input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    type="text"
                    placeholder="Ex: ABC Tech"
                    className="w-full rounded-2xl border border-gray-700 bg-[#111827] px-5 py-4 text-white outline-none transition duration-200 focus:border-[#00D1FF]"
                  />
                </div>
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">Nom et prénom</label>
                  <input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Ex: Abdou Ndiaye"
                    required
                    className="w-full rounded-2xl border border-gray-700 bg-[#111827] px-5 py-4 text-white outline-none transition duration-200 focus:border-[#00D1FF]"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="exemple@mail.com"
                    required
                    className="w-full rounded-2xl border border-gray-700 bg-[#111827] px-5 py-4 text-white outline-none transition duration-200 focus:border-[#00D1FF]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Téléphone</label>
                  <input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+221 77 123 45 67"
                    className="w-full rounded-2xl border border-gray-700 bg-[#111827] px-5 py-4 text-white outline-none transition duration-200 focus:border-[#00D1FF]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-300 mb-2">Type de prestation</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-gray-700 bg-[#111827] px-5 py-4 text-white outline-none transition duration-200 focus:border-[#00D1FF]"
                >
                  {serviceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-300 mb-2">Description du projet</label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Décrivez vos attentes, le contexte et les résultats attendus"
                  required
                  className="w-full rounded-[1.5rem] border border-gray-700 bg-[#111827] px-5 py-4 text-white outline-none resize-none transition duration-200 focus:border-[#00D1FF]"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">Budget estimé</label>
                  <input
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    type="text"
                    placeholder="Ex: 2 500 000 FCFA"
                    className="w-full rounded-2xl border border-gray-700 bg-[#111827] px-5 py-4 text-white outline-none transition duration-200 focus:border-[#00D1FF]"
                  />
                </div>
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-300 mb-2">Niveau d'urgence</label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-700 bg-[#111827] px-5 py-4 text-white outline-none transition duration-200 focus:border-[#00D1FF]"
                  >
                    <option>Standard</option>
                    <option>Rapide</option>
                    <option>Immédiat</option>
                  </select>
                </div>
              </div>

              {status && (
                <div
                  className={`rounded-3xl border px-5 py-4 text-sm ${
                    status.type === "success"
                      ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-200"
                      : "border-red-500/20 bg-red-500/10 text-red-200"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-[#F5B321] px-6 py-4 text-black font-semibold transition duration-300 hover:bg-yellow-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Envoi en cours..." : "Obtenir mon devis professionnel"}
              </button>

              <p className="text-xs text-gray-500 leading-6">
                Vos données sont sécurisées et utilisées uniquement pour préparer votre proposition.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
