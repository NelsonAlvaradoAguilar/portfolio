import { Link } from "react-router-dom";
import "./Institutions.scss";
import diploma from "../../assets/ imageDiploma.png";
import { useEffect, useState } from "react";
function Institution({ institution, Open, index }) {
  return (
    <section className={`institutions ${!Open ? "institutions__hide" : ""}`}>
      <ul className="institutions__container">
        <li className="institutions__list ">
          {institution?.image ? (
            <img
              className="institutions__image"
              alt={institution?.school}
              src={institution?.image}
            />
          ) : (
            <p>No image available</p>
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
    </section>
  );
}
export default Institution;
