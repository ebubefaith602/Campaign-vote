import React from "react";
import logo from "../assets/logo.jpg"; // place your uploaded logo inside /src/assets/ and rename to logo.jpg
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
          <span className="text-yellow-400 font-bold text-lg">Big Brother Naija</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-gray-300 hover:text-yellow-400 transition font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-yellow-400 transition font-medium"
          >
            About
          </Link>
          <Link
            to="/contestants"
            className="text-gray-300 hover:text-yellow-400 transition font-medium"
          >
            Contestants
          </Link>
          <Link
            to="/live"
            className="text-gray-300 hover:text-yellow-400 transition font-medium"
          >
            Live Show
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-yellow-400 transition font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-yellow-400 rounded-lg hover:bg-yellow-500 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 text-sm font-medium text-yellow-400 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
