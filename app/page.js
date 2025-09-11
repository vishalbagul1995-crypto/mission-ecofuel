import Navbar from "../components/Navbar.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-green-600 text-white text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-6">
          Turning Waste into a Greener Tomorrow
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Empowering Communities and Businesses with Sustainable Energy
          Solutions from Used Cooking Oil and Eco-Friendly Innovations.
        </p>
        <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Get Involved
        </button>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <div className="bg-white p-6 shadow-md rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-4">UCO Aggregation</h3>
            <p>
              Collection and safe disposal of Used Cooking Oil from households,
              hotels, and restaurants to prevent re-entry into the food chain.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-4">Ecofuel Production</h3>
            <p>
              Converting waste into biodiesel and other sustainable fuel
              alternatives to power a cleaner future.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-4">R&D & Innovation</h3>
            <p>
              Developing eco-friendly products like Ethanol Chafing Gel and
              future-ready sustainable technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center mt-12">
        <p>© {new Date().getFullYear()} Mission Ecofuel. All rights reserved.</p>
        <p className="mt-2 text-sm">Sustainability • Innovation • Impact</p>
      </footer>
    </div>
  );
}
