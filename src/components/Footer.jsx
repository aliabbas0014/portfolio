import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center md:text-left">
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-6">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-semibold">Ali Abbas</h2>
            <p className="text-gray-400 mt-2">
              Passionate about coding and building awesome projects.
            </p>
          </div>

          <nav>
            <ul className="flex flex-col md:flex-row gap-4 py-5">
              <li><a href="#home" className="hover:text-gray-400">Home</a></li>
              <li><a href="#about" className="hover:text-gray-400">About</a></li>
              <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </nav>

          {/* Social Media Links */}
          <div className="flex gap-4 text-xl">
            <a href="https://github.com/aliabbas0014" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ali-abbas-701984344" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/share/1ESeFW1dnD/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/aliabbas001472/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-gray-400 text-sm text-center">
          © 2025 Ali Abbas. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
