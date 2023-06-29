import React from "react";
import img from "../images/gulab.webp";
import { AiOutlineShopping } from "react-icons/ai";
import img2 from '../images/SpecialThali.webp'
import img3 from '../images/BurgerCombo.webp'

const Popular = () => {
  return (
    <section className="popular section" id="popular">
      <span className="section__subtitle">The Best Food</span>
      <h2 className="section__title">Popular Dishes</h2>

      <div className="popular__container container grid">
        <article className="popular__card">
          <img src={img} className="popular__img" />
          <h3 className="popular__name">
            <span className="popular__description">Indian Sweet Dish </span>
            <span className="popular__price">₹10/piece</span>
            <button className="popular__button">
              <AiOutlineShopping />
            </button>
          </h3>
        </article>

        <article className="popular__card">
          <img src={img2} className="popular__img" />
          <h3 className="popular__name">
            <span className="popular__description">Special Thali </span>
            <span className="popular__price">₹250/thali</span>
            <button className="popular__button">
              <AiOutlineShopping />
            </button>
          </h3>
        </article>

        <article className="popular__card">
          <img src={img3} className="popular__img" />
          <h3 className="popular__name">
            <span className="popular__description">Burger Combo </span>
            <span className="popular__price">₹99/combo</span>
            <button className="popular__button">
              <AiOutlineShopping />
            </button>
          </h3>
        </article>
      </div>
    </section>
  );
};

export default Popular;
