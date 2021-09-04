import React, { useRef, useState } from "react";
import Heading from "../components/Heading";
// import ProjectModal from "../components/ProjectModal";
import ChatAppImgOne from "../assets/images/chat_app_1.jpg";
import ShopperrImgOne from "../assets/images/shopperr_1.jpg";
import HoteluxImgOne from "../assets/images/hotelux_1.jpg";
import EyeIcon from "../assets/images/eye.svg";
import GithubIcon from "../assets/images/github.svg";
import { gsap } from "gsap";

function Projects() {

  const [projects, setProjects] = useState([
    {
      name: "Chat Application",
      description: "Real-time chatting functionality with the possibility of sending audio messages and video calling.",
      img: ChatAppImgOne,
      technologies: ["Laravel", "VueJs", "Socket.io", "TailwindCss"],
      links: {
        github: "https://github.com/redaifis/vuexy-chat-app"
      }
    },
    {
      name: "Shopperr",
      description: "An e-commerce web application to sale automotive parts.",
      img: ShopperrImgOne,
      technologies: ["Laravel", "ReactJs", "Bootstrap"],
      links: {
        github: "https://github.com/redaifis/Shopperr"
      }
    },
    {
      name: "Hotelux",
      description: "A web application for booking rooms in a Hotel.",
      img: HoteluxImgOne,
      technologies: ["Laravel", "VueJs", "Bootstrap"],
      links: {
        github: "https://github.com/redaifis/hotelux"
      }
    },
  ]);

  const [selectedProject, setSelectedProject] = useState({
    name: "",
    description: "",
    img: "",

    technologies: [""],
    links: {
      github: ""
    },
  });

  const projectsStyles = {
    cards: {
      minHeight: "560px",
    },
  };

  const handleShowActions = (elementId: String) => {
    console.log('enter')
    gsap.to(elementId, {duration: .3, opacity: 100, ease: "power4", css: { translateY: "0"}});
  }

  const handleHideActions = (elementId: String) => {
    console.log('leave')

    gsap.to(elementId, {duration: .8, opacity: 0, ease: "power2",css: { translateY: "20rem"}});
  }

  return (
    <div className="w-full px-4 md:px-10 py-16" id="projects" >
      <Heading headingText="My Latest Projects"></Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="card shadow-xl w-full"
              style={{
                ...projectsStyles.cards,
              }}
              onMouseEnter={() => handleShowActions("#actions-" + index)}
              onMouseLeave={() => handleHideActions("#actions-" + index)}
            >
              <figure className="absolute h-full bg-gradient-to-t from-black to-gray-800">
                <img
                  src={project.img}
                  className="object-cover object-top h-full w-full opacity-10 im"
                />
              </figure>
              <div className="justify-end card-body z-50 text-white">
                <h2 className="card-title">{project.name}</h2>
                <p>{project.description}</p>
                <div className="inline-block my-4">
                  {project.technologies.map((tech, index) => {
                    return (
                      <div className="badge badge-warning mr-2 mb-2" key={index}>
                        {tech}
                      </div>
                    );
                  })}
                </div>
                <div className="card-actions transform translate-y-80" id={"actions-" + index}>
                <a
                    href="#projects"
                    className="btn btn-sm"
                    onClick={() => window.open(project.img)}
                  >
                    <img src={EyeIcon} alt="eye icon" className="h-4 w-4 mr-2"/>
                    View
                  </a>
                  <a
                    href="#projects"
                    className="btn btn-sm"
                    onClick={() => window.open(project.links.github)}
                  >
                    <img src={GithubIcon} alt="github icon" className="h-4 w-4 mr-2" />
                    Github
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <ProjectModal project={selectedProject}></ProjectModal> */}
    </div>
  );
}

export default Projects;
