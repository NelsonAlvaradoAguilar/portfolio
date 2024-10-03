import React, { useEffect, useState } from "react";
import "./Projects.scss"; // Create a separate SCSS file for Project styling
import ProjectsUl from "../ProjectsUl/ProjectsUl";
import ProjectsDetails from "../ProjectsDetails/ProjectsDetails";
import { projects, dropDown } from "../../apiData/data";
const Project = () => {
  const [project, setProject] = useState([] || null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setProject(projects);
    console.log(project);
  }, []);

  function openProject(selectedId) {
    const selectedProject = projects.find((proj) => proj.id === selectedId);
    console.log(selectedProject);
    setProject(selectedProject);
    console.log(project);

    console.log(open);
    setOpen(true);

    return project;
  }
  const close = () => {
    console.log("Closing project details"); // Add this log
    setOpen(false);
  };
  return (
    <section className="project">
      <h1
        className="project__title"
        onClick={(id) => {
          //  openProject(id);
        }}
      >
        Projects{" "}
      </h1>

      {project?.map((proj) => (
        <ProjectsUl
          key={proj.id}
          data={proj}
          open={open}
          openProject={openProject}
          dropDown={dropDown}
        />
      ))}

      {open ? (
        <>
          <ProjectsDetails details={project} setOpen={setOpen} />

          <img
            onClick={close}
            className={`project__dropdown ${
              open ? "project__dropdown--down" : ""
            }`}
            src={dropDown}
            alt="Close projects dropdown"
          />
        </>
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
          ))}  setOpen(true);
    if (open) {
      setOpen(false);
    }*/
