import React, { useState } from "react";
import { aboutMeDada } from "../../apiData/data";
import { Link, NavLink } from "react-router-dom";
import "./AboutMe.scss";
function AboutMe(params) {
  return (
    <section className="bio">
      {aboutMeDada?.map((data) => {
        return (
          <div className="bio__container" key={data.id}>
            <div className="bio__subcontainer">
              <img className="bio__image" src={data.image}></img>
              <h1>{data.name}</h1>
            </div>
            <article className="bio__article">
              <p className="bio__paragraph">{data.paragraph1}</p>
              <p className="bio__paragraph bio__paragraph--botton">
                {data.paragraph2}
              </p>
            </article>
          </div>
        );
      })}
    </section>
  );
}
export default AboutMe;
