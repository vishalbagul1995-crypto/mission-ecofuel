"use client";

export default function Contact() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
        Contact Mission Ecofuel 🌱
      </h1>
      <p className="text-gray-700 text-center max-w-xl mb-12">
        Have questions or want to collaborate with us?  
        We'd love to hear from you! Reach out using the details below or send us a message.
      </p>

      {/* Contact Info */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center border border-green-200">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Mission Ecofuel
        </h2>
        <p className="text-gray-600 mb-2">
          <strong>Phone:</strong> <a href="tel:+917715931908" className="text-green-600 hover:underline">+91 7715931908</a>
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Email:</strong> <a href="mailto:info@missionecofuel.org" className="text-green-600 hover:underline">info@missionecofuel.org</a>
        </p>
        <p className="text-gray-600">
          <strong>Address:</strong> Coming soon...
        </p>
      </div>

      {/* Message Form */}
      <div className="mt-12 w-full max-w-lg bg-white shadow-md rounded-lg p-8 border border-green-200">
        <h3 className="text-2xl font-semibold text-green-700 mb-4 text-center">
          Send Us a Message
        </h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
