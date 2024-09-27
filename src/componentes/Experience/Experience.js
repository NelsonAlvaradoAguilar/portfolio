import { useEffect, useState } from "react";
import { workExperience, workExperienceTitles } from "../../apiData/data";
import JobDetails from "../JobDetails/JobDetails";
import { useNavigate } from "react-router-dom";
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
  };
  function close(params) {
    setShowDetails(false);
  }
  return (
    <>
      <h1>Experience</h1>
      <ul>
        {titles?.map((subtitles, id) => (
          <li
            onClick={() => {
              handleSelect(subtitles.id);
            }}
            key={subtitles.id}
          >
            <h3>{subtitles.title}</h3>
            {subtitles.id === showDetails.id ? (
              <JobDetails job={showDetails} setShowDetails={setShowDetails} />
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
    </>
  );
}

export default WorkExperience;
