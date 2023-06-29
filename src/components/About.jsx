import React from "react";
import img3 from "../images/img3.jpg";
import img4 from "../images/panner.jpg";
import leaf1 from "../images/leaf-branch-1.png";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <span className="section__subtitle">About Us</span>
          <h2 className="section__title about__title">
            <div>
              We Provide
              <img src={img3} />
            </div>
            Healthy Food
          </h2>
          <p className="about__description">
            Food comes to us from our relatives, whether they have wings or
            roots. This is how we consider food, it also has a culture. It has a
            history that passes from generation to generation
          </p>
        </div>
        <img src={img4} className="about__img" />
      </div>
      <img src={leaf1} className="about__leaf" />
    </section>
  );
};

export default About;
