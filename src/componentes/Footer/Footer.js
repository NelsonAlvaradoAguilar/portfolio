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
     
      <div className="footer__icons-container">
        <Link  to={"/FormContact"} className="footer__icons">
          {" "}
          <img src={gmailIcon}></img>
        </Link>
        <Link className="footer__icons"  to={"https://github.com/NelsonAlvaradoAguilar"} target="_blank">
          {" "}
          <img src={githubIcon}></img>
        </Link>
        <a className="footer__icons" href="tel:+19052077425">
          <img  src={phoneIcon} alt="Phone Icon" />
        </a>
        <Link className="footer__icons"
          to={"https://www.linkedin.com/in/nelsonalvaradoa/"}
          target="_blank"
        >
          {" "}
          <img src={linkedinIcon}></img>
        </Link>
      </div>
      <Link className="footer__logo" to={"/"}>
        <img className="footer__logo--img" src={logo2}></img>
      </Link>
    </section>
  );
}

export default Footer;
