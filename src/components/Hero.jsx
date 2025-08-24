import React from "react";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex justify-center items-center bg-white">
      <div className="bg-gray-100 w-full max-w-6xl p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6 h-[500px] md:h-[400px] lg:h-[450px] transition-transform duration-500 hover:scale-101 shadow-xl lg:px-16 py-">


        {/* Left Side (Text) */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Hi, It's Me <br />
            <span className="text-gray-900">Ali Abbas</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mt-2 text-gray-700">
            Front-End Developer
          </h2>
          <p className="text-gray-600 mt-4">
            Passionate about building web applications with modern technologies.
          </p>
          <a
            href="https://drive.google.com/file/d/17MMNjwXNYK0e0XXowA3VnfTgDjYBhRlc/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-6 px-6 py-3 bg-gray-800 text-white font-bold rounded-full shadow-md hover:bg-gray-900 transition">
              Download CV
            </button>
          </a>
        </div>

        <div className="relative flex-1 flex justify-center">
  <div className="w-40 h-40 md:w-40 md:h-40 lg:w-65 lg:h-65 rounded-full p-1 bg-gradient-to-tr from-black-900 via-red-800 to-gray-900 shadow-lg ">
    <img
      src="/images/my.jpg"
      alt="Ali Abbas"
      className="w-full h-full object-cover rounded-full border-4 border-white"
    />
  </div>
</div>




      </div>
    </section>
  );
};

export default Hero;
