import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import {
  SiGit,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiApollographql,
  SiWordpress,
  SiSquarespace,
} from "react-icons/si";
import { BsGearFill } from "react-icons/bs";

const skillData = {
  skillContent: `
My proficiency with design tools and development languages allows me to create beautiful and intuitive platforms, Overall, my skills as a software developer makes me a versatile and talented member of any development team.`,
  data: [
    {
      id: 1,
      name: "Javascript",
      icon: IoLogoJavascript,
    },
    {
      id: 2,
      name: "HTML",
      icon: IoLogoHtml5,
    },
    {
      id: 3,
      name: "CSS",
      icon: IoLogoCss3,
    },
    {
      id: 4,
      name: "Git",
      icon: SiGit,
    },
    {
      id: 5,
      name: "Tailwind CSS",
      icon: SiTailwindcss,
    },
    {
      id: 6,
      name: "Bootstrap",
      icon: SiBootstrap,
    },
    {
      id: 7,
      name: "React",
      icon: SiReact,
    },
    {
      id: 8,
      name: "Next.js",
      icon: SiNextdotjs,
    },
    {
      id: 9,
      name: "GraphQL",
      icon: SiApollographql,
    },
    {
      id: 10,
      name: "WordPress",
      icon: SiWordpress,
    },
    {
      id: 11,
      name: "SquareSpace",
      icon: SiSquarespace,
    },
    {
      id: 12,
      name: "And More...",
      icon: BsGearFill,
    },
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.data.map((data) => (
            <div className="col-md-3 col-6 mt-50" key={data.id}>
              <TrackVisibility once>
                <Skill data={data} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
