import React, { useState } from "react";
import HeaderImg from "../assets/images/header-img.svg";
import Menu from "../components/Menu";
import OverlayMenu from "../components/OverlayMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  return (
    <div className="relative overflow-hidden h-screen">
      <header className="absolute top-0 left-0 right-0">
        <nav className="container mx-auto px-6 md:px-12 py-6">
          <div>
            <button
              className="text-white focus:outline-none relative"
              id="menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-12 w-12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
        <OverlayMenu isOpen={isMenuOpen} setIsMenuOpen={(isOpen: Boolean) => setIsMenuOpen(isOpen)}></OverlayMenu>
            {/* <Menu isOpen={isMenuOpen} setIsMenuOpen={(isOpen: Boolean) => setIsMenuOpen(isOpen)}></Menu> */}
          </div>
        </nav>
      </header>
      <div className="container mx-auto px-6 md:px-12 relative transform -translate-y-1/2 top-1/2 flex items-center py-32 xl:py-40">
        <div className="w-full flex flex-col items-center relative space-y-8">
          <h1 className="font-extrabold font-mono text-7xl text-center sm:text-8xl text-white leading-tight">
            Reda Ifis
          </h1>
          <p className="text-white">Full Stack Web Developer</p>
          <a href="#contact-me" className="btn rounded-md">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
