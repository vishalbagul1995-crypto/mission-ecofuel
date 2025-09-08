import Navbar from "../components/Navbar.jsx";

export default function Services() {
  return (
    <div>
      <Navbar />
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-6">Our Services</h1>
        <ul className="max-w-3xl mx-auto text-left space-y-6 text-gray-700">
          <li>🌱 UCO Collection & Recycling</li>
          <li>⚡ Ecofuel Production (Biodiesel & Alternatives)</li>
          <li>🔬 R&D and Sustainable Product Innovation</li>
          <li>🤝 Partnerships with Government & Industry</li>
        </ul>
      </section>
    </div>
  );
}
