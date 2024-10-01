import { useEffect, useState } from "react";
import { workExperience, workExperienceTitles } from "../../apiData/data";
import JobDetails from "../JobDetails/JobDetails";
import { useNavigate } from "react-router-dom";
import "./Experience.scss";
function WorkExperience() {
  const [showDetails, setShowDetails] = useState([] || true);
  const [titles, setTitles] = useState([]);
  const [id, setId] = useState();
  const [open, setOpen] = useState(false);
  const navegate = useNavigate();

  useEffect(() => {
    setTitles(workExperienceTitles);
  }, []);
  console.log(titles);
  const handleSelect = (selectedId) => {
    const selectedDetails = workExperience.find(
      (position) => position.id === selectedId
    );
    console.log(selectedDetails);
    setShowDetails(selectedDetails);
    console.log(showDetails);
    setId(selectedDetails.id);
    setOpen(true);
  };
  function close(params) {
    setShowDetails(false);
  }
  return (
    <section className="experience">
      <h1>Experience</h1>
      <ul className="experience__container">
        {titles?.map((subtitles, id) => (
          <li
            className="experience__container "
            onClick={() => {
              handleSelect(subtitles.id);
            }}
            key={subtitles.id}
          >
            <h3 className=" experience__container--subtitles">
              {subtitles.title}
            </h3>
            {subtitles.id === showDetails.id ? (
              <div className=" experience__paragraph">
                {" "}
                <JobDetails job={showDetails} setShowDetails={setShowDetails} />
              </div>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          close();
        }}
      >
        {"Close"}
      </button>
    </section>
  );
}

export default WorkExperience;
