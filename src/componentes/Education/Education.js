import { useState } from "react";
import "./Education.scss";
import { Link } from "react-router-dom";

function Education(params) {
  const [selected, SetSelected] = useState("");
  const select = (subtitle) => {
    SetSelected((button) => (button === subtitle ? "" : subtitle));
    console.log();
  };
  return (
    <section className="education">
      <h1 className="education__title">Education Process</h1>
      <div className="education__subcontainer">
        <h3
          onClick={() => {
            select("BrainStation 2024");
          }}
          className={`education__subtitle ${
            selected === "BrainStation 2024"
              ? "education__subtitle--active"
              : ""
          }`}
        >
          {"BrainStation 2024"}
        </h3>{" "}
        <h3
          onClick={() => {
            select("BrainStation 2023");
          }}
          className={`education__subtitle ${
            selected === "BrainStation 2023"
              ? "education__subtitle--active"
              : ""
          }`}
        >
          {"BrainStation 2023"}
        </h3>
        <h3
          onClick={() => {
            select(" National training Academy, Colombia");
          }}
          className={`education__subtitle ${
            selected === " National training Academy, Colombia"
              ? "education__subtitle--active"
              : ""
          }`}
        >
          {" National training Academy, Colombia"}
        </h3>{" "}
      </div>
    </section>
  );
}

export default Education;
//
