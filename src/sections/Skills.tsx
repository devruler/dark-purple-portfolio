import React from "react";
import Heading from "../components/Heading";

// Tech icons
import ReactJsIcon from "../assets/images/reactjs.svg";
import VueJsIcon from "../assets/images/vuejs.svg";
import LaravelIcon from "../assets/images/laravel.svg";
import JavascriptIcon from "../assets/images/javascript.svg";
import TypescriptIcon from "../assets/images/typescript.svg";
import PhpIcon from "../assets/images/php.svg";
import GitIcon from "../assets/images/git.svg";
import BootstrapIcon from "../assets/images/bootstrap.svg";
import TailwindCssIcon from "../assets/images/tailwindcss.svg";
import HtmlIcon from "../assets/images/html.svg";
import CssIcon from "../assets/images/css.svg";
import LinuxIcon from "../assets/images/linux.svg";
import SeoIcon from "../assets/images/seo.svg";



function Skills() {
  const skills = {
    languages: [
      {
          name: "Html5 / Css3",
          value: "90",
          icon: HtmlIcon
        },
      {
        name: "PHP",
        value: "80",
        icon: PhpIcon
      },
      {
        name: "Javascript",
        value: "85",
        icon: JavascriptIcon
      },
      {
        name: "Typescript",
        value: "55",
        icon: TypescriptIcon
      },
    ],
    frameworks: [
      {
        name: "Laravel",
        value: "85",
        icon: LaravelIcon
      },
      {
        name: "VueJs",
        value: "90",
        icon: VueJsIcon
      },
      {
        name: "ReactJs",
        value: "80",
        icon: ReactJsIcon
      },
      {
        name: "Bootstrap",
        value: "82",
        icon: BootstrapIcon
      },
      {
        name: "TailwindCss",
        value: "88",
        icon: TailwindCssIcon
      },
    ],
    tools: [
      {
        name: "Git / Github",
        value: "80",
        icon: GitIcon
      },
      {
        name: "Linux",
        value: "65",
        icon: LinuxIcon
      },
      {
        name: "Seo",
        value: "80",
        icon: SeoIcon
      },
    ],
  };


  return (
    <div className="w-full px-4 md:px-10 py-16" id="skills">
      <Heading headingText="Skills"></Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        <div className="card shadow-2xl lg:card-side bg-white text-gray-800">
          <div className="card-body space-y-4">
            <h2 className="card-title">Languages</h2>
            {skills.languages.map((lang, index) => {
              return (
                <div key={index}>
                  <span><img src={lang.icon} alt={lang.name} className="w-5 h-5 inline-block" /> {lang.name}</span>
                  <progress
                    className="progress"
                    value={lang.value}
                    max="100"
                  ></progress>
                </div>
              );
            })}
          </div>
        </div>

        <div className="card shadow-2xl lg:card-side bg-white text-gray-800">
          <div className="card-body space-y-4">
            <h2 className="card-title">Frameworks</h2>
            {skills.frameworks.map((framework, index) => {
              return (
                <div key={index}>
                  <span><img src={framework.icon} alt={framework.name} className="w-5 h-5 inline-block" /> {framework.name}</span>
                  <progress
                    className="progress"
                    value={framework.value}
                    max="100"
                  ></progress>
                </div>
              );
            })}
          </div>
        </div>

        <div className="card shadow-2xl lg:card-side bg-white text-gray-800">
          <div className="card-body space-y-4">
            <h2 className="card-title">Other</h2>
            {skills.tools.map((tool, index) => {
              return (
                <div key={index}>
                  <span><img src={tool.icon} alt={tool.name} className="w-5 h-5 inline-block" /> {tool.name}</span>
                  <progress
                    className="progress"
                    value={tool.value}
                    max="100"
                  ></progress>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;
