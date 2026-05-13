import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Products() {

  const products = [
    {
      id: 1,
      name: "Produit 1",
      price: "0 FCFA",
      image: null, // Remplacer par le chemin vers votre image: "../assets/products/product1.jpg"
      description: "Ajouter la description du produit"
    },

    {
      id: 2,
      name: "Produit 2",
      price: "0 FCFA",
      image: null, // Remplacer par le chemin vers votre image: "../assets/products/product2.jpg"
      description: "Ajouter la description du produit"
    },

    {
      id: 3,
      name: "Produit 3",
      price: "0 FCFA",
      image: null, // Remplacer par le chemin vers votre image: "../assets/products/product3.jpg"
      description: "Ajouter la description du produit"
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <section className="
        bg-[#0B0F14]
        text-white
        py-12 md:py-20 px-4 md:px-6
        min-h-screen
      ">

      {/* TITLE */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="
          text-3xl sm:text-4xl md:text-5xl font-bold
          text-[#F5B700]
        ">
          Nos Produits
        </h2>

        <p className="text-sm md:text-base text-gray-400 mt-3 md:mt-4">
          Ordinateurs, équipements réseau et matériels de sécurité.
        </p>
      </div>

      {/* GRID */}
      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-6 md:gap-8
        max-w-7xl
        mx-auto
      ">

        {products.map((product) => (
          <div
            key={product.id}
            className="
              bg-gray-900/60
              rounded-2xl md:rounded-3xl
              overflow-hidden
              border border-gray-800
              hover:border-[#00D1FF]
              transition duration-300
              shadow-xl
            "
          >

            {/* IMAGE PLACEHOLDER */}
            <div className="
              h-48 sm:h-56 md:h-72 w-full
              bg-gray-800
              flex items-center justify-center
              border-b border-gray-700
            ">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="text-center px-4">
                  <p className="text-gray-500 text-sm md:text-base">
                    Ajouter une image
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm mt-2">
                    Format: JPG, PNG
                  </p>
                </div>
              )}
            </div>

            {/* CONTENT */}
            <div className="p-4 md:p-6">

              <h3 className="
                text-lg md:text-2xl font-bold
                text-white
              ">
                {product.name}
              </h3>

              {/* DESCRIPTION */}
              <p className="
                text-gray-400
                text-xs md:text-sm
                mt-2
              ">
                {product.description}
              </p>

              {/* PRIX */}
              <p className="
                text-[#F5B700]
                text-lg md:text-2xl
                font-semibold
                mt-3 md:mt-4
              ">
                {product.price}
              </p>

              {/* BUTTON */}
              <button className="
                mt-4 md:mt-6
                w-full
                bg-[#00D1FF]
                hover:bg-[#00B8E6]
                text-black
                font-bold
                py-2 md:py-3
                rounded-xl
                transition duration-300
                text-sm md:text-base
              ">
                Voir détails
              </button>

            </div>

          </div>
        ))}

      </div>

      </section>

      <Footer />
    </div>
  );
}