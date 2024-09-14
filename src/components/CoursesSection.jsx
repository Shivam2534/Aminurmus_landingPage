import { useState } from "react";

// components/CoursesSection.js
export default function CoursesSection() {
  const [toggleStatus, settoggleStatus] = useState("hidden");
  const courses = [
    "JAVA",
    "REACT",
    "JAVASCRIPT",
    "MONGODB",
    "Next.js",
    "Backend dev",
  ];

  function SoMoreCourses() {
    if (toggleStatus == "hidden") {
      settoggleStatus("block");
    } else {
      settoggleStatus("hidden");
    }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-purple-700">COURSES</h2>
          <a
            className="text-purple-700 hover:underline"
            onClick={SoMoreCourses}
          >
            MORE
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-lg p-8 text-center ${
                index > 3 ? toggleStatus : "block"
              }`}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">{course[0]}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{course}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
