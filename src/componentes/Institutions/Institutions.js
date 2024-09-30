import { Link, useNavigate } from "react-router-dom";
import "./Institutions.scss";
import closeImg from "../../assets/icons/icons8-close.svg";
import Close from "../CloseButton/CloseButton";
import diploma from "../../assets/ imageDiploma.png";
import { achievementsData } from "../../apiData/data";
import { useState } from "react";
function Institution({ institution, Open, SetSelected, setDetails }) {
  const navegate = useNavigate();

  function close(params) {
    navegate("/");
    setDetails(false);
  }

  return (
    <section className={`institutions ${!Open ? "institutions__hide" : ""}`}>
      <ul className="institutions__container">
        <li className="institutions__list ">
          <img
            className="institutions__image"
            alt={institution?.school}
            src={institution?.image}
          />

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
      <div className="institutions__btn-container">
        <div
          onClick={() => {
            close();
          }}
          className="institutions__close"
        >
          <p> {"Close"}</p>
          <img className="institutions__icon" src={closeImg}></img>
        </div>
      </div>
    </section>
  );
}
export default Institution;
