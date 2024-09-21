import { Link } from "react-router-dom";
import "./Institutions.scss";
import diploma from "../../assets/ imageDiploma.png";
import certification from "../../assets/certification.png";
import { useEffect, useState } from "react";
import Image from "../Image/Image";
function Institution({ institution, Open, id }) {
  console.log(id);

  return (
    <section className={`institutions ${!Open ? "institutions__hide" : ""}`}>
      <ul className="institutions__container">
        <li className="institutions__list ">
          {id === "0" ? (
            <img
              className="institutions__image"
              alt={institution?.school}
              src={diploma}
            />
          ) : id === "1" ? (
            <img
              className="institutions__image"
              alt={institution?.school}
              src={certification}
            />
          ) : (
            ""
          )}
          <div>
            <h3>
              {institution?.school}

              {institution?.type}
            </h3>
            <p>{institution?.city}</p>
            <p>{institution?.career}</p>
            <p>{institution?.date}</p>
          </div>
        </li>
      </ul>
      <img width={200} src={diploma}></img>
    </section>
  );
}
export default Institution;
