import { useEffect, useState } from "react";
import { workExperience, workExperienceTitles } from "../../apiData/data";

function WorkExperience() {
  const [experience, setExperience] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  // Load the work experience data on component mount
  useEffect(() => {
    setExperience(workExperience);
  }, []);
  const open = () => {
    setShowDetails(!showDetails);
  };
  return (
    <>
      <h1>Experience</h1>
      <ul>
        {experience.map((job, index) => (
          <li key={index}>
            <h3>
              {job.position} | {job.company}
            </h3>
            <p>Location: {job.location}</p>

            {showDetails && (
              <div>
                <ul>
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
                <p>
                  Dates: {job.startDate} - {job.endDate}
                </p>
              </div>
            )}
            <button onClick={open}>
              {showDetails ? "Hide Details" : "Show Details"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default WorkExperience;
