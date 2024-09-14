// components/AboutSection.js
import work from "../assets/work.jpg";

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-purple-700">ABOUT US</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              accusantium sapiente quaerat? Delectus nulla nostrum fugiat minus
              libero animi, autem temporibus inventore. A porro, delectus
              commodi veritatis eos recusandae totam facere deleniti odio
              possimus modi in sapiente beatae consequuntur. Aspernatur rerum
              nisi fugiat deserunt, repellat veritatis voluptate deleniti
              doloremque minima! Exercitationem blanditiis impedit pariatur nemo
              facilis repudiandae sequi nam a ducimus animi magnam rerum iusto
              velit voluptas, quaerat temporibus provident assumenda. Laudantium!        
            </p>
            <button className="bg-purple-700 text-white px-6 py-2 rounded">
              READ MORE
            </button>
          </div>
          <div className="md:w-1/3">
            <img src={work} alt="work image" />
          </div>
        </div>
      </div>
    </section>
  );
}
