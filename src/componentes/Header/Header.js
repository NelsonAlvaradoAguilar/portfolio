import React, { useState } from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import { navBartitles } from "../../apiData/data";
function Header(params) {
  const [indexx, setIndex] = useState(null);
  const select = (index) => {
    setIndex(index);
    console.log(index);
  };
  return (
    <header className="header">
      <div className="header">
        <h1 className="header__engineer"> {"Nelson Alvarado"}</h1>
        <h3 className="header__engineer--career"> {"Jr. Software Engineer"}</h3>
      </div>
      <nav className="header">
        <ul className="header header__navegation">
          {navBartitles?.map((title, index) => {
            return (
              <Link
                key={title.id}
                onClick={() => {
                  select(index);
                }}
                className={`header header__link `}
                to="/"
                // target="_blank"
              >
                {" "}
                <li
                  className={`header header__list  ${
                    index === indexx ? "header__list--active" : ""
                  }`}
                >
                  {" "}
                  {title.title}
                </li>{" "}
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
//
//
