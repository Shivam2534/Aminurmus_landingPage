// components/Footer.js
export default function Footer() {
  return (
    <footer
      className=" text-white py-12"
      style={{
        background:
          "linear-gradient(135deg, #2b1c3f 0%, #40285A 50%, #563b7a 100%)",
      }}
    >
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-600 transform -skew-x-12"></div>
              <span className="ml-2 text-xl font-semibold">
                AMINURMUS TECHNOLOGY
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Lorem ipsum has been the industrys standard dummy text...
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    COURSES
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    TERMS & CONDITION
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    PRIVACY POLICY
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          2024, ALL RIGHTS RESERVED | CREATED BY Shivam kanchole
        </div>
      </div>
    </footer>
  );
}
