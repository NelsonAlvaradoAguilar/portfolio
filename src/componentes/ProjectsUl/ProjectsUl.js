import React from "react";
import './ProjectsUl.scss'
function ProjectsUl({ project, open, openProject, dropDown }) {
  return project?.map((data) => (
    <ul key={data.id} className="project-Ul" id="projects">
      <li onClick={() => {
              openProject(data?.id);
              console.log(data?.id);
            }} className=" project-Ul__list" >
        <h2  className="project-Ul__title">
          {data?.projectTitle}{" "}
         
        </h2>
        {data?.images && (
            <img  onClick={() => {
              openProject(data?.id);
              console.log(data?.id);
            }}
              className="project-Ul__images project-Ul__images--image"
              src={data?.images[0]}
              alt={`Project ${data.projectTitle} Image 2`}
            />
          )}
      </li>

    </ul>
  ));
}

export default ProjectsUl;

