import React from "react";
import { Link as ScrollLink } from "react-scroll";

const herosectionData = {
  name: "Brayan",
  aboutMe: `I’m a software developer from the Dominican Republic, focused on Front-end & Web Development.`,
};

function Herosection() {
  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
      style={{ backgroundImage: "url(/images/hero.png)" }}
    >
      <div className="cta mx-auto mt-2">
        <h1 className="mt-0 mb-4">
          Hi! I’m {herosectionData.name}
          <span className="dot"></span>
        </h1>
        <p className="mb-4">{herosectionData.aboutMe}</p>
        <ScrollLink
          activeClass="active"
          to="section-portfolios"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-default btn-lg mr-3"
        >
          <i className="icon-grid"></i>View Portfolio
        </ScrollLink>
        <div
          className="spacer d-md-none d-lg-none d-sm-none"
          data-height="10"
        ></div>
        <button
          type="button"
          activeClass="active"
          to="section-contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-border-light btn-lg"
          onClick={(e) => {
            window.location = "mailto:brayanmbeltre@gmail.com";
            e.preventDefault();
          }}
        >
          <i className="icon-envelope"></i>Hire me
        </button>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Herosection;
