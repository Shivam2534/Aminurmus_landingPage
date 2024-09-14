// components/NavBar.js
import logo from "../assets/logo.png";

export default function Nav() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center ">
          <div className="w-16 h-16">
          <img src={logo} alt="logo" className="w-full h-full object-cover" />
          </div>
          <span className="ml-2 text-sm sm:text-xl font-semibold">
            AMINURMUS TECHNOLOGY
          </span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            COURSES
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            INTERNSHIP
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            ABOUT US
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            CONTACT
          </a>
        </nav>
        <button className=" bg-blue-800 w-20 sm:w-auto text-white text-sm sm:text-xl px-2 py-1 sm:px-4 sm:py-2 rounded">
          SIGN UP
        </button>
      </div>
    </header>
  );
}
