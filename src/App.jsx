import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CoursesSection from "./components/CoursesSection";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Nav />
      <main>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}
