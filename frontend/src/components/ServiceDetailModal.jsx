import { FaCheckCircle } from "react-icons/fa";
import { MdClose, MdArrowForward, MdStar } from "react-icons/md";

export default function ServiceDetailModal({ service, isOpen, onClose }) {
  if (!isOpen || !service) return null;

  const renderStars = (rating) => (
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, idx) => (
        <span key={idx} className={`text-lg ${idx < Math.floor(rating) ? "text-yellow-400" : "text-gray-600"}`}>
          ★
        </span>
      ))}
      <span className="text-sm text-gray-400 ml-2">{rating.toFixed(1)} / 5</span>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-gray-900 rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl">
        <div className="flex justify-between items-center p-5 border-b border-gray-800 bg-[#0F172A]">
          <div>
            <p className="text-sm text-[#00D1FF] font-semibold uppercase mb-2">{service.category}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition">
            <MdClose size={28} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="rounded-3xl overflow-hidden bg-gray-800 shadow-inner">
            <img src={service.image} alt={service.title} className="w-full h-96 object-cover" />
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-2 bg-[#00D1FF] text-black text-xs font-semibold uppercase px-3 py-2 rounded-full">
                  {service.badge}
                </span>
                <span className="text-gray-400 text-sm">{service.reviews} avis</span>
              </div>

              {renderStars(service.rating)}

              <p className="text-gray-300 leading-7 mb-5">{service.details}</p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 bg-[#111827] p-4 rounded-2xl border border-gray-800">
                    <FaCheckCircle className="text-[#00D1FF] mt-1" />
                    <div>
                      <p className="text-gray-100 font-semibold">{feature.title}</p>
                      <p className="text-gray-400 text-sm mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={onClose}
                className="w-full bg-[#00D1FF] hover:bg-[#00B8E6] text-black font-bold py-3 rounded-2xl transition"
              >
                Demander un devis
              </button>
              <button
                onClick={onClose}
                className="w-full border border-gray-700 hover:border-gray-600 text-gray-300 py-3 rounded-2xl transition flex items-center justify-center gap-2"
              >
                Retour aux services
                <MdArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
