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
            <img
              className="institutions__image"
              alt={institution?.school}
              src={institution?.image}
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
      <div className="institutions__close">
        {"Close"}
        <img
          className="institutions__icon"
          onClick={() => {
            close();
          }}
          src={closeImg}
        ></img>
      </div>
    </section>
  );
}
export default Institution;
/**  const navegate = useNavigate();

  function close(params) {
    navegate("/");
  }
   onClick={() => {
        close();
        console.log("eee");
      }}
      className="close" */
