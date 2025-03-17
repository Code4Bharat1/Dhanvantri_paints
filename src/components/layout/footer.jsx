"use client";

import Image from "next/image";
import { FaInstagram, FaPinterest, FaYoutube, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#5a4cbb] text-white py-10">
      <div className="container mx-auto px-6 md:px-10">
        {/* Top White Line */}
        <div className="border-t border-white mb-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left py-6">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start mt-5">
            <Image src="/footer.png" alt="Dhanvantri Paints Logo" width={200} height={150} />
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              <li>Interior Painting</li>
              <li>Exterior Painting</li>
              <li>Water Proofing</li>
              <li>Repairing Painting</li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <FaPhoneAlt />
                <span>+14 5464 8272</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <FaEnvelope />
                <span>rona@domain.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <FaMapMarkerAlt />
                <span>George Tower 192, Burn Swiss</span>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Social Media</h3>
            <div className="flex justify-center md:justify-start space-x-4 text-lg">
              <a href="#" className="hover:text-gray-300">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaPinterest />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom White Line */}
        <div className="border-t border-white mt-6"></div>

        {/* Footer Bottom Text */}
        <div className="text-center text-sm mt-3">
          © 2023 rona@domain.com, all rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
