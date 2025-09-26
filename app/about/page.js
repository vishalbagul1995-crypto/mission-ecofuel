import Navbar from "../components/Navbar.jsx";

export default function About() {
  return (
    <div>
      <Navbar />
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-6">About Us</h1>
        <p className="max-w-2xl mx-auto text-gray-700">
          Mission Ecofuel is committed to building a sustainable future by
          converting Used Cooking Oil (UCO) into clean energy solutions. Our
          mission is to protect public health, reduce carbon emissions, and
          support India’s biofuel initiatives.
        </p>
      </section>
    </div>
  );
}
