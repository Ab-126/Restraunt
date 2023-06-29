import React from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import leaf2 from "../images/leaf-branch-2.png";
import leaf4 from "../images/leaf-branch-4.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import About from "./About";
import Popular from "./Popular";
import Recently from "./Recently";
import NewsLetter from "./NewsLetter";
import ScrollUp from "./ScrollUp";

const Home = () => {
  return (
    <div className="main">
      <section className="home section" id="home">
        <div className="home__container container grid">
          <img src={img1} alt="" className="home__img" />
          <div className="home__data">
            <h1 className="home__title">
              Enjoy Delicious
              <div>
                <img src={img2} alt="" />
                Good Food
              </div>
            </h1>

            <p className="home__description">
              Enjoy a good dinner with the best dishes in the restaurant and
              improve your day
            </p>
            <a href="#" className="button">
              Order Now <AiOutlineArrowRight />
            </a>
          </div>
        </div>
        <img src={leaf2} alt="" className="home__leaf-1" />
        <img src={leaf4} alt="" className="home__leaf-2" />
      </section>
      <About />
      <Popular />
      <Recently />
      <NewsLetter />
      <ScrollUp />
    </div>
  );
};

export default Home;
