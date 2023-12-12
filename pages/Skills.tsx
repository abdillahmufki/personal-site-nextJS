import React from "react";
import Accordion from "@/components/Accordion";

const Skills = () => {
  return (
    <section id="skills">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-4xl font-semibold text-gray-20 dark:text-white">
          SKILLS
        </h1>
        <p className="text-gray-20 dark:text-white text-sm">
          My technical level
        </p>
      </div>
      <Accordion />
    </section>
  );
};

export default Skills;
