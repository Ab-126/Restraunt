import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";

const ScrollUp = () => {
  const [up, setUp] = useState(false);

  const scrollUp = () => {
    if (window.scrollY >= 350) {
      setUp(true);
    } else {
      setUp(false);
    }
  };

  window.addEventListener("scroll", scrollUp);

  //   We have to add which link is active in current navbar

  return (
    <div>
      <HashLink
        to={"/#"}
        className={up ? "show-scroll scrollup" : "scrollup"}
        id="scroll-up"
      >
        <AiOutlineArrowUp />
      </HashLink>
    </div>
  );
};

export default ScrollUp;
