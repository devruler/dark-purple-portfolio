import React, { useState } from "react";
import Heading from "../components/Heading";
import ProjectModal from "../components/ProjectModal";
import ChatAppImgOne from "../assets/images/chat_app_1.jpg";
import ShopperrImgOne from "../assets/images/shopperr_1.jpg";
import HoteluxImgOne from "../assets/images/hotelux_1.jpg";

function Projects() {
  const [projects, setProjects] = useState([
    
    {
      name: "Chat Application",
      description: "Real-time chatting functionality with the possibility of sending audio messages and video calling.",
      img: ChatAppImgOne,
      technologies: ["Laravel", "VueJs", "Socket.io", "TailwindCss"],
      links: {
        github: "#"
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
      minHeight: "670px",
    },
  };

  return (
    <div className="w-full px-4 md:px-10 py-16">
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
            >
              <figure className="absolute h-full bg-gradient-to-t from-black to-gray-800">
                <img
                  src={project.img}
                  className="object-cover h-full w-full opacity-10"
                />
              </figure>
              <div className="justify-end card-body z-50 text-white">
                <h2 className="card-title">{project.name}</h2>
                <p>{project.description}</p>
                <div className="inline-block my-4">
                  {project.technologies.map((tech) => {
                    return (
                      <div className="badge badge-warning mr-2">
                        {tech}
                      </div>
                    );
                  })}
                </div>
                <div className="card-actions">
                  <a
                    href="#projectModal"
                    className="btn btn-block"
                    onClick={() => setSelectedProject(project)}
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ProjectModal project={selectedProject}></ProjectModal>
    </div>
  );
}

export default Projects;
