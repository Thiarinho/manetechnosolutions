import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductDetailModal from "../components/ProductDetailModal";
import { MdSearch, MdClose } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import product1Image from "../assets/products/product1.jpeg";
import product2Image from "../assets/products/product2.jpeg";
import product3Image from "../assets/products/product3.jpeg";
import product4Image from "../assets/products/product4.jpeg";
import product5Image from "../assets/products/product5.jpeg";
import product6Image from "../assets/products/product6.jpeg";
import product7Image from "../assets/products/product7.jpeg";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [sortBy, setSortBy] = useState("populaire");
  const [compareItems, setCompareItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const allProducts = [
    {
      id: 1,
      name: "Lenovo ThinkPad X1 Carbon Gen 11",
      price: 170000,
      priceDisplay: "170.000FCFA",
      image: product1Image,
      images: [product1Image],
      category: "Laptops",
      rating: 4.8,
      reviews: 127,
      description: "Lenovo ThinkPad X1 Carbon Gen 11 - Ultraportable professionnel haut de gamme avec écran 14 pouces 2.8K.",
      badge: "Populaire",
      specifications: [
        { label: "Processeur", value: "Intel Core i7 13ème génération" },
        { label: "RAM", value: "16 Go LPDDR5" },
        { label: "Stockage", value: "512 Go SSD NVMe" },
        { label: "Écran", value: "14 pouces 2.8K IPS" },
        { label: "Batterie", value: "52 Wh - jusqu'à 15h" },
        { label: "Poids", value: "1.17 kg" },
        { label: "Système", value: "Windows 11 Pro" }
      ]
    },
    {
      id: 2,
      name: "HP EliteBook 840 G8",
      price: 210000,
      priceDisplay: "210.000FCFA",
      image: product2Image,
      images: [product2Image],
      category: "Laptops",
      rating: 4.6,
      reviews: 98,
      description: "HP EliteBook 840 G8 - Laptop professionnel sécurisé et performant avec technologie de sécurité intégrée.",
      badge: null,
      specifications: [
        { label: "Processeur", value: "Intel Core i5 11ème génération" },
        { label: "RAM", value: "16 Go DDR4" },
        { label: "Stockage", value: "512 Go SSD" },
        { label: "Écran", value: "14 pouces FHD IPS" },
        { label: "Batterie", value: "50 Wh" },
        { label: "Poids", value: "1.29 kg" },
        { label: "Système", value: "Windows 11 Pro" }
      ]
    },
    {
      id: 3,
      name: "Dell Latitude 5420",
      price: 185000,
      priceDisplay: "185.000 FCFA",
      image: product3Image,
      images: [product3Image],
      category: "Laptops",
      rating: 4.7,
      reviews: 156,
      description: "Dell Latitude 5420 - Solution portable performante pour les professionnels exigeants avec écran 13.4 pouces.",
      badge: "Coup de ❤️",
      specifications: [
        { label: "Processeur", value: "Intel Core i5 11ème génération" },
        { label: "RAM", value: "16 Go DDR4" },
        { label: "Stockage", value: "512 Go SSD" },
        { label: "Écran", value: "13.4 pouces FHD IPS" },
        { label: "Batterie", value: "63 Wh" },
        { label: "Poids", value: "1.31 kg" },
        { label: "Système", value: "Windows 11 Pro" }
      ]
    },
    {
      id: 4,
      name: "TP-Link Archer C80",
      price: 25000,
      priceDisplay: "25.000 FCFA",
      image: product4Image,
      images: [product4Image],
      category: "Routeurs",
      rating: 4.5,
      reviews: 342,
      description: "TP-Link Archer C80 - Routeur WiFi 6 haute performance avec 4 antennes externes pour une portée exceptionnelle.",
      badge: null,
      specifications: [
        { label: "Norme", value: "WiFi 6 (802.11ax)" },
        { label: "Vitesse", value: "Jusqu'à 1.8 Gbps" },
        { label: "Antennes", value: "4 antennes externes" },
        { label: "Bandes", value: "Dual-band 2.4 GHz et 5 GHz" },
        { label: "Ports", value: "4 ports Gigabit Ethernet" },
        { label: "Sécurité", value: "WPA3, Firewall" },
        { label: "Portée", value: "Jusqu'à 150 m²" }
      ]
    },
    {
      id: 5,
      name: "HP x360 G2",
      price: 95000,
      priceDisplay: "95.000 FCFA",
      image: product5Image,
      images: [product5Image],
      category: "Laptops",
      rating: 4.3,
      reviews: 76,
      description: "HP x360 G2 - Convertible tactile 2-en-1 Intel Pentium idéal pour étudiants et professionnels à petit budget.",
      badge: "Budget",
      specifications: [
        { label: "Processeur", value: "Intel Pentium" },
        { label: "RAM", value: "4Go LPDDR4" },
        { label: "Stockage", value: "256 Go SSD" },
        { label: "Écran", value: "12 pouces FHD IPS tactile et rotatif" },
        { label: "Batterie", value: "50 Wh" },
        { label: "Poids", value: "1.43 kg" },
        { label: "Système", value: "Windows 10Pro" }
      ]
    },
    {
      id: 6,
      name: "Dell Latitude 3190",
      price: 100000,
      priceDisplay: "100.000 FCFA",
      image: product6Image,
      images: [product6Image],
      category: "Laptops",
      rating: 4.4,
      reviews: 89,
      description: "Dell Latitude 3190 - Intel Pentium 8GB RAM, écran 12 pouces tactile rotatif avec excellent autonomie.",
      badge: "Promo",
      specifications: [
        { label: "Processeur", value: "Intel Pentium" },
        { label: "RAM", value: "8 Go " },
        { label: "Stockage", value: "128 Go SSD" },
        { label: "Écran", value: "12pouces FHD IPS tactile" },
        { label: "Batterie", value: "50 Wh" },
        { label: "Poids", value: "1.43 kg" },
        { label: "Système", value: "Windows 11 Pro" }
      ]
    },
    {
      id: 7,
      name: "Boxe IPTV Android",
      price: 40000,
      priceDisplay: "40.000 FCFA",
      image: product7Image,
      images: [product7Image],
      category: "IPTV",
      rating: 4.6,
      reviews: 203,
      description: "Boxe IPTV Android - Streaming 4K avec 1 an abonnement gratuit, 17.000+ chaînes et 100.000+ films/séries.",
      badge: "Offre",
      specifications: [
          { label: "Connectivité", value: "WiFi 802.11n, Ethernet" },
          { label: "Ports", value: "HDMI, USB 2.0, AV, SD" },
          { label: "Résolution", value: "Jusqu'à 4K UHD" },
          { label: "Abonnement", value: "1 an gratuit avec plus de 17.000 chaînes et 100.000 films/séries à la demande" }
      ]
    },
  ];

  const categories = ["Tous", ...new Set(allProducts.map(p => p.category))];

  // Filtrer et trier les produits
  let filteredProducts = allProducts.filter(product => {
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === "Tous" || product.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  // Trier
  if (sortBy === "prix-croissant") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "prix-decroissant") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }
  // "populaire" c'est l'ordre par défaut

  const handleAddToCart = (productWithQty) => {
    const existingItem = cart.find((item) => item.id === productWithQty.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === productWithQty.id
            ? { ...item, quantity: item.quantity + productWithQty.quantity }
            : item
        )
      );
    } else {
      setCart([...cart, productWithQty]);
    }
  };

  const toggleCompare = (product) => {
    setCompareItems(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const truncateText = (text, lines = 2) => {
    const lineArray = text.split('\n');
    if (lineArray.length > lines) {
      return lineArray.slice(0, lines).join('\n') + '...';
    }
    return text;
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'}`}>
            ★
          </span>
        ))}
        <span className="text-xs text-gray-400">({rating.toFixed(1)})</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen text-white" style={{
      background: `
        linear-gradient(180deg, #0B0F14 0%, #0f1419 50%, #0B0F14 100%),
        repeating-linear-gradient(0deg, rgba(0, 209, 255, 0.03) 0px, rgba(0, 209, 255, 0.03) 1px, transparent 1px, transparent 2px),
        repeating-linear-gradient(90deg, rgba(0, 209, 255, 0.03) 0px, rgba(0, 209, 255, 0.03) 1px, transparent 1px, transparent 2px)
      `,
      backgroundAttachment: 'fixed'
    }}>
      <Navbar />

      <section className="
        bg-[#0B0F14]
        text-white
        py-12 md:py-20 px-4 md:px-6
        min-h-screen
      ">

      {/* TITLE */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5B700]">
          Nos Produits
        </h2>
        <p className="text-sm md:text-base text-gray-400 mt-3 md:mt-4">
          {filteredProducts.length} produit{filteredProducts.length !== 1 ? "s" : ""} disponible{filteredProducts.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* SEARCH BAR */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="relative">
          <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-900/60 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-[#00D1FF] outline-none transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <MdClose size={20} />
            </button>
          )}
        </div>
      </div>

      {/* FILTERS & SORT */}
      <div className="max-w-7xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* CATEGORIES */}
        <div>
          <label className="text-sm font-semibold text-gray-300 mb-2 block">Catégories</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-gray-900/60 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-[#00D1FF] outline-none transition"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* SORT */}
        <div>
          <label className="text-sm font-semibold text-gray-300 mb-2 block">Trier par</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full bg-gray-900/60 border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-[#00D1FF] outline-none transition"
          >
            <option value="populaire">Populaire</option>
            <option value="prix-croissant">Prix (croissant)</option>
            <option value="prix-decroissant">Prix (décroissant)</option>
            <option value="rating">Meilleure notation</option>
          </select>
        </div>

        {/* COMPARE BUTTON */}
        <div className="flex items-end">
          <button
            className={`w-full px-4 py-2 rounded-lg font-semibold transition ${
              compareItems.length > 0
                ? "bg-[#00D1FF] text-black hover:bg-[#00B8E6]"
                : "bg-gray-800 text-gray-400 cursor-not-allowed"
            }`}
            disabled={compareItems.length === 0}
          >
            Comparer ({compareItems.length})
          </button>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="max-w-7xl mx-auto">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Aucun produit ne correspond à votre recherche</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-900/60 rounded-2xl md:rounded-3xl overflow-hidden border border-gray-800 hover:border-[#00D1FF] transition duration-300 shadow-xl hover:shadow-2xl group"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative h-48 sm:h-56 md:h-72 w-full bg-gray-800 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                  />

                  {/* BADGES */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    {product.badge && (
                      <div className="bg-[#00D1FF] text-black text-xs font-bold px-2 py-1 rounded-lg">
                        {product.badge}
                      </div>
                    )}
                    <div className="bg-[#F5B700] text-black text-xs font-bold px-2 py-1 rounded-lg">
                      {product.category}
                    </div>
                  </div>

                  {/* COMPARE CHECKBOX */}
                  <div className="absolute bottom-3 left-3">
                    <input
                      type="checkbox"
                      checked={compareItems.some(p => p.id === product.id)}
                      onChange={() => toggleCompare(product)}
                      className="w-5 h-5 cursor-pointer"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-2xl font-bold text-white line-clamp-2">
                    {product.name}
                  </h3>

                  {/* RATING */}
                  <div className="mt-2">
                    {renderStars(product.rating)}
                    <p className="text-xs text-gray-400 mt-1">{product.reviews} avis</p>
                  </div>

                  {/* DESCRIPTION - Truncated */}
                  <p className="text-gray-400 text-xs md:text-sm mt-2 line-clamp-2">
                    {product.description}
                  </p>

                  {/* PRICE */}
                  <p className="text-[#F5B700] text-lg md:text-2xl font-semibold mt-3 md:mt-4">
                    {product.priceDisplay}
                  </p>

                  {/* BUTTONS */}
                  <div className="flex gap-2 mt-4 md:mt-6">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="flex-1 bg-[#00D1FF] hover:bg-[#00B8E6] text-black font-bold py-2 md:py-3 rounded-xl transition duration-300 text-sm md:text-base"
                    >
                      Détails
                    </button>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="flex-1 border border-gray-700 hover:border-[#00D1FF] text-white font-bold py-2 md:py-3 rounded-xl transition duration-300 text-sm md:text-base"
                    >
                      Panier
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      </section>

      <Footer />

      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        allProducts={allProducts}
      />
    </div>
  );
}