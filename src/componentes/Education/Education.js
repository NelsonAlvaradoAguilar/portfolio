import { useEffect, useState } from "react";
import "./Education.scss";
import { educationData, educationDataList } from "../../apiData/data.js";

import { Link, useNavigate, useParams } from "react-router-dom";
import Institution from "../Institutions/Institutions.js";
function Education() {
  const [selected, SetSelected] = useState(null);
  const [details, setDetails] = useState([] || true);
  const [titles, setTitles] = useState([]);
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);

  const navegate = useNavigate();
  useEffect(() => {
    setTitles(educationDataList);
    setData(educationData);
  }, []);

  const handleSelect = (selectedId) => {
    const selectedEducation = data.find(
      (institution) => institution.id === selectedId
    );

    console.log(selectedEducation);
    setDetails(selectedEducation);
    SetSelected(selectedEducation);
    // setId(selectedEducation.id);
    console.log(details.id);

    return selectedEducation;
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
        {titles?.map((titles, id, index) => {
          console.log(titles, id);
          return (
            <li
              key={titles.id}
              onClick={() => {
                handleSelect(titles?.id);
                setId(titles.id);
              }}
              className={`education__subtitle ${
                selected?.id === titles.id ? " education__subtitle--active" : ""
              }`}
            >
              {titles.title}
            </li>
          );
        })}
      </ul>
      {selected && (
        <Institution
          institution={selected}
          open={details}
          id={id}
          SetSelected={SetSelected}
        />
      )}
    </section>
  );
}

export default Education;
