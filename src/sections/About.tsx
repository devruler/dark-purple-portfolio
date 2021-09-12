import React from "react";
import Heading from "../components/Heading";
function About() {
  return <div className="w-full px-4 md:px-10 py-10" id="about-me">
      <Heading headingText="About Me"></Heading>
      <div className="text-white space-y-3">
        <p>Hello, my name is REDA IFIS. I am currently living in Agadir, Morocco, I am a full stack web developer, and I work in the IT field, specifically in web development and computer science.</p>
        <p>I am very passionate about creating responsive and adaptable web applications and websites with new technologies.</p>
        <p>You can download my resume here:</p>
        <a className="btn bg-yellow-400 shadow-md text-gray-800 hover:bg-yellow-300 btn-sm rounded-md btn-ghost text-center my-4 " href="/assets/profile/cv_reda_ifis.pdf" target="_blank">Download</a>
       
      </div>
  </div>;
}

export default About;
