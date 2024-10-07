import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import { useNavigate } from "react-router-dom";
import "./JobDetails.scss"
function JobDetails({ job, closeJobDescription }) {
 
  return (
    <div className="job-details">
      <p className="job-details__text">
        {job?.company}, {job?.location}
      </p>
      <p className="job-details__text">
        {job?.startDate} - {job?.endDate}
      </p>
      <ul className="job-details__responsibilities">
        {job.responsibilities?.map((responsibility, index) => (
          <li className="job-details__text" key={index}>{responsibility}</li>
        ))}
      </ul>
      <button
        onClick={() => {
         closeJobDescription()
        }}
        className="job-details__closeBtn"
      >
        {"close"}{" "}
      </button>
    </div>
  );
}

export default JobDetails;
/**     <button
        onClick={() => {
          handelClose();
        }}
      >
        {"Close"}
      </button> */
