export default function Projects() {

  const projects = [
    {
      title: "Installation CCTV",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Infrastructure Réseau",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Solutions Digitales",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">

      {/* TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-orange-400">
          Produit d'intrusion avec Ajax pro.
        </h2>

        <p className="text-gray-400 mt-4">
          Les peripheriques utilisés.
        </p>
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >

            <img
              src={project.image}
              alt={project.title}
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-400">
                {project.title}
              </h3>

              <button className="mt-4 bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg">
                Voir le projet
              </button>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}