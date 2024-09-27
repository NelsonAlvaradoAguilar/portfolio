import { useNavigate } from "react-router-dom";

function JobDetails({ job, setShowDetails }) {
  function close(params) {
    setShowDetails(false);
  }
  return (
    <div className="job-details">
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
      <button
        onClick={() => {
          close();
        }}
      >
        {"Close"}
      </button>
    </div>
  );
}

export default JobDetails;
