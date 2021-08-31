import React from "react";
import Heading from "../components/Heading";
function Skills() {
  const skills = {
    languages: [
        {
            name: "Html5 / Css3",
            value: "90",
          },
      {
        name: "PHP",
        value: "75",
      },
      {
        name: "Javascript",
        value: "85",
      },
      {
        name: "Typescript",
        value: "60",
      },
    ],
    frameworks: [
      {
        name: "Laravel",
        value: "85",
      },
      {
        name: "VueJs",
        value: "90",
      },
      {
        name: "ReactJs",
        value: "80",
      },
      {
        name: "Bootstrap",
        value: "82",
      },
      {
        name: "TailwindCss",
        value: "88",
      },
    ],
    tools: [
      {
        name: "Git / Github",
        value: "80",
      },
      {
        name: "Linux Commands",
        value: "65",
      },
    ],
  };
  return (
    <div className="w-full px-4 md:px-10 py-16">
      <Heading headingText="Skills"></Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        <div className="card shadow-2xl lg:card-side bg-white text-gray-800">
          <div className="card-body space-y-4">
            <h2 className="card-title">Languages</h2>
            {skills.languages.map((lang) => {
              return (
                <>
                  <span>{lang.name}</span>
                  <progress
                    className="progress"
                    value={lang.value}
                    max="100"
                  ></progress>
                </>
              );
            })}
          </div>
        </div>

        <div className="card shadow-2xl lg:card-side bg-white text-gray-800">
          <div className="card-body space-y-4">
            <h2 className="card-title">Frameworks</h2>
            {skills.frameworks.map((framework) => {
              return (
                <>
                  <span>{framework.name}</span>
                  <progress
                    className="progress"
                    value={framework.value}
                    max="100"
                  ></progress>
                </>
              );
            })}
          </div>
        </div>

        <div className="card shadow-2xl lg:card-side bg-white text-gray-800">
          <div className="card-body space-y-4">
            <h2 className="card-title">Other Tools</h2>
            {skills.tools.map((tool) => {
              return (
                <>
                  <span>{tool.name}</span>
                  <progress
                    className="progress"
                    value={tool.value}
                    max="100"
                  ></progress>
                </>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;
