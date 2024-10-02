import React, { useEffect, useState } from "react";
import "./Projects.scss"; // Create a separate SCSS file for Project styling

import { projects, dropDown } from "../../apiData/data";
const Project = () => {
  const [project, setProject] = useState([]);
  const [googleFit, setGoogleFit] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setProject(projects[0].capstone);
    setGoogleFit(projects[1].googleFit);
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
    <section className="project">
      <h1
        className="project__title"
        onClick={() => {
          openProject();
        }}
      >
        Projects{" "}
      </h1>

      {!open
        ? project?.map((capstone, index) => (
            <ul key={index} className="project__ul">
              <li className="project__ul--li">
                <h2 className="project__title">
                  {capstone.projectTitle}{" "}
                  {!open ? (
                    <img
                      onClick={() => {
                        openProject();
                      }}
                      className={`project__dropdown ${
                        open ? "project__dropdown--down" : ""
                      }`}
                      src={dropDown}
                    ></img>
                  ) : (
                    ""
                  )}
                </h2>
              </li>
              <li>
                <div className="project__images">
                  {capstone?.images[1] && (
                    <img
                      className="project__image"
                      src={capstone.images[4]}
                      alt={`Project ${capstone.projectTitle} Image 2`}
                    />
                  )}
                </div>
              </li>
            </ul>
          ))
        : null}
      {!open
        ? googleFit?.map((googleFit, index) => (
            <ul key={index} className="project__ul">
              <li className="project__ul--li">
                <h2 className="project__title">{googleFit.projectTitle}</h2>
              </li>
              <li>
                <div className="project__images">
                  {googleFit?.images[0] && (
                    <img
                      className="project__image"
                      src={googleFit.images[0]}
                      alt={`Project ${googleFit.projectTitle} Image 2`}
                    />
                  )}
                </div>
              </li>
            </ul>
          ))
        : null}

      {open
        ? project?.map((capstone, index) => (
            <ul key={index} className="project__ul">
              <li className="project__ul--li">
                <h2 className="project__title">{capstone.projectTitle}</h2>
                <p className="project__description">{capstone.description}</p>
              </li>
              <li>
                <div className="project__images">
                  {capstone?.images?.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      className="project__image"
                      src={image}
                      alt={`Project ${capstone.projectTitle} Image ${imgIndex}`}
                    />
                  ))}
                </div>
              </li>
            </ul>
          ))
        : null}
      {open ? (
        <img
          onClick={() => {
            openProject();
          }}
          className={`project__dropdown ${
            open ? "project__dropdown--down" : ""
          }`}
          src={dropDown}
        ></img>
      ) : (
        ""
      )}
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
