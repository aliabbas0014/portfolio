// Education.jsx
import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 bg-white flex justify-center items-center"
    >
      <div className="max-w-6xl px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">
          Education
        </h2>

        <div className="space-y-6">
          {/* BS Software Engineering */}
          <div className="bg-gray-100 p-6 rounded-3xl shadow-md transform transition duration-500 ease-in-out hover:scale-101 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800">
              BS Software Engineering
            </h3>
            <p className="text-gray-600">
              Virtual University of Pakistan | 2022 – Present
            </p>
            <p className="text-gray-700 mt-2">7th Semester | CGPA: 3.34</p>
          </div>

          {/* Intermediate */}
          <div className="bg-gray-100 p-6 rounded-3xl shadow-md transform transition duration-500 ease-in-out hover:scale-101 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800">
              Intermediate (ICS)
            </h3>
            <p className="text-gray-600">2018 – 2021</p>
            <p className="text-gray-700 mt-2">Achieved 85%</p>
          </div>

          {/* Matriculation */}
          <div className="bg-gray-100 p-6 rounded-3xl shadow-md transform transition duration-500 ease-in-out hover:scale-101 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800">
              Matriculation
            </h3>
            <p className="text-gray-600">2016 – 2018</p>
            <p className="text-gray-700 mt-2">Achieved 73%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
