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
  );
}
