import "./projects.css"
import ProjectList from "../projectlist/projectlist"
import {project} from "../../data"
import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import { annotate } from 'rough-notation';


const observer = new IntersectionObserver(handleIntersection, { threshold: [1] });
let annotations;


document.addEventListener('DOMContentLoaded', function () {
  annotations = Array.from(document.querySelectorAll('.anotasi'))
    .map((element, i) => {
      const id = i.toString();
      const annotation = annotate(element, {
        type: 'highlight',
        color: '#fff',
        animationDelay: 7000,
        animationDuration: 2000,
        strokeWidth: 20
      });
      element.dataset.annotateId = id;
      observer.observe(element);
      return { id, annotation };
    });
});


function handleIntersection(entries, observer) {
  entries
    .filter((entry) => entry.isIntersecting)
    .forEach((entry) => {
      const element = entry.target;
      const annotation = annotations
        .filter(({ id }) => id === element.dataset.annotateId)[0].annotation;
        annotation.show();
        annotation.hide();
        annotation.show();
    });
}

const Projects = () => {
  useEffect(() => {
    Aos.init({mirror: true});
    }, []);
  return (
    <div className="pl">
        <div data-aos="zoom-in" className="pl-texts">
            <h1 className="pl-title"><div className='anotasi'>Projects</div></h1>
            <p className="pl-desc">
                Here is all the projects that i have been worked on.
            </p>
        </div>
        <div data-aos="zoom-in" className="pl-list">
          {project.map((item) => (
            <ProjectList key={item.id} img={item.img} link={item.link} />
          ))}
        </div>
    </div>
  )
}

export default Projects