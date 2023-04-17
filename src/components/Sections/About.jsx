import React from "react";
import { Link as ScrollLink } from "react-scroll";

const aboutData = {
  cvpath: "media/resume-eng.pdf",
  image: "images/about.png",
  interests: "Movies, Video Games, Music, Reading",
  location: "Santo Domingo, DR",
  birthday: "August 29",
  email: "brayanmbeltre@gmail.com",
  aboutMe: `
I’m a software developer from the Dominican Republic, focused on Front-end & Web Development. 
I love bringing designs alive and creating systems that allow users to digest the information and guide them in an immersive experience.
`,
};

function About() {
  return (
    <div className="row">
      <div className="col-md-12">
        <h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
        <p className="mb-0">{aboutData.aboutMe}</p>
        <div className="row my-4">
          <div className="col-md-6">
            <p className="mb-2">
              Birthday: <span className="text-dark">{aboutData.birthday}</span>
            </p>
            <p className="mb-0">
              Interests:{" "}
              <span className="text-dark">{aboutData.interests}</span>
            </p>
          </div>
          <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
            <p className="mb-2">
              Location: <span className="text-dark">{aboutData.location}</span>
            </p>
            <p className="mb-0">
              Email: <span className="text-dark">{aboutData.email}</span>
            </p>
          </div>
        </div>
        <a
          href={aboutData.cvpath}
          target="_blank"
          rel="noreferrer"
          className="btn btn-default mr-3"
        >
          <i className="icon-cloud-download"></i>Download CV
        </a>
        <ScrollLink
          activeClass="active"
          to="section-contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-alt mt-2 mt-md-0 mt-xs-2"
        >
          <i className="icon-envelope"></i>Hire me
        </ScrollLink>
      </div>
    </div>
  );
}

export default About;
