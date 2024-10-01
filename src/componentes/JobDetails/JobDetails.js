import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import { useNavigate } from "react-router-dom";

function JobDetails({ job, setShowDetails }) {
  function handelClose(params) {
    setShowDetails(false);
  }
  return (
    <div
      onClick={() => {
        handelClose();
      }}
      className="job-details"
    >
      <p className="job-details__company">
        {job?.company}, {job?.location}
      </p>
      <p className="job-details__dates">
        {job?.startDate} - {job?.endDate}
      </p>
      <ul className="job-details__responsibilities">
        {job.responsibilities?.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
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
