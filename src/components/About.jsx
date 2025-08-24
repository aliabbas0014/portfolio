import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white flex justify-center items-center">
      <div className="max-w-6xl px-6 md:px-12 lg:px-20 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>

        {/* About Me */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800">About Me</h3>
          <p className="text-gray-700 mt-2">
            I'm a <span className="font-medium">Full-Stack Developer</span> with 2 years of coding experience.
            I specialize in building scalable and user-friendly web applications using modern technologies across both
            front-end and back-end. My focus is on creating efficient solutions with the <span className="font-medium">MERN stack</span>.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800">Tech Stack</h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Front-End:</span> HTML, CSS, JavaScript, React, Tailwind, Bootstrap
            </li>
            <li>
              <span className="font-medium">Back-End:</span> Node.js, Express, MongoDB, PHP, MySQL
            </li>
            <li>
              <span className="font-medium">Tools:</span> Git, GitHub, VS Code, Xampp
            </li>
          </ul>
        </div>


        {/* Personal Interests */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800">Beyond Coding</h3>
          <p className="text-gray-700 mt-2">I enjoy exploring social media, watching personal branding and tech-related videos, and gaining knowledge about religion.</p>
        </div>

        {/* Call to Action */}
        <div className="mt-8">

          <button
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 bg-gray-800 text-white font-bold rounded-full shadow-md hover:bg-gray-900 transition">
            Let's Collaborate
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
