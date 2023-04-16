import React from "react";

function Skill({ data: { name, icon: Icon } }) {
  return (
    <div className="skill-item">
      <Icon className="skill-icon" />
      <h4 className="">{name}</h4>
    </div>
  );
}

export default Skill;
