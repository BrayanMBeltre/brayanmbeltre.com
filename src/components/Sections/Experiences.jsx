import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "2021 - Present",
    degree: "Front-End Developer",
    content:
      "Oficina Gubernamental de Tecnologías de la Información y Comunicación (OGTIC)",
  },
  {
    id: 2,
    year: "2019 - 2021",
    degree: "UI Engineer",
    content: "Contract",
  },
  {
    id: 3,
    year: "2021",
    degree: "IT Support Specialist",
    content: "Alorica",
  },
  {
    id: 4,
    year: "2019 - Present",
    degree: "Web Developer",
    content: `Freelance`,
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
