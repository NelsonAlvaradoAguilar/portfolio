import React, { useState } from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logos/Vista Logos/logo-svg.svg";
import logo2 from "../../assets/logos/Vista Logos (1)/logo-transparent-svg.svg";
import { navBartitles } from "../../apiData/data";
function Header(params) {
  const [selected, SetSelected] = useState("");
  const select = (title) => {
    SetSelected((button) => (button === title ? "" : title));
    console.log();
  };
  return (
    <header className="header header__header">
      <Link className="header__logo" to={"/"}>
        <img className="header__logo--img" src={logo2}></img>
      </Link>
      <nav>
        <ul className="header header__navegation">
          <li
            onClick={() => {
              select("about");
            }}
            className={` header__list`}
          >
            {" "}
            <a
              href="#about"
              //  target="_blank"
              className={`header header__link ${
                selected === "about" ? "header__link--active" : ""
              }`}
            >
              {"About Me"}
            </a>
          </li>
          <li
            onClick={() => {
              select("experience");
            }}
            className={`header header__list `}
          >
            {" "}
            <a
              href="#experience"
              //  target="_blank"
              className={`header header__link ${
                selected === "experience" ? "header__link--active" : ""
              }`}
            >
              {"Experience"}
            </a>
          </li>
          <li
            onClick={() => {
              select("projects");
            }}
            className={`header header__list `}
          >
            {" "}
            <a
              href="#projects"
              //  target="_blank"
              className={`header header__link ${
                selected === "projects" ? "header__link--active" : ""
              }`}
            >
              {"My Projects"}
            </a>
          </li>
          <li
            onClick={() => {
              select("gallery");
            }}
            className={`header header__list `}
          >
            {" "}
            <a
              href="#galery"
              // target="_blank"
              className={`header header__link ${
                selected === "gallery" ? "header__link--active" : ""
              }`}
            >
              {"Galelery"}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
//
//
