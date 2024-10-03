function ProjectsUl({ project, open, openProject, dropDown }) {
  return project?.map((data) => (
    <ul key={data.id} className="project__ul">
      <li className="project__ul--li">
        <h2 className="project__title">
          {data?.projectTitle}{" "}
          {!open ? (
            <img
              onClick={() => {
                openProject(data?.id);
                console.log(data?.id);
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
          {data?.images && (
            <img
              className="project__image"
              src={data?.images[0]}
              alt={`Project ${data.projectTitle} Image 2`}
            />
          )}
        </div>
      </li>
    </ul>
  ));
}

export default ProjectsUl;
/**function ProjectsUl({ project, open, openProject, dropDown }) {
  return project?.map((data, index, id) => (
    <ul key={index} className="project__ul">
      <li className="project__ul--li">
        <h2 className="project__title">
          {data.projectTitle}{" "}
          {!open ? (
            <img
              onClick={() => {
                openProject(data.id);
                console.log(data.id);
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
          {data?.images && (
            <img
              className="project__image"
              src={data.images[0]}
              alt={`Project ${data.projectTitle} Image 2`}
            />
          )}
        </div>
      </li>
    </ul>
  ));
}

export default ProjectsUl; */
