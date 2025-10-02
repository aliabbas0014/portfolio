import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 flex justify-center items-center">
      <div className="max-w-4xl w-full p-8 bg-white rounded-3xl shadow-lg text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Me</h2>
        <p className="text-gray-600 mb-6">I'm always open to discussing new projects, collaborations, or just chatting about tech!</p>
        
        {/* Contact Info */}
        <div className="flex flex-col items-center space-y-4 mb-6">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-gray-700 text-xl" />
            <a href="mailto:aliabbas001472@gmail.com" className="text-gray-700 hover:text-gray-900">aliabbas001472@gmail.com</a>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-gray-700 text-xl" />
            <span className="text-gray-700">Sahiwal, Punjab, Pakistan</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://github.com/aliabbas0014" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 text-2xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ali-abbas-701984344" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 text-2xl">
            <FaLinkedin />
          </a>
        </div>

        {/* Contact Button */}
        <a href="https://www.linkedin.com/in/ali-abbas-701984344" target="_blank" rel="noopener noreferrer">
          <button className="px-6 py-3 bg-gray-800 text-white font-bold rounded-full shadow-md hover:bg-gray-900 transition">
            Let's Collaborate
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
