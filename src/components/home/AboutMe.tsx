"use client";
import * as React from "react";
import { motion } from "framer-motion";

const AboutMe: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">
          LET ME <span className="text-[#CBACF9]">INTRODUCE</span> MYSELF
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Hello! I'm Nazim, a web developer passionate about creating impactful
          digital experiences. My journey began in{" "}
          <span className="text-[#CBACF9]">2020</span>, learning{" "}
          <span className="text-[#CBACF9]">HTML</span>,{" "}
          <span className="text-[#CBACF9]">CSS</span>, and{" "}
          <span className="text-[#CBACF9]">JavaScript</span> through customizing
          websites, and it's grown into a love for building accessible, inclusive
          products.
          <br />
          <br />
          Today, I specialize in full-stack development with{" "}
          <span className="text-[#CBACF9]">Node.js</span>,{" "}
          <span className="text-[#CBACF9]">React</span>, and REST APIs. My
          toolkit includes modern frameworks like{" "}
          <span className="text-[#CBACF9]">Next.js</span>,{" "}
          <span className="text-[#CBACF9]">Redux</span>, and{" "}
          <span className="text-[#CBACF9]">Ant Design</span>, along with{" "}
          <span className="text-[#CBACF9]">TypeScript</span>,{" "}
          <span className="text-[#CBACF9]">PostgreSQL</span>, and{" "}
          <span className="text-[#CBACF9]">Mongoose</span>. I focus on delivering
          efficient, scalable solutions with great user experiences, and I’m
          always eager to learn and evolve with the latest web technologies.
        </p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white dark:bg-red-500 dark:text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-blue-700 dark:hover:bg-red-600 transition-colors duration-300"
        >
          Explore my work
        </motion.button>
      </motion.div>
    </section>
  );
};

export default AboutMe;
