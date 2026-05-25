import { Link } from "react-router-dom";

const proyectos = [
  {
    id: 1,
    titulo: "Sistema de Ventas",
    imagen: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    descripcion: "Control de stock y ventas en tiempo real",
    tags: ["Laravel", "MySQL", "API"],
  },
  {
    id: 2,
    titulo: "Ecommerce Shopify",
    imagen: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
    descripcion: "Tienda online optimizada para conversión",
    tags: ["Shopify", "SEO", "UI/UX"],
  },
];

function Portafolio() {
  return (
    <section className="min-h-screen bg-[#F4EDB5] pt-28 px-6 pb-20">

      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">Portafolio</h1>
        <p className="text-gray-600 mt-3">
          Proyectos desarrollados para clientes reales
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {proyectos.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
          >

            <img
              src={p.imagen}
              className="h-48 w-full object-cover"
              alt={p.titulo}
            />

            <div className="p-5">
              <h3 className="font-bold text-lg">{p.titulo}</h3>
              <p className="text-gray-600 text-sm mt-2">
                {p.descripcion}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Portafolio;