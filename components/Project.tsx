import React from "react";
import { PROJECT_DATA } from "@/constants";
import Image from "next/image";

const Project = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECT_DATA.map((project) => {
          return (
            <div className="card bordered shadow-lg" key={project.id}>
              <figure>
                <Image
                  width={500}
                  height={200}
                  src={project.src}
                  alt={project.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
