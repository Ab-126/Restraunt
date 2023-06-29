import React from "react";
import img from "../images/dish.webp";
import { AiOutlineSend } from "react-icons/ai";
import spinach from "../images/spinach-leaf.png";

const NewsLetter = () => {
  return (
    <section className="newsletter section">
      <div className="newsletter__container container">
        <div className="newsletter__content grid">
          <img src={img} alt="" className="newsletter__img" />
          <div className="newsletter__data">
            <span className="section__subtitle">Newsletter</span>
            <h2 className="section__title">
              Subscribe For <br />
              Updates
            </h2>
            <form action="" className="newsletter__form">
              <input
                type="email"
                placeholder="Enter email"
                className="newsletter__input"
              />
              <button className="button newsletter__button">
                Subscribe <AiOutlineSend />
              </button>
            </form>
          </div>
        </div>
        <img src={spinach} alt="" className="newsletter__spinach" />
      </div>
    </section>
  );
};

export default NewsLetter;
