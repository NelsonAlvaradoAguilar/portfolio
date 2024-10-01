import React, { useEffect, useState } from "react";
import "./Projects.scss"; // Create a separate SCSS file for Project styling
import { projects } from "../../apiData/data";
const Project = () => {
  const [project, setProject] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setProject(projects[0].capstone);
    console.log(project);
  }, []);
  function openProject(params) {
    setOpen(true);
    if (open) {
      setOpen(false);
    }
    console.log(open);
  }
  return (
    <section>
      <h1
        onClick={() => {
          openProject();
        }}
      >
        Capstone
      </h1>
      {open
        ? project?.map((capstone, index) => (
            <ul key={index} className="project">
              <li>
                <h2 className="project__title">{capstone.projectTitle}</h2>
                <p className="project__description">{capstone.description}</p>
                <div className="project__images">
                  {capstone?.images?.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      className="project__image"
                      src={image}
                      alt={`Project ${capstone.projectTitle} Image ${
                        imgIndex + 1
                      }`}
                    />
                  ))}
                </div>
              </li>
            </ul>
          ))
        : null}
    </section>
  );
};

export default Project;
/**  {project.map((image, index) => (
            <img
              key={index}
              className="project__image"
              src={image}
              alt={`Project ${project.projectTitle} Image ${index + 1}`}
            />
          ))} */
