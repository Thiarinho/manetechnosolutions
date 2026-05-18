import { useState } from "react";
import { MdClose, MdChevronLeft, MdChevronRight, MdShoppingCart, MdShare, MdStar } from "react-icons/md";
import { FaFacebook, FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ProductDetailModal({ product, isOpen, onClose, onAddToCart, allProducts = [] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showShareMenu, setShowShareMenu] = useState(false);

  if (!isOpen || !product) return null;

  const images = product.images || [product.image];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      quantity: parseInt(quantity),
      cartId: Math.random(),
    });
    setQuantity(1);
    window.dispatchEvent(new Event("cartUpdated"));
    onClose();
  };

  // Partage sur réseaux sociaux
  const handleShare = (platform) => {
    const productUrl = window.location.href;
    const text = `Découvrez ${product.name} - ${product.priceDisplay}`;
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(productUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(productUrl)}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  // Produits similaires
  const similarProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-lg ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'}`}>
            ★
          </span>
        ))}
        <span className="text-sm text-gray-400 ml-2">({rating.toFixed(1)}) {product.reviews} avis</span>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-gray-900 rounded-2xl max-w-5xl w-full my-4">
        {/* HEADER */}
        <div className="sticky top-0 bg-gray-900 border-b border-gray-800 flex justify-between items-center p-4 md:p-6 z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white line-clamp-1">{product.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition flex-shrink-0"
          >
            <MdClose size={28} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* IMAGE GALLERY */}
            <div className="flex flex-col gap-4">
              <div className="relative bg-gray-800 rounded-xl overflow-hidden h-96">
                <img
                  src={images[currentImageIndex]}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#00D1FF] hover:bg-[#00B8E6] text-black p-2 rounded-full transition"
                    >
                      <MdChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#00D1FF] hover:bg-[#00B8E6] text-black p-2 rounded-full transition"
                    >
                      <MdChevronRight size={20} />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition ${
                            idx === currentImageIndex
                              ? "bg-[#00D1FF]"
                              : "bg-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* THUMBNAIL GALLERY */}
              {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                        idx === currentImageIndex
                          ? "border-[#00D1FF]"
                          : "border-gray-700 hover:border-gray-600"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* DETAILS */}
            <div className="flex flex-col justify-between">
              {/* INFO */}
              <div>
                {/* RATING */}
                <div className="mb-4">
                  {renderStars(product.rating)}
                </div>

                <p className="text-[#F5B700] text-3xl font-bold mb-4">
                  {product.priceDisplay}
                </p>

                <div className="mb-6">
                  <p className="text-gray-300 text-base">{product.description}</p>
                </div>

                {/* BADGES */}
                <div className="mb-6 flex gap-2 flex-wrap">
                  <span className="bg-[#F5B700] text-black px-3 py-1 rounded-lg text-sm font-semibold">
                    {product.category}
                  </span>
                  {product.badge && (
                    <span className="bg-[#00D1FF] text-black px-3 py-1 rounded-lg text-sm font-semibold">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* SPECIFICATIONS */}
                {product.specifications && (
                  <div className="mb-8 p-4 bg-gray-800 rounded-xl">
                    <h3 className="text-lg font-bold text-[#F5B700] mb-4">
                      Spécifications
                    </h3>
                    <ul className="space-y-2">
                      {product.specifications.map((spec, idx) => (
                        <li key={idx} className="text-gray-300 text-sm">
                          <span className="text-[#00D1FF] font-semibold">
                            {spec.label}:
                          </span>{" "}
                          {spec.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* AVAILABILITY */}
                <div className="mb-6 p-3 bg-green-900/30 rounded-lg border border-green-700/50">
                  <p className="text-green-300 text-sm font-semibold">
                    ✓ En stock - Livraison rapide disponible
                  </p>
                </div>
              </div>

              {/* ADD TO CART SECTION */}
              <div className="border-t border-gray-700 pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <label className="text-gray-300 font-semibold">Quantité:</label>
                  <div className="flex items-center border border-gray-700 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-gray-400 hover:text-white transition"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                      }
                      className="w-12 bg-gray-900 text-white text-center border-0 outline-none"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-gray-400 hover:text-white transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full bg-[#00D1FF] hover:bg-[#00B8E6] text-black font-bold py-3 rounded-xl transition duration-300 flex items-center justify-center gap-2 text-lg mb-3"
                >
                  <MdShoppingCart size={20} />
                  Ajouter au panier
                </button>

                {/* SHARE BUTTONS */}
                <div className="relative mb-3">
                  <button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="w-full border border-gray-700 hover:border-gray-600 text-gray-300 font-semibold py-2 rounded-xl transition flex items-center justify-center gap-2"
                  >
                    <MdShare size={18} />
                    Partager
                  </button>

                  {showShareMenu && (
                    <div className="absolute bottom-12 left-0 right-0 bg-gray-800 border border-gray-700 rounded-xl p-3 flex gap-2 justify-center">
                      <button
                        onClick={() => handleShare("facebook")}
                        className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition"
                        title="Facebook"
                      >
                        <FaFacebook size={18} />
                      </button>
                      <button
                        onClick={() => handleShare("whatsapp")}
                        className="p-2 bg-green-600 hover:bg-green-700 rounded-lg text-white transition"
                        title="WhatsApp"
                      >
                        <FaWhatsapp size={18} />
                      </button>
                      <button
                        onClick={() => handleShare("twitter")}
                        className="p-2 bg-blue-400 hover:bg-blue-500 rounded-lg text-white transition"
                        title="Twitter"
                      >
                        <FaTwitter size={18} />
                      </button>
                      <button
                        onClick={() => handleShare("linkedin")}
                        className="p-2 bg-blue-700 hover:bg-blue-800 rounded-lg text-white transition"
                        title="LinkedIn"
                      >
                        <FaLinkedin size={18} />
                      </button>
                    </div>
                  )}
                </div>

                <button
                  onClick={onClose}
                  className="w-full border border-gray-700 hover:border-gray-600 text-gray-300 font-semibold py-2 rounded-xl transition"
                >
                  Continuer les achats
                </button>
              </div>
            </div>
          </div>

          {/* SIMILAR PRODUCTS */}
          {similarProducts.length > 0 && (
            <div className="border-t border-gray-700 pt-8">
              <h3 className="text-2xl font-bold text-[#F5B700] mb-6">Produits similaires</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {similarProducts.map((similarProduct) => (
                  <div key={similarProduct.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-[#00D1FF] transition cursor-pointer">
                    <div className="h-40 bg-gray-700 overflow-hidden">
                      <img
                        src={similarProduct.image}
                        alt={similarProduct.name}
                        className="w-full h-full object-cover hover:scale-105 transition"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="font-bold text-white text-sm line-clamp-2">{similarProduct.name}</h4>
                      <p className="text-[#F5B700] font-semibold text-sm mt-2">{similarProduct.priceDisplay}</p>
                      <div className="flex items-center gap-1 mt-2">
                        <MdStar className="text-yellow-400" size={14} />
                        <span className="text-xs text-gray-400">{similarProduct.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
