import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Portafolio from "./pages/Portafolio";
import {motion} from "framer-motion";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <h3 className="text-3xl sm:text-4xl font-bold text-black">
      {count}
      {suffix}
    </h3>
  );
}

function Home() {
  return (
    <>
      <section className="min-h-screen bg-[#F4EDB5] flex items-center px-4 sm:px-6 pt-28 pb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Texto */}
          <div className="text-center md:text-left">
            <span className="inline-block bg-yellow-300 text-black px-3 py-1 rounded-full text-xs sm:text-lg font-medium">
              {"</>"} Desarrollo web profesional
            </span>

            <h1 className="mt-6 text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold leading-tight text-[#111827]">
              Transformo ideas en
              <span className="text-yellow-600 block">
                Soluciones digitales
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
              Desarrollador web especializado en Laravel, React, APIs, WordPress
              y Shopify. Creando experiencias digitales modernas y
              profesionales.
            </p>

            {/* Botones */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition w-full sm:w-auto">
                Solicitar cotización →
              </button>
              <button className="border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white transition w-full sm:w-auto">
                Ver servicios
              </button>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Desarrollo web"
              className="rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-md sm:max-w-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/*SECCION DE VALORIZACION */}

      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <Counter end={10} suffix="+" />
            <p className="text-gray-700 text-sm sm:text-base">
              Sitios web publicados
            </p>
          </div>

          <div className="space-y-2">
            <Counter end={1} suffix="+" />
            <p className="text-gray-700 text-sm sm:text-base">
              Años de experiencia
            </p>
          </div>

          <div className="space-y-2">
            <Counter end={98} suffix="%" />
            <p className="text-gray-700 text-sm sm:text-base">
              Clientes que nos recomiendan
            </p>
          </div>

          <div className="space-y-2">
            <Counter end={24} suffix="/7" />
            <p className="text-gray-700 text-sm sm:text-base">
              Soporte y asistencia técnica
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F4EDB5] py-20 px-4 sm:px-6">
        {/* Título */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Nuestra especialidad
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Ofrezco soluciones tecnológicas completas adaptadas a tus
            necesidades, desde sitios web hasta aplicaciones móviles y APIs.
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 border border-yellow-300 hover:shadow-lg transition">
            <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-xl mb-4">
              <span className="text-red-500 text-xl">🗄️</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Desarrollo Laravel</h3>
            <p className="text-gray-600 text-sm">
              Aplicaciones web robustas y escalables con API REST, autenticación
              y arquitectura MVC.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 border border-yellow-300 hover:shadow-lg transition">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl mb-4">
              <span className="text-blue-500 text-xl">📱</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Aplicación Flutter</h3>
            <p className="text-gray-600 text-sm">
              Apps móviles multiplataforma para iOS y Android con rendimiento
              optimizado.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 border border-yellow-300 hover:shadow-lg transition">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-xl mb-4">
              <span className="text-purple-500 text-xl">☁️</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Desarrollo de APIs</h3>
            <p className="text-gray-600 text-sm">
              APIs REST seguras y documentadas con autenticación y optimización
              de rendimiento.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 border border-yellow-300 hover:shadow-lg transition">
            <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-xl mb-4">
              <span className="text-green-500 text-xl">🧩</span>
            </div>
            <h3 className="font-bold text-lg mb-2">WordPress y CMS</h3>
            <p className="text-gray-600 text-sm">
              Sitios administrables, temas personalizados y optimización SEO
              profesional.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-2xl p-6 border border-yellow-300 hover:shadow-lg transition">
            <div className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-xl mb-4">
              <span className="text-orange-500 text-xl">🛒</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Tienda Shopify</h3>
            <p className="text-gray-600 text-sm">
              E-commerce profesional con optimización de conversiones y pagos
              integrados.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-2xl p-6 border border-yellow-300 hover:shadow-lg transition">
            <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-xl mb-4">
              <span className="text-indigo-500 text-xl">💻</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Full Stack</h3>
            <p className="text-gray-600 text-sm">
              Soluciones completas desde frontend hasta backend con arquitectura
              moderna.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 overflow-hidden">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

    {/* Imagen */}
    <div className="lg:sticky lg:top-10 self-start">
      <img
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
        alt="Sobre mí"
        className="
          w-full
          h-[350px]
          sm:h-[450px]
          lg:h-[600px]
          object-cover
          rounded-3xl
          shadow-2xl
        "
      />
    </div>

    {/* Contenido */}
    <div className="space-y-6">

      <div>
        <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-2">
          Sobre mí
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-black">
          Desarrollo soluciones digitales modernas
        </h2>
      </div>

      <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
        Soy estudiante de Analista Programador en Duoc UC sede Maipú,
        actualmente en proceso de formación y desarrollo profesional en el
        área de la tecnología y programación.
      </p>

      <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
        Me apasiona el desarrollo web, la creación de soluciones digitales
        y el aprendizaje constante de nuevas tecnologías enfocadas en
        software, automatización y experiencias modernas para usuarios.
      </p>

      <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
        Mi objetivo es finalizar mi carrera como Analista Programador y
        posteriormente continuar mis estudios para obtener el título de
        Ingeniería en Informática.
      </p>

      {/* Tecnologías */}
      <div className="flex flex-wrap gap-3 pt-4">

        <span className="px-4 py-2 bg-black text-white rounded-full text-sm hover:scale-105 transition">
          React
        </span>

        <span className="px-4 py-2 bg-black text-white rounded-full text-sm hover:scale-105 transition">
          Laravel
        </span>

        <span className="px-4 py-2 bg-black text-white rounded-full text-sm hover:scale-105 transition">
          JavaScript
        </span>

        <span className="px-4 py-2 bg-black text-white rounded-full text-sm hover:scale-105 transition">
          APIs REST
        </span>

        <span className="px-4 py-2 bg-black text-white rounded-full text-sm hover:scale-105 transition">
          Tailwind CSS
        </span>

      </div>
    </div>
  </div>
</section>

<section className="bg-[#F4EDB5] py-20 px-4 sm:px-6">
  
  {/* Título */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto text-center mb-12"
  >
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
      Impulsa tu presencia digital con Duckode
    </h2>

    <p className="mt-4 text-gray-700">
      Desarrollo web profesional adaptado a tus necesidades
    </p>
  </motion.div>

  {/* Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* Landing Page */}
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.6, delay: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-md border border-yellow-300 hover:shadow-xl transition"
    >
      <h3 className="text-xl font-bold">Landing Page</h3>

      <p className="text-sm text-gray-500 mt-1">
        Página para emprendedor
      </p>

      <div className="text-2xl font-bold mt-4 text-black">
        $100.000 <span className="text-sm font-medium">+ IVA</span>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        <li>✔ Diseño profesional personalizado</li>
        <li>✔ Sección de servicios</li>
        <li>✔ Formulario de contacto</li>
        <li>✔ WhatsApp integrado</li>
        <li>✔ Redes sociales</li>
        <li>✔ Diseño responsive</li>
        <li>✔ SEO básico</li>
        <li>✔ Soporte 30 días</li>
      </ul>
    </motion.div>

    {/* Corporativo */}
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-md border border-yellow-300 hover:shadow-xl transition"
    >
      <h3 className="text-xl font-bold">Sitio Corporativo</h3>

      <p className="text-sm text-gray-500 mt-1">
        Web Profesional Multi-Sección
      </p>

      <div className="text-2xl font-bold mt-4 text-black">
        $350.000 <span className="text-sm font-medium">+ IVA</span>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        <li>✔ Hasta 5 secciones</li>
        <li>✔ Diseño personalizado</li>
        <li>✔ Panel de administración</li>
        <li>✔ Formulario de contacto</li>
        <li>✔ WhatsApp integrado</li>
        <li>✔ SEO básico</li>
        <li>✔ Responsive</li>
        <li>✔ Soporte 30 días</li>
      </ul>
    </motion.div>

    {/* Ecommerce */}
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 shadow-md border border-yellow-300 hover:shadow-xl transition"
    >
      <h3 className="text-xl font-bold">Ecommerce</h3>

      <p className="text-sm text-gray-500 mt-1">
        Tienda Online con Pagos
      </p>

      <div className="text-2xl font-bold mt-4 text-black">
        $600.000 <span className="text-sm font-medium">+ IVA</span>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        <li>✔ Catálogo autoadministrable</li>
        <li>✔ Carrito de compras</li>
        <li>✔ Webpay / MercadoPago</li>
        <li>✔ Gestión de stock</li>
        <li>✔ Panel admin completo</li>
        <li>✔ SEO básico</li>
        <li>✔ Responsive</li>
        <li>✔ Soporte 30 días</li>
      </ul>
    </motion.div>
  </div>

  {/* PROMO DESTACADA */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="max-w-4xl mx-auto mt-12 bg-black text-white rounded-2xl p-8 text-center shadow-2xl border border-yellow-300"
  >
    <h3 className="text-2xl sm:text-3xl font-bold">
      🔥 PROMOCIÓN ESPECIAL
    </h3>

    <p className="mt-3 text-gray-300">
      Ideal para emprendedores que están comenzando
    </p>

    <div className="text-4xl font-bold mt-4 text-yellow-300">
      $100.000
    </div>

    <p className="mt-2 text-gray-300">
      Landing Page + Hosting + NIC incluido
    </p>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-6 bg-yellow-300 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition"
    >
      Quiero esta promoción
    </motion.button>
  </motion.div>

</section>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portafolio" element={<Portafolio />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
