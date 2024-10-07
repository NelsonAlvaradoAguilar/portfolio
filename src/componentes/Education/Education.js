import { useEffect, useState } from "react";
import "./Education.scss";
import { educationData, educationDataList } from "../../apiData/data.js";

import { Link, useNavigate, useParams } from "react-router-dom";
import Institution from "../Institutions/Institutions.js";
function Education() {
  // const [selected, SetSelected] = useState(null);
  const [details, setDetails] = useState(null || false);
  const [titles, setTitles] = useState([]);
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);

  const navegate = useNavigate();

  useEffect(() => {
    
    setData(educationData);
    setTitles(educationDataList);
  }, []);

  const handleSelect = (selectedId) => {
    const selectedEducation = data.find(
      (institution) => institution.id === selectedId
    );

    setDetails(selectedEducation);

    setId(selectedEducation.id);
    console.log(details.id);
    console.log(selectedEducation);
    return details;
  };

  return (
    <section className="education">
      <h1 className="education__title">Education Process</h1>

      <ul
        className={`education__subcontainer ${
          details
            ? "education__activeted education__subcontainer--subtitles"
            : ""
        }`}
      >
        {titles?.map((title, index) => (
          <li
            key={title.id}
            onClick={() => {
              handleSelect(title.id);
              setId(title.id);
            }}
            className={`education__subtitle ${
              details?.id === title.id ? " education__subtitle--active" : ""
            }`}
          >
            <h3>{title.title}</h3>
          </li>
        ))}
      </ul>

      {details ? (
        <Institution
          institution={details}
          open={details}
          id={id}
          setDetails={setDetails}
        />
      ) : (
        ""
      )}
    </section>
  );
}

export default Education;
/** {details?.id === title.id ? (
              <Institution
                institution={details}
                open={details}
                id={id}
                setDetails={setDetails}
              />
            ) : (
              ""
            )} */
