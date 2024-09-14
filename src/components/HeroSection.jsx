// components/HeroSection.js
import main_pic from "../assets/main_pic.jpg";

export default function HeroSection() {
  return (
    <section className="relative bg-red-400 sm:bg-blue-400 md:bg-green-500">
      <img src={main_pic} alt="main office" className="aspect-[16/9]" />
      <div className="absolute inset-0 flex flex-col justify-center items-center sm:mb-52">
        <h1
          className="text-xl md:text-5xl font-bold mb-4 text-center "
          style={{
            background:
              "linear-gradient(135deg, #2b1c3f 0%, #40285A 50%, #563b7a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          EMPOWERING <span className="">YOUR SKILL</span> WITH INDUSTRY EXPERT
        </h1>
        <div className="space-x-8 sm:mt-8">
          <button className="bg-blue-800 text-white text-sm sm:text-xl px-3 sm:px-6 py-1 sm:py-2 rounded">
            LOG IN
          </button>
          <button className=" bg-blue-800 text-white text-sm sm:text-xl px-3 sm:px-6 py-1 sm:py-2 rounded">
            EXPLORE
          </button>
        </div>
      </div>
    </section>
  );
}
