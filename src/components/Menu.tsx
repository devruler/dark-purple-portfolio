import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Menu({isOpen, setIsMenuOpen}: {isOpen: Boolean, setIsMenuOpen: (isOpen: Boolean) => void}) {

  const menuRef = useRef<HTMLUListElement>(null);
  const didMount = useRef(false);

  useEffect(() => {
    // Skip first render
    if(didMount.current){
      didMount.current = false;
      return;
    }

    window.addEventListener('mouseup',function(event){
          var menuModal = document.getElementById('menu-modal') as HTMLElement;
          var menuButton = document.getElementById('menu-button') as HTMLElement;
          const eventTarget = event.target as HTMLElement;
          if(isOpen && (eventTarget != menuModal && eventTarget.parentNode != menuModal && eventTarget.parentNode?.parentNode != menuModal )){
            setIsMenuOpen(false)
          }

    });  

    switch (isOpen) {
      case true:
        showModal();
        break;
      default:
        hideModal();
        break;
    }
  }, [isOpen]);

  const showModal = () => {
    gsap.to(menuRef.current, { height: "auto", opacity: 100, paddingTop: 15, paddingBottom: 20, duration: .2});

  }

  const hideModal = () => {
    gsap.to(menuRef.current, { height: 0, padding: 0, duration: .3});
    console.log('hide')
  }

  return (
      <ul ref={menuRef} className="menu py-3 shadow-lg bg-base-100 rounded-box z-50 absolute w-64 overflow-hidden opacity-0" id="menu-modal">
        <li className="menu-title">
          <span>MENU</span>
        </li>
        <li>
          <a href="#about-me">About Me</a>
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
