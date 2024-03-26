// import { motion } from "framer-motion";
import img from "../assets/farm.jpeg"
const Banner = () => {
  return (
    <section className="relative w-full my-24" id="home">
      <div id="#about" className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 py-5 md:py-5">
        <div className="relative  lg:col-span-5 lg:-ml-8 xl:col-span-6 flex items-center justify-center">
          <img className="h-full w-full object-fill rounded-lg" src={img} alt="about us" />
        </div>

        <div className="flex flex-col justify-center px-4 py-12 md:py-10 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-10 xl:col-span-6">
          <h1 className="mt-4 text-2xl font-bold tracking-tight  lg:text-4xl">
            Welcome to SaniASSIST
          </h1>
          <p className="mt-8 text-xl text-justify">
          Assisting farmers in sanitation involves several steps aimed at promoting clean and hygienic practices on farms to ensure the safety of food products and the well-being of farm workers.
          </p>
          <ul className="mt-8 list-disc list-inside">
            <li>Education and Training: Informative resources, practical workshops.</li>
            <li>Guidelines and Regulations: Compliance assistance, regulatory updates.</li>
            <li>Sanitation Plans: Customized protocols, hygiene blueprints.</li>
            <li>Monitoring and Compliance: Regular inspections, adherence checks.</li>
            <li>Each company has a dedicated page with a detailed description</li>
          </ul>
          <p className="mt-8 text-lg ">
            Join us on this journey of growth and success. Together, we can make
            a difference.
          </p>
        </div>
      </div>
    </section>
    // </motion.div>
  );
};

export default Banner;