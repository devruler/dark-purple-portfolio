import React from "react";
import GithubIcon from "../assets/images/github.svg";
import LinkedinIcon from "../assets/images/linkedin.svg";
function Footer() {
  return (
    <footer className="w-full mt-10 px-4 md:px-10 pt-10 pb-4 text-white shadow-lg">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-4 flex-wrap justify-between">
          <div className="flex flex-row space-x-4 items-center">
            <h3 className="font-mono font-semibold mr-4">Reach me on:</h3>
            <a href="https://github.com/redaifis" target="_blank">
              <img src={GithubIcon} className="w-6 h-6 " alt="" />
            </a>

            <a href="https://github.com/redaifis" target="_blank">
              <img src={LinkedinIcon} className="w-6 h-6 " alt="" />
            </a>
          </div>
          <div>
            <span className="font-mono font-semibold">Email: </span>
            <span>ifis.reda@gmail.com</span>
          </div>
        </div>

        <div className="w-full text-center pt-4">
          <span className="font-mono text-sm">Created By Reda Ifis | Copyright © 2021. All Rights Reserved </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
