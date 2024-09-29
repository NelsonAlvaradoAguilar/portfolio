import { useEffect, useState } from "react";
import "./Education.scss";
import { educationData, educationDataList } from "../../apiData/data.js";

import { Link, useNavigate, useParams } from "react-router-dom";
import Institution from "../Institutions/Institutions.js";
function Education() {
  const [selected, SetSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  //  const [achivement, setAchivement] = useState();

  const navegate = useNavigate();
  // const data = educationData;

  console.log(id);

  const handleSelect = (selectedId) => {
    if (!selectedId) return;
    const selectedEducation = educationData.find(
      (institution) => institution.id === selectedId
    );
    if (selectedEducation) {
      SetSelected(selectedEducation);
      setOpen(true);
      setId(selectedEducation.id);
    }
    console.log(selectedEducation);

    console.log(selectedEducation.id);
  };

  return (
    <section className="education">
      <h1 className="education__title">Education Process</h1>

      <ul
        className={`education__subcontainer ${
          selected
            ? "education__activeted education__subcontainer--subtitles"
            : ""
        }`}
      >
        {educationDataList?.map((titles, id, index) => {
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
          open={open}
          id={id}
          SetSelected={SetSelected}
        />
      )}
    </section>
  );
}

export default Education;
