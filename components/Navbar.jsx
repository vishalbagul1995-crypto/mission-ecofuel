"use client";
import Navbar from "../components/Navbar.jsx";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold">
            🌱 Mission Ecofuel
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-200">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-200">
                Contact
              </Link>
            </li>
          </ul>

          {/* Hamburger Button (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-2xl"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-green-700 px-4 py-3 space-y-2 text-center">
          <li>
            <Link
              href="/"
              className="block hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="block hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
