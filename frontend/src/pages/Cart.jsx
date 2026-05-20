import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdDelete, MdAdd, MdRemove } from "react-icons/md";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const cart = JSON.parse(savedCart);
      setCartItems(cart);
      calculateTotal(cart);
    }
  }, []);

  const getNumericPrice = (price) => {
    const numericString = String(price).replace(/\D/g, "");
    return numericString ? parseFloat(numericString) : 0;
  };

  const calculateTotal = (items) => {
    const sum = items.reduce((acc, item) => {
      const price = getNumericPrice(item.price);
      const quantity = Number(item.quantity) || 1;
      return acc + price * quantity;
    }, 0);
    setTotal(sum);
  };

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) return;
    const updated = cartItems.map((item) =>
      item.cartId === cartId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updated);
    calculateTotal(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const removeItem = (cartId) => {
    const updated = cartItems.filter((item) => item.cartId !== cartId);
    setCartItems(updated);
    calculateTotal(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const clearCart = () => {
    setCartItems([]);
    setTotal(0);
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="min-h-screen text-white" style={{
      background: `
        linear-gradient(180deg, #0B0F14 0%, #0f1622 50%, #0B0F14 100%),
        repeating-linear-gradient(0deg, rgba(0, 209, 255, 0.04) 0px, rgba(0, 209, 255, 0.04) 2px, transparent 2px, transparent 4px),
        repeating-linear-gradient(90deg, rgba(0, 209, 255, 0.04) 0px, rgba(0, 209, 255, 0.04) 2px, transparent 2px, transparent 4px)
      `,
      backgroundAttachment: 'fixed'
    }}>
      <Navbar />

      <section className="bg-[#0B0F14] text-white py-12 md:py-20 px-4 md:px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* TITLE */}
          <div className="mb-10 md:mb-14">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5B700]">
              Mon Panier
            </h1>
            <p className="text-gray-400 mt-3 text-sm md:text-base">
              {cartItems.length} article{cartItems.length !== 1 ? "s" : ""} dans votre panier
            </p>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg mb-6">
                Votre panier est vide
              </p>
              <a
                href="/products"
                className="inline-block bg-[#00D1FF] hover:bg-[#00B8E6] text-black font-bold py-2 px-6 rounded-xl transition"
              >
                Continuer les achats
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* CART ITEMS */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.cartId}
                    className="bg-gray-900/60 rounded-xl border border-gray-800 p-4 md:p-6 flex gap-4"
                  >
                    {/* IMAGE */}
                    <div className="w-24 h-24 rounded-lg bg-gray-800 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* INFO */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white md:text-lg">
                        {item.name}
                      </h3>
                      <p className="text-[#F5B700] font-semibold mt-1">
                        {item.priceDisplay ?? `${getNumericPrice(item.price).toLocaleString()} FCFA`}
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        Total: {(getNumericPrice(item.price) * (Number(item.quantity) || 1)).toLocaleString()} FCFA
                      </p>
                    </div>

                    {/* QUANTITY & DELETE */}
                    <div className="flex flex-col items-end gap-3">
                      <button
                        onClick={() => removeItem(item.cartId)}
                        className="text-red-400 hover:text-red-300 transition"
                      >
                        <MdDelete size={20} />
                      </button>

                      <div className="flex items-center border border-gray-700 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="px-2 py-1 text-gray-400 hover:text-white transition"
                        >
                          <MdRemove size={16} />
                        </button>
                        <span className="px-3 py-1 text-white font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="px-2 py-1 text-gray-400 hover:text-white transition"
                        >
                          <MdAdd size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* SUMMARY */}
              <div className="lg:col-span-1">
                <div className="bg-gray-900/60 rounded-xl border border-gray-800 p-6 sticky top-20">
                  <h3 className="text-xl font-bold text-white mb-6">Résumé</h3>

                  <div className="space-y-3 mb-6 pb-6 border-b border-gray-700">
                    <div className="flex justify-between text-gray-300">
                      <span>Sous-total</span>
                      <span>{total.toLocaleString()} FCFA</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Livraison</span>
                      <span className="text-green-400">Gratuite</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-lg font-bold text-[#F5B700] mb-6">
                    <span>Total</span>
                    <span>{total.toLocaleString()} FCFA</span>
                  </div>

                  <button className="w-full bg-[#00D1FF] hover:bg-[#00B8E6] text-black font-bold py-3 rounded-xl transition mb-3">
                    Passer la commande
                  </button>

                  <button
                    onClick={clearCart}
                    className="w-full border border-gray-700 hover:border-gray-600 text-gray-300 font-semibold py-2 rounded-xl transition mb-3"
                  >
                    Vider le panier
                  </button>

                  <a
                    href="/products"
                    className="block text-center text-[#00D1FF] hover:text-[#00B8E6] text-sm transition"
                  >
                    Continuer les achats
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}