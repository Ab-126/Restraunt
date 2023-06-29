import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import pizza from "../images/Pizza.webp";
import leaf2 from "../images/leaf-branch-2.png";
import leaf3 from "../images/leaf-branch-3.png";

const Recently = () => {
  return (
    <section className="recently section" id="recently">
      <div className="recently__container container grid">
        <div className="recently__data">
          <span className="section__subtitle">Recently Added</span>
          <h2 className="section__title">Pizza</h2>
          <p className="recently__description">
            Take a look at what's new. And do not deprive yourself of a good
            meal, enjoy and be happy.
          </p>
          <a href="#" className="button">
            Order Now <AiOutlineArrowRight />
          </a>
        </div>
        <img src={pizza} alt="" className="recently__img" />
      </div>
      <img src={leaf2} alt="" className="recently__leaf-1" />
      <img src={leaf3} alt="" className="recently__leaf-2" />
    </section>
  );
};

export default Recently;
