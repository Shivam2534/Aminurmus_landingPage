import { useState } from "react";

// components/CoursesSection.js
export default function Testimonial() {
  const [toggleStatus, settoggleStatus] = useState("hidden");
  const courses = [
    {
      img: "https://media.istockphoto.com/id/1345853454/photo/happy-successful-businessman-or-company-employee-standing-in-office-looking-at-camera.jpg?s=2048x2048&w=is&k=20&c=5YD-FhkP7JrsL7DYkdLX_RZeh6IE1dRNUFiLCxwhlGQ=",
      name: "Shivam",
      description:
        "Shivam has been an incredible asset to our team, not just because of his technical expertise.",
    },
    {
      img: "https://media.istockphoto.com/id/1345853454/photo/happy-successful-businessman-or-company-employee-standing-in-office-looking-at-camera.jpg?s=2048x2048&w=is&k=20&c=5YD-FhkP7JrsL7DYkdLX_RZeh6IE1dRNUFiLCxwhlGQ=",
      name: "Shivam",
      description:
        "Shivam has been an incredible asset to our team, not just because of his technical expertise.",
    },
    {
      img: "https://media.istockphoto.com/id/1345853454/photo/happy-successful-businessman-or-company-employee-standing-in-office-looking-at-camera.jpg?s=2048x2048&w=is&k=20&c=5YD-FhkP7JrsL7DYkdLX_RZeh6IE1dRNUFiLCxwhlGQ=",
      name: "Shivam",
      description:
        "Shivam has been an incredible asset to our team, not just because of his technical expertise.",
    },
    {
      img: "https://media.istockphoto.com/id/1345853454/photo/happy-successful-businessman-or-company-employee-standing-in-office-looking-at-camera.jpg?s=2048x2048&w=is&k=20&c=5YD-FhkP7JrsL7DYkdLX_RZeh6IE1dRNUFiLCxwhlGQ=",
      name: "Shivam",
      description:
        "Shivam has been an incredible asset to our team, not just because of his technical expertise.",
    },
    {
      img: "https://media.istockphoto.com/id/1345853454/photo/happy-successful-businessman-or-company-employee-standing-in-office-looking-at-camera.jpg?s=2048x2048&w=is&k=20&c=5YD-FhkP7JrsL7DYkdLX_RZeh6IE1dRNUFiLCxwhlGQ=",
      name: "Shivam",
      description:
        "Shivam has been an incredible asset to our team, not just because of his technical expertise.",
    },
    {
      img: "https://media.istockphoto.com/id/1345853454/photo/happy-successful-businessman-or-company-employee-standing-in-office-looking-at-camera.jpg?s=2048x2048&w=is&k=20&c=5YD-FhkP7JrsL7DYkdLX_RZeh6IE1dRNUFiLCxwhlGQ=",
      name: "Shivam",
      description:
        "Shivam has been an incredible asset to our team, not just because of his technical expertise.",
    },
  ];

  function SoMoreCourses() {
    if (toggleStatus == "hidden") {
      settoggleStatus("block");
    } else {
      settoggleStatus("hidden");
    }
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-purple-700">TESTIMONIAL</h2>
          <a
            className="text-purple-700 hover:underline cursor-pointer"
            onClick={SoMoreCourses}
          >
            {toggleStatus === "hidden" ? "SHOW MORE" : "SHOW LESS"}
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105 ${
                index > 3 ? toggleStatus : "block"
              }`}
              style={{
                background: "linear-gradient(135deg, #742E77 0%, #9b2c9e 100%)",
              }}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ">
                <img
                  src={course.img}
                  alt={course.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white flex justify-center">
                {course.name}
              </h3>
              <p className="text-white mt-2 text-center">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
