import { Link } from "react-router-dom";
import "./Institutions.scss";
import { useEffect, useState } from "react";
function Institution({ institution, Open }) {
  return (
    <section className={`institutions ${!Open ? "institutions__hide" : ""}`}>
      <ul className="institutions__container">
        <li className="institutions__list ">
          <img
            className={`institutions__image`}
            alt={institution?.image}
            src={institution?.image}
          ></img>
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
