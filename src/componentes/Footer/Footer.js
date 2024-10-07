import React, { useState } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import gmailIcon from "../../assets/icons/icons8-gmail-100.svg";
import phoneIcon from "../../assets/icons/icons8-phone-48.svg";
import linkedinIcon from "../../assets/icons/icons8-linkedin-100.svg";
import githubIcon from "../../assets/icons//icons8-github-50.svg";
import logo2 from "../../assets/logos/Vista Logos (1)/logo-transparent-svg.svg";

function Footer(params) {
  const [showPhone, setShowPhone] = useState(false);
  function show(params) {
    showPhone ? setShowPhone(true) : setShowPhone(false);
  }
  return (
    <section className="footer">
      <Link className="footer__logo" to={"/"}>
        <img className="footer__logo--img" src={logo2}></img>
      </Link>
      <div className="footer  footer__icons-container">
        <Link to={"/FormContact"}>
          {" "}
          <img src={gmailIcon}></img>
        </Link>
        <Link to={"https://github.com/NelsonAlvaradoAguilar"} target="_blank">
          {" "}
          <img src={githubIcon}></img>
        </Link>
        <a href="tel:+19052077425">
          <img  src={phoneIcon} alt="Phone Icon" />
        </a>
        <Link
          to={"https://www.linkedin.com/in/nelsonalvaradoa/"}
          target="_blank"
        >
          {" "}
          <img src={linkedinIcon}></img>
        </Link>
      </div>
    </section>
  );
}

export default Footer;
