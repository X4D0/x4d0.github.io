import React from "react";
import "./about.css";
import Profile from "../../img/profile.png";
import TiltProps from "react-parallax-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faPhp,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { annotate } from "rough-notation";

const observer = new IntersectionObserver(handleIntersection, {
  threshold: [1],
});
let annotations;

document.addEventListener("DOMContentLoaded", function () {
  annotations = Array.from(document.querySelectorAll(".anotasi")).map(
    (element, i) => {
      const id = i.toString();
      const annotation = annotate(element, {
        type: "highlight",
        color: "#fff",
        animationDelay: 7000,
        animationDuration: 2000,
        strokeWidth: 20,
      });
      element.dataset.annotateId = id;
      observer.observe(element);
      return { id, annotation };
    }
  );
});

function handleIntersection(entries, observer) {
  entries
    .filter((entry) => entry.isIntersecting)
    .forEach((entry) => {
      const element = entry.target;
      const annotation = annotations.filter(
        ({ id }) => id === element.dataset.annotateId
      )[0].annotation;
      annotation.show();
      annotation.hide();
      annotation.show();
    });
}

const About = () => {
  useEffect(() => {
    Aos.init({ mirror: true });
  }, []);
  return (
    <div className="a">
      <div data-aos="flip-right" className="a-left">
        <TiltProps
          className="parallax-effect-glare-scale"
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.02}
        >
          <div className="card">
            <div className="inner-element">
              <img src={Profile} alt="Profile" />
              <h2>Rayhan Rahmanda</h2>
              <p>
                rayhan.rahmanda@gmail.com
                <br />
                Fresh Graduate of Informatics at Telkom University
                <br />
                Bandung, Indonesia
              </p>
              <div className="links">
                <a
                  href="https://linkedin.com/in/rayhan-rahmanda/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    id="hover-path"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#fff"
                  >
                    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/X4D0/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    id="hover-path"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ffffff"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/__RayR/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    id="hover-path"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ffffff"
                  >
                    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/RayR._/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    id="hover-path"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ffffff"
                  >
                    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </TiltProps>
      </div>
      <div data-aos="fade" className="a-right">
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faPhp} color="#777BB3" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faReact} color="#EC4D28" />
            </div>
          </div>
        </div>
        <h2 className="about-me">
          <div className="anotasi">About Me</div>
        </h2>
      </div>
    </div>
  );
};

export default About;
