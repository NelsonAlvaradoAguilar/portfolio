import React from "react";
import { Link } from "react-router-dom";

function ProjectsDetails({ details, closeProject, open, dropDown }) {
  console.log(details);

  return (
    <ul className="project__ul">
      <li className="project__ul--li">
        <h2 className="project__title">{details?.projectTitle}</h2>
        <p className="project__description">{details?.description}</p>
      </li>
      <li>
        <div className="project__images">
          {details?.images?.map((image, imgIndex) => (
            <img
              key={imgIndex}
              className="project__image"
              src={image}
              alt={`Project ${details?.projectTitle} Image ${imgIndex}`}
            />
          ))}
        </div>
      </li>
      {details ? (
        <>
          <li>
            <div className="project__tech-stack">
              <h3>Tech Stack:</h3>
              <ul>
                {details?.techStack?.map((tech, techIndex) => (
                  <li key={techIndex} className="project__tech-item">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <Link to={`${details.link}`} target="_blank">
            {details.link}
          </Link>
          <li>
            {" "}
            <img
              onClick={closeProject}
              className={`project__dropdown ${
                open ? "project__dropdown--down" : ""
              }`}
              src={dropDown}
              alt="Close projects dropdown"
            />
          </li>
        </>
      ) : (
        ""
      )}
    </ul>
  );
}

export default ProjectsDetails;
/**    const selectedProject = projects.find(
      (position) => position.id === selectedId
    );
    console.log(selectedProject);
    setProject(selectedProject);
if (open) {
    setOpen(tr); */
