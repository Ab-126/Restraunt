import React from "react";
import logo from "../images/logo.png";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import onion from "../images/spring-onion.png";
import spinach from "../images/spinach-leaf.png";
import leaf from "../images/leaf-branch-4.png";
import footer1 from "../images/footer-card-1.png";
import footer2 from "../images/footer-card-2.png";
import footer3 from "../images/footer-card-3.png";
import footer4 from "../images/footer-card-4.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div>
          <a href="#" className="footer__logo">
            <img src={logo} alt="" />
            Ten Spoon
          </a>
          <p className="footer__description">
            Food for the body is not <br />
            enough. There must be food <br />
            for the soul.
          </p>
        </div>
        <div className="footer__content">
          <div>
            <h3 className="footer__title">Main Menu</h3>
            <ul className="footer__links">
              <li>
                <a href="" className="footer__link">
                  About
                </a>
              </li>
              <li>
                <a href="" className="footer__link">
                  Menus
                </a>
              </li>
              <li>
                <a href="" className="footer__link">
                  Offer
                </a>
              </li>
              <li>
                <a href="" className="footer__link">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Information</h3>
            <ul className="footer__links">
              <li>
                <a href="" className="footer__link">
                  Contact
                </a>
              </li>
              <li>
                <a href="" className="footer__link">
                  Order & Returns
                </a>
              </li>
              <li>
                <a href="" className="footer__link">
                  Videos
                </a>
              </li>
              <li>
                <a href="" className="footer__link">
                  Reservation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Address</h3>
            <ul className="footer__links">
              <li className="footer__information">
                NH 44 Patikliyana, NH 1, <br />
                Pattikalyana - Dikadla Rd, <br />
                Samalkha, Haryana 132101
              </li>
              <li className="footer__information">9AM-11PM</li>
            </ul>
          </div>

          <div>
            <h3 className="footer__title">Social Media</h3>
            <ul className="footer__social">
              <a
                href="https://www.facebook.com/"
                target="blank"
                className="footer__social-link"
              >
                <AiFillFacebook />
              </a>
              <a
                href="https://www.instagram.com/"
                target="blank"
                className="footer__social-link"
              >
                <AiFillInstagram />
              </a>
            </ul>
          </div>
        </div>
        <img src={onion} alt="" className="footer__onion" />
        <img src={spinach} alt="" className="footer__spinach" />
        <img src={leaf} alt="" className="footer__leaf" />
      </div>
      <div className="footer__info container">
        <div className="footer__card">
          <img src={footer1} alt="" />
          <img src={footer2} alt="" />
          <img src={footer3} alt="" />
          <img src={footer4} alt="" />
        </div>
        <span className="footer__copy">
            &#169; Copyright TenSpoon. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
