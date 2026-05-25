function Portafolio() {
  return (
    <section className="min-h-screen bg-white pt-28 px-4 sm:px-6 pb-20">
      
      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Mi Portafolio
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Proyectos desarrollados en frontend, backend y soluciones completas
          para empresas y emprendedores.
        </p>
      </div>

      {/* FILTROS (maqueta visual) */}
      <div className="max-w-6xl mx-auto mt-10 flex flex-wrap justify-center gap-3">
        <button className="px-4 py-2 bg-black text-white rounded-full text-sm">
          Todos
        </button>
        <button className="px-4 py-2 border rounded-full text-sm hover:bg-black hover:text-white transition">
          React
        </button>
        <button className="px-4 py-2 border rounded-full text-sm hover:bg-black hover:text-white transition">
          Laravel
        </button>
        <button className="px-4 py-2 border rounded-full text-sm hover:bg-black hover:text-white transition">
          WordPress
        </button>
        <button className="px-4 py-2 border rounded-full text-sm hover:bg-black hover:text-white transition">
          Ecommerce
        </button>
      </div>

      {/* GRID PROYECTOS */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div className="bg-white border rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            alt="Proyecto"
            className="h-48 w-full object-cover"
          />
          <div className="p-5">
            <h3 className="font-bold text-lg">Sistema de Ventas</h3>
            <p className="text-gray-600 text-sm mt-2">
              Sistema web con gestión de productos, stock y ventas en tiempo real.
            </p>
            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Laravel</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">MySQL</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">API</span>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white border rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d"
            alt="Proyecto"
            className="h-48 w-full object-cover"
          />
          <div className="p-5">
            <h3 className="font-bold text-lg">Ecommerce Shopify</h3>
            <p className="text-gray-600 text-sm mt-2">
              Tienda online optimizada para conversiones con pagos integrados.
            </p>
            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Shopify</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">UI/UX</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">SEO</span>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-white border rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="Proyecto"
            className="h-48 w-full object-cover"
          />
          <div className="p-5">
            <h3 className="font-bold text-lg">Dashboard Admin</h3>
            <p className="text-gray-600 text-sm mt-2">
              Panel administrativo con métricas en tiempo real.
            </p>
            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">React</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Charts</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">API</span>
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="bg-white border rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1547658719-da2b51169166"
            alt="Proyecto"
            className="h-48 w-full object-cover"
          />
          <div className="p-5">
            <h3 className="font-bold text-lg">Landing Page</h3>
            <p className="text-gray-600 text-sm mt-2">
              Página optimizada para marketing y captación de clientes.
            </p>
            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">HTML</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Tailwind</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">SEO</span>
            </div>
          </div>
        </div>

        {/* CARD 5 */}
        <div className="bg-white border rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Proyecto"
            className="h-48 w-full object-cover"
          />
          <div className="p-5">
            <h3 className="font-bold text-lg">Sistema ERP</h3>
            <p className="text-gray-600 text-sm mt-2">
              Gestión empresarial con clientes, proveedores e inventario.
            </p>
            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">VBA</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Excel</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">DB</span>
            </div>
          </div>
        </div>

        {/* CARD 6 */}
        <div className="bg-white border rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
            alt="Proyecto"
            className="h-48 w-full object-cover"
          />
          <div className="p-5">
            <h3 className="font-bold text-lg">App Móvil</h3>
            <p className="text-gray-600 text-sm mt-2">
              Aplicación multiplataforma conectada a API REST.
            </p>
            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Flutter</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">API</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">Firebase</span>
            </div>
          </div>
        </div>

      </div>

      {/* CTA FINAL */}
      <div className="max-w-4xl mx-auto mt-20 text-center bg-black text-white p-10 rounded-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="mt-3 text-gray-300">
          Hagamos realidad tu idea con tecnología moderna
        </p>
        <button className="mt-6 bg-yellow-300 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition">
          Contactar ahora
        </button>
      </div>

    </section>
  );
}

export default Portafolio;