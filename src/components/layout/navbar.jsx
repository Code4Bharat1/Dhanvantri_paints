"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Using Lucide icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Dhanvantri Paints Logo" width={200} height={150} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-gray-800">
          <li className="text-green-600 font-bold cursor-pointer">Home</li>
          <li className="hover:text-gray-500 cursor-pointer">About</li>
          <li className="hover:text-gray-500 cursor-pointer">Services</li>
          <li className="hover:text-gray-500 cursor-pointer">Gallery</li>
          <li className="hover:text-gray-500 cursor-pointer">Testimonial</li>
          <li className="hover:text-gray-500 cursor-pointer">Contact Us</li>
        </ul>

        {/* Button */}
        <button className="hidden md:block bg-orange-400 text-white py-2 px-6 rounded-full font-medium hover:bg-orange-500">
          Book a free visit
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 w-full shadow-lg">
          <ul className="flex flex-col space-y-4 text-lg font-medium text-gray-800 text-center py-4">
            <li className="text-green-600 font-bold">Home</li>
            <li className="hover:text-gray-500 cursor-pointer">About</li>
            <li className="hover:text-gray-500 cursor-pointer">Services</li>
            <li className="hover:text-gray-500 cursor-pointer">Gallery</li>
            <li className="hover:text-gray-500 cursor-pointer">Testimonial</li>
            <li className="hover:text-gray-500 cursor-pointer">Contact Us</li>
            <li>
              <button className="bg-orange-400 text-white py-2 px-6 rounded-full font-medium w-full">
                Book a free visit
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
