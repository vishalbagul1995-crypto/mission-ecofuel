import Navbar from "../components/Navbar.jsx";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <section className="py-20 px-6 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-6">Contact Us</h1>
        <p className="text-gray-700 mb-8">
          Have questions or want to collaborate? Reach out to us!
        </p>
        <div className="max-w-md mx-auto bg-white shadow-md p-6 rounded-lg">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border rounded-lg"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
