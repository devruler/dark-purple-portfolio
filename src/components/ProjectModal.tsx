import React from "react";
import GithubIcon from "../assets/images/github.svg";

interface ProjectProp {
  project: {
    name: String;
    description: String;
    img: String;
    technologies: String[];
    links: {
      github: String
    }
  };
}
function ProjectModal(props: ProjectProp) {
  return (
    <>
      <div id="projectModal" className="modal">
        <div className="modal-box rounded-none space-y-6 max-h-screen text-center flex flex-col overflow-y-scroll">
          <a className="absolute top-3 right-5 text-purple-900 text-3xl" href="#projects">&times;</a>
          <h1 className="text-2xl h-1/5">{props.project.name}</h1>
          <div className="h-3/5 flex justify-center">
          <img src={String(props.project.img)} alt="" className="h-full cursor-pointer" onClick={() => window.open(String(props.project.img))} />
          </div>
          <div className="modal-action h-1/5">
            <a href={String(props.project.links.github)} className="btn btn-primary btn-sm" target="_blank">
              <img src={GithubIcon} alt="" className="inline-block w-3 h-3 stroke-current md:w-5 md:h-5 mr-2" />
              Github
            </a>

            <a href="#projects" className="btn btn-sm">
              Close
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectModal;
