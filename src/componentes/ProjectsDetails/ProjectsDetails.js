import { useEffect, useState } from "react";

function ProjectsDetails({ details, setOpen, dropDown }) {
  console.log(details);
  const [content, setContent] = useState();

  useEffect(() => {
    setContent(details);
    console.log(content);
  }, []);

  const close = () => {
    console.log("Closing project details"); // Add this log
    setOpen(true);
  };
  return (
    <ul className="project__ul">
      <li className="project__ul--li">
        <h2 className="project__title" onClick={close}>
          {content?.projectTitle}
        </h2>
        <p className="project__description">{content?.description}</p>
      </li>
      <li>
        <div className="project__images">
          {content?.images?.map((image, imgIndex) => (
            <img
              key={imgIndex}
              className="project__image"
              src={image}
              alt={`Project ${content?.projectTitle} Image ${imgIndex}`}
            />
          ))}
        </div>
      </li>
      <li>
        <div className="project__tech-stack">
          <h3>Tech Stack:</h3>
          <ul>
            {content?.techStack?.map((tech, techIndex) => (
              <li key={techIndex} className="project__tech-item">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </li>
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
