import React, { useState } from "react";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import { navBartitles } from "../../apiData/data";
function Header(params) {
  const [selectedIndex, SetSelectedIndex] = useState(null);
  const select = (index) => {
    SetSelectedIndex(index);
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
              <li
                key={title.id}
                onClick={() => {
                  select(index);
                }}
                className={`header header__list `}
                to="/"
                target="_blank"
              >
                {" "}
                <Link
                  className={`header header__link ${
                    index === selectedIndex ? "header__link--active" : ""
                  }`}
                >
                  {title.title}
                </Link>
              </li>
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
