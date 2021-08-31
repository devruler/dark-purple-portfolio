import React from "react";

function Menu() {
  return (
      <ul className="menu py-3 shadow-lg bg-base-100 rounded-box z-50 absolute w-64" >
        <li className="menu-title">
          <span>Links</span>
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
