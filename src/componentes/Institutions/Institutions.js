import { Link, useNavigate } from "react-router-dom";
import "./Institutions.scss";
import closeImg from "../../assets/icons/icons8-close.svg";
import Close from "../CloseButton/CloseButton";
import diploma from "../../assets/ imageDiploma.png";
import { useEffect, useState } from "react";
function Institution({ institution, Open, index, SetSelected }) {
  const navegate = useNavigate();

  function close(params) {
    navegate("/");
    SetSelected(null);
  }
  return (
    <section className={`institutions ${!Open ? "institutions__hide" : ""}`}>
      <ul className="institutions__container">
        <li className="institutions__list ">
          {institution?.image ? (
            <div className="institutions__image-container">
              <img
                className="institutions__image-container--image"
                alt={institution?.school}
                src={institution?.image}
              />
            </div>
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
        <p className="institutions__Achivements">{"Achivements"}</p>
      </div>
    </section>
  );
}
export default Institution;
