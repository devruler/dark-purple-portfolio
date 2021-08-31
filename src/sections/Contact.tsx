import React, { useState } from "react";
import Heading from "../components/Heading";
import { send } from 'emailjs-com';

interface IMailData{
  name: string;
  email: string;
  subject: string;
  message: string;
}
function Contact() {
  const [mailData, setMailData] = useState<IMailData>({name: '', email: '', message: '', subject: ''});

  const handleMailData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setMailData((mailData) => ({...mailData, [e.target.name]: e.target.value}));
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    window.open(`mailto:ifis.reda@gmail.com?subject=${mailData.subject}&body=${mailData.message}&from=${mailData.email}&username=${mailData.name}`)
  }

  return (
    <div className="w-full px-4 md:px-10 py-10" id="contact-me">
      <Heading headingText="Contact Me"></Heading>
      <form action="" className="md:max-w-md mx-auto" onSubmit={(e) => handleFormSubmit(e)}>
        <div className="card shadow-lg bg-white">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full name"
                className="input"
                name="name"
                onChange={(e) => handleMailData(e)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                className="input"
                onChange={(e) => handleMailData(e)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Subject</span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input"
                onChange={(e) => handleMailData(e)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea h-24"
                placeholder="Your Message"
                name="message"
                onChange={(e) => handleMailData(e)}

              ></textarea>
            </div>
            <div className="my-4 w-full flex justify-center">
            <button className="btn btn-sm btn-wide" type="submit">Send</button>

            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
