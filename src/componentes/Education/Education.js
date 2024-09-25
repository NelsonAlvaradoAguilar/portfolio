import { useState } from "react";
import "./Education.scss";
import { educationData, educationDataList } from "../../apiData/data.js";
import { Link, useNavigate, useParams } from "react-router-dom";
import Institution from "../Institutions/Institutions.js";
function Education() {
  const [selected, SetSelected] = useState();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();
  const [achivement, setAchivement] = useState(false);

  const navegate = useNavigate();
  const data = educationData;
  console.log(data);
  console.log(id);

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
    console.log(selectedEducation.id);
  };
  const activeAchivements = () => {
    setAchivement(true);
    setOpen(false);
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
                handleSelect(titles.id);
                setId(titles.id);
              }}
              className={`education__subtitle ${
                selected?.id === titles.id ? " education__subtitle--active" : ""
              }`}
            >
              <Link className="education__link"> {titles.title} </Link>
            </li>
          );
        })}
      </ul>
      {selected ? (
        <Institution
          institution={selected}
          Open={open}
          id={id}
          SetSelected={SetSelected}
        />
      ) : (
        ""
      )}

      {achivement ? <Institution /> : ""}
    </section>
  );
}

export default Education;
