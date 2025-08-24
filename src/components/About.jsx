import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white flex justify-center items-center">
      <div className="max-w-6xl px-6 md:px-12 lg:px-20 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
        
        {/* Introduction */}
        <p className="text-lg text-gray-700 leading-relaxed">
          I'm a self-taught <span className="font-semibold">Full-Stack Developer</span> with <span className="font-semibold">1.5 years</span> of coding experience. I started with front-end technologies and now I'm exploring back-end development to become a proficient MERN stack developer.
        </p>
        
        {/* Skills */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800">Tech Stack</h3>
          <p className="text-gray-700 mt-2">HTML, CSS, JavaScript, React, Tailwind, Bootstrap, Node.js, Express, MongoDB</p>
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
