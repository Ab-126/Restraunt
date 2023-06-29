import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { HashLink } from "react-router-hash-link";
import { AiOutlineClose } from "react-icons/ai";
import leaf3 from "../images/leaf-branch-3.png";
import leaf4 from "../images/leaf-branch-4.png";
import { RiApps2Line } from "react-icons/ri";
import ScrollReveal from "scrollreveal";

const Header = () => {
  const navMenu = document.getElementById("nav-menu");
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", scrollHeader);

  const expand = () => {
    setToggle(true);
    if (navMenu) navMenu.classList.add("show-menu");
  };

  const collapse = () => {
    setToggle(false);
    if (navMenu) navMenu.classList.remove("show-menu");
  };

  // Theme Change

  const changeTheme = () => {
    const themeButton = document.getElementById("theme-button");
    const darkTheme = "dark-theme";
    const iconTheme = "ri-sun-line";

    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? "dark" : "light";
    const getCurrentIcon = () =>
      themeButton.classList.contains(iconTheme)
        ? "ri-moon-line"
        : "ri-sun-line";

    if (selectedTheme) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
      themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
        iconTheme
      );
    }

    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  };

  // Scroll reveal
  // const Scroll = () => {
  //   const sr = ScrollReveal({
  //     origin: "top",
  //     distance: "60px",
  //     duration: 2500,
  //     delay: 400,
  //     // reset: true, // Animation repeat
  //   });

  //   sr.reveal(
  //     `.home__img, .newsletter__container, .footer__logo, .footer__description, .footer__content, .footer__info`
  //   );
  //   sr.reveal(`.home__data`, { origin: "bottom" });
  //   sr.reveal(`.about__data, .recently__data`, { origin: "left" });
  //   sr.reveal(`.about__img, .recently__img`, { origin: "right" });
  //   sr.reveal(`.popular__card`, { interval: 100 });
  // };

  // useEffect(() => {
  //   Scroll();
  // }, []);

  return (
    <div className={navbar ? "bg-header header" : "header"} id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src={logo} alt="logo image" />
          Ten Spoon
        </a>
        <div className={"nav__menu"} id="nav-menu">
          <ul className="nav__list" onClick={collapse}>
            <li className="nav__item">
              <HashLink to={"/#"} className={"nav__link"}>
                Home
              </HashLink>
            </li>
            <li className={"nav__item"}>
              <HashLink to={"/#about"} className={"nav__link"}>
                About
              </HashLink>
            </li>
            <li className={"nav__item"}>
              <HashLink to={"/#popular"} className={"nav__link"}>
                Popular
              </HashLink>
            </li>
            <li className={"nav__item"}>
              <HashLink to={"/#recently"} className={"nav__link"}>
                Recently
              </HashLink>
            </li>
          </ul>

          {/* Close Button */}
          <div className="nav__close" id="nav-close" onClick={collapse}>
            <AiOutlineClose />
          </div>

          <img src={leaf4} alt="" className="nav__img-1" />
          <img src={leaf3} alt="" className="nav__img-2" />
        </div>
        <div className="nav__buttons">
          {/* Theme Change Button */}
          <i
            class="ri-moon-line change-theme"
            id="theme-button"
            onClick={changeTheme}
          ></i>

          {/* Toggle Button */}
          <div className="nav__toggle" id="nav-toggle" onClick={expand}>
            <RiApps2Line />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
