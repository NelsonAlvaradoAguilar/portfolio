import { useState } from "react";
import "./Education.scss";
import { educationData, educationDataList } from "../../apiData/data.js";
import { Link, useParams } from "react-router-dom";
import Institution from "../Institutions/Institutions.js";
function Education() {
  const [selected, SetSelected] = useState({});
  const [open, setOpen] = useState(false);
  // const { id } = useParams();
  const data = educationData;
  console.log(data);
  console.log();

  /* const select = (title) => {
    SetSelected(() => (title.id === selected.id ? "" : subtitle));
    console.log();
  };
  */ const handleSelect = (selectedId) => {
    const selectedEducation = educationData.find(
      (institution) => institution.id === selectedId
    );
    console.log(selectedEducation);
    SetSelected(selectedEducation);
    setOpen(true);
  };

  return (
    <section className="education">
      <h1 className="education__title">Education Process</h1>

      <ul className="education__subcontainer">
        {educationDataList?.map((titles) => {
          console.log(titles);

          return (
            <li
              key={titles.id}
              onClick={() => {
                handleSelect(titles.id);
              }}
              className={`education__subtitle ${
                selected.id === titles.id ? "education__subtitle--active" : ""
              }`}
            >
              <Link className="education__link"> {titles.title} </Link>
            </li>
          );
        })}
      </ul>
      {selected ? (
        <Institution institution={selected} Open={open} />
      ) : (
        <p>select again</p>
      )}
    </section>
  );
}

export default Education;
