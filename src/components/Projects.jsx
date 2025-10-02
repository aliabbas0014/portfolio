import React from "react";
import { FaShoppingCart, FaBriefcase, FaKeyboard, FaQuestionCircle, FaCode, FaWrench, FaTshirt } from "react-icons/fa";

const projects = [
   {
    title: "MSGM Clothing Brand",
    description: "A fully functional clothing e-commerce website with authentication, product catalog, cart, and checkout system.",
    icon: <FaTshirt size={40} className="text-gray-700" />,
    link: "https://msgmclothing.infinityfreeapp.com/?i=2",
  },
  {
    title: "Sneakers Website",
    description: "A modern e-commerce website for sneakers.",
    icon: <FaShoppingCart size={40} className="text-gray-700" />,
    link: "https://aliabbas0014.github.io/sneakers-website/",
  },
  {
    title: "Job Listing App",
    description: "An interactive platform for job searching.",
    icon: <FaBriefcase size={40} className="text-gray-700" />,
    link: "https://aliabbas0014.github.io/job-listing-app/",
  },
  {
    title: "Typing Software",
    description: "Practice your typing skills with real-time feedback.",
    icon: <FaKeyboard size={40} className="text-gray-700" />,
    link: "https://aliabbas0014.github.io/typing-software/",
  },
  {
    title: "Quiz App",
    description: "An engaging quiz application for learning.",
    icon: <FaQuestionCircle size={40} className="text-gray-700" />,
    link: "https://aliabbas0014.github.io/quizApp/",
  },
  {
    title: "Coming Soon",
    description: "Stay tuned for more amazing projects.",
    icon: <FaWrench size={40} className="text-gray-700" />,
    link: "#",
  },
];


const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-2xl shadow-md flex flex-col items-center transition-transform transform hover:scale-105">
              {project.icon}
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-600 mt-2 text-center">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-2 bg-gray-800 text-white font-bold rounded-full shadow-md hover:bg-gray-900 transition"
              >
                {project.link === "#" ? "Coming Soon" : "View Project"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
