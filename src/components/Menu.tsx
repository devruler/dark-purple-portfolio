import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Menu({isOpen}: {isOpen: Boolean}) {

  const menuRef = useRef<HTMLUListElement>(null);
  const didMount = useRef(false);

  useEffect(() => {
    // Skip first render
    if(didMount.current){
      didMount.current = false;
      return;
    }

    switch (isOpen) {
      case true:
        gsap.to(menuRef.current, { height: "auto", opacity: 100, duration: .2});
        break;
      default:
        gsap.to(menuRef.current, { height: 0, padding: 0, duration: .3});
        break;
    }
  }, [isOpen]);

  return (
      <ul ref={menuRef} className="menu py-3 shadow-lg bg-base-100 rounded-box z-50 absolute w-64 overflow-hidden opacity-0" >
        <li className="menu-title">
          <span>MENU</span>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact-me">Contact Me</a>
        </li>
      </ul>
  );
}

export default Menu;
