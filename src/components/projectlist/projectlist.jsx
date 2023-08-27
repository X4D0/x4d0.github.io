import React from "react";
import "./projectlist.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/dist/backdrop.css";
import "tippy.js/animations/scale-extreme.css";

const projectslist = ({ img, link, desc, tools }) => {
  return (
    <Tippy
      content={desc + " Made with: " + tools}
      animation="scale-extreme"
      theme="forest"
    >
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
        </a>
      </div>
    </Tippy>
  );
};

export default projectslist;
