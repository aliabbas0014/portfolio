// Experience.jsx
import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gray-100 flex justify-center items-center">
      <div className="max-w-6xl px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">
          Experience
        </h2>

        {/* MSGM – CLOTHING BRAND */}
        <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-lg transition mb-6">
          <h3 className="text-2xl font-semibold text-gray-800">MSGM – Clothing Brand</h3>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
            <li>Built a production-ready e-commerce platform in PHP/MySQL with authentication, product catalog, cart, and checkout.</li>
            <li>Adapted quickly from React.js/Node.js to PHP and delivered the project end-to-end.</li>
            <li>Designed database schema & ER diagrams and built a responsive UI with HTML, CSS, and Bootstrap.</li>
            <li>Gained hands-on experience with XAMPP/PhpMyAdmin, debugging real-world issues, and optimizing performance.</li>
          </ul>
        </div>

        {/* Additional Experience */}
        <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-gray-800">Additional Experience</h3>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
            <li>Delivered multiple academic and personal projects with focus on scalability, usability, and timely completion.</li>
            <li>Collaborated with peers to debug and adapt to new technologies.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
