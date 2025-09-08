<<<<<<< HEAD
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

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          Why Choose Mission Ecofuel?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-green-100 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Health Protection</h3>
            <p>
              Prevents toxic UCO from re-entering the food chain, safeguarding
              public health.
            </p>
          </div>
          <div className="p-6 bg-green-100 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Environmental Impact</h3>
            <p>
              Reduces carbon emissions and supports a cleaner, greener
              environment.
            </p>
          </div>
          <div className="p-6 bg-green-100 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Government Aligned</h3>
            <p>
              Supporting India’s RUCO initiative and contributing to national
              biofuel targets.
            </p>
          </div>
          <div className="p-6 bg-green-100 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Carbon Credits</h3>
            <p>
              Generating carbon credits and building a circular economy through
              sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-6">Join the Mission</h2>
        <p className="max-w-xl mx-auto mb-8">
          Be part of the change. Whether you are a restaurant, household, or
          business, your contribution helps protect lives, reduce emissions, and
          create a cleaner future.
        </p>
        <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Partner With Us
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center mt-12">
        <p>© {new Date().getFullYear()} Mission Ecofuel. All rights reserved.</p>
        <p className="mt-2 text-sm">Sustainability • Innovation • Impact</p>
      </footer>
    </div>
=======
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <section className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-green-700 mb-2">
            Turning Waste into a Greener Tomorrow
          </h1>
          <h2 className="text-xl text-gray-600 mb-6">
            Empowering Communities and Businesses with Sustainable Energy Solutions from Used Cooking Oil and Eco-Friendly Innovations.
          </h2>
          <p className="text-lg text-gray-700">
            Mission Ecofuel exists to drive positive environmental change by transforming used cooking oil (UCO) and other waste resources into sustainable energy solutions. We promote healthier lifestyles, act as a trusted UCO aggregator, and collaborate with governments and communities for impactful green initiatives.
          </p>
        </section>
        <section className="my-10">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">Our Core Services</h3>
          <ul className="space-y-2 text-gray-700 list-disc ml-5">
            <li>UCO Aggregation & Recycling</li>
            <li>Ecofuel Production</li>
            <li>Research & Development in Renewable Energy</li>
            <li>Government & Industry Collaboration</li>
          </ul>
        </section>
        <section className="my-10">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">Why Choose Us?</h3>
          <ul className="space-y-2 text-gray-700 list-disc ml-5">
            <li>Sustainability & Innovation</li>
            <li>Integrity & Trust</li>
            <li>Community Impact</li>
          </ul>
        </section>
        <section className="text-center mt-12">
          <a href="/contact" className="px-6 py-3 rounded bg-green-700 text-white font-bold shadow hover:bg-green-800 transition">
            Explore Partnerships & Solutions
          </a>
        </section>
      </main>
    </>
>>>>>>> 95511f46e705da2742b927953849ebe880ff08bd
  );
}
