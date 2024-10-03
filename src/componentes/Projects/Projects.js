import React, { useEffect, useState } from "react";
import "./Projects.scss"; // Create a separate SCSS file for Project styling
import ProjectsUl from "../ProjectsUl/ProjectsUl";
import ProjectsDetails from "../ProjectsDetails/ProjectsDetails";
import { projects, dropDown } from "../../apiData/data";
const Project = () => {
  const [capstone, setCapstone] = useState([]);
  const [, setGoogleFit] = useState([]);
  const [projectDetails, setProjectDetails] = useState([] || null);
  const [projectList, setProjectList] = useState([] || null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setCapstone(projects[0].capstone);
    setGoogleFit(projects[1].googleFit);
    setProjectList(projects);
    console.log(projectList);
  }, []);

  function openProject(selectedId) {
    const selectedProject = projects.find((proj) => proj.id === selectedId);
    console.log(selectedProject);
    setProjectDetails(selectedProject);
    console.log(projectDetails);
    setOpen(true);
  }
  function close(params) {
    if (open === true) {
      setOpen(false);
    }
  }
  return (
    <section className="project">
      <h1 className="project__title">Projects </h1>

      {!open ? (
        <ProjectsUl
          project={projectList}
          open={open}
          openProject={openProject}
          dropDown={dropDown}
        />
      ) : (
        projectDetails && (
          <>
            <ProjectsDetails
              details={projectDetails}
              open={open}
              closeProject={close}
              dropDown={dropDown}
            />
          </>
        )
      )}
    </section>
  );
};

export default Project;
