import "./projectlist.css";
import React from "react";

const projectslist = ({ img, link, desc, tools }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <span className="tooltip">
        <span className="tooltip-text">
          <b>{desc}</b> <br />
          Tools: {tools.toString()}
        </span>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
        </a>
      </span>
    </div>
  );
};

export default projectslist;
