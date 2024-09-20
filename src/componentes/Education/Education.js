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
        <section
          className={`institutions ${!open ? "institutions__hide" : ""}`}
        >
          <ul className="institutions__container">
            <li className="institutions__list ">
              {selected?.image ? (
                <img
                  className="institutions__image"
                  alt={selected?.school}
                  src={selected?.image}
                />
              ) : (
                <p>No image available</p>
              )}
              <div>
                <h3>
                  {selected?.school}

                  {selected?.type}
                </h3>
                <p>{selected?.city}</p>
                <p>{selected?.career}</p>
                <p>{selected?.date}</p>
              </div>
            </li>
          </ul>
        </section>
      ) : (
        <p>select again</p>
      )}
    </section>
  );
}

export default Education;
