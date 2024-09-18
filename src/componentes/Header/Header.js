import React, { useState } from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import { navBartitles } from "../../apiData/data";
function Header(params) {
  const [selected, SetSelected] = useState("");
  const select = (title) => {
    SetSelected((button) => (button === title ? "" : title));
    console.log();
  };
  return (
    <header className="header">
      <div className="header">
        <h1 className="header__engineer"> {"Nelson Alvarado"}</h1>
        <h3 className="header__engineer--career"> {"Jr. Software Engineer"}</h3>
      </div>
      <nav className="header">
        <ul className="header header__navegation">
          <li
            onClick={() => {
              select("about");
            }}
            className={`header header__list`}
          >
            {" "}
            <Link
              to=""
              //  target="_blank"
              className={`header header__link ${
                selected === "about" ? "header__link--active" : ""
              }`}
            >
              {"About Me"}
            </Link>
          </li>
          <li
            onClick={() => {
              select("experience");
            }}
            className={`header header__list `}
          >
            {" "}
            <Link
              to=""
              //  target="_blank"
              className={`header header__link ${
                selected === "experience" ? "header__link--active" : ""
              }`}
            >
              {"Experience"}
            </Link>
          </li>
          <li
            onClick={() => {
              select("projects");
            }}
            className={`header header__list `}
          >
            {" "}
            <Link
              to=""
              //  target="_blank"
              className={`header header__link ${
                selected === "projects" ? "header__link--active" : ""
              }`}
            >
              {"My Projects"}
            </Link>
          </li>
          <li
            onClick={() => {
              select("gallery");
            }}
            className={`header header__list `}
          >
            {" "}
            <Link
              to=""
              // target="_blank"
              className={`header header__link ${
                selected === "gallery" ? "header__link--active" : ""
              }`}
            >
              {"Galelery"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
//
//
