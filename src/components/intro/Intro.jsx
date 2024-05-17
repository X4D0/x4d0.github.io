import React from "react";
import "./Intro.css";
import Me from "../../img/Ray Avatar v2.glb";
import Typewriter from "typewriter-effect";
import { RoughNotation } from "react-rough-notation";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Intro = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, mirror: true });
  }, []);
  return (
    <div className="i">
      <div data-aos="fade-right" className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-greet">Hi, My Name is</h2>
          <h1 className="i-name">
            <Typewriter
              className="typewriting"
              onInit={(typewriter) => {
                typewriter.typeString("Rayhan Rahmanda").start();
              }}
            />
          </h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Freshgraduate</div>
              <div className="i-title-item">Indonesian</div>
            </div>
          </div>
          <div className="i-desc">
            Just an ordinary guy who loves creating{" "}
            <RoughNotation
              type="circle"
              show={true}
              iterations="2"
              color="#fff"
              animationDelay="2000"
              animationDuration="4000"
            >
              dazzling websites
            </RoughNotation>
            . Not an Expert but eager to learn and grow professionally.
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className="i-right">
        <div className="i-bg1">
          <svg
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop
                  id="stop1"
                  stop-color="rgba(61.402, 55, 248, 1)"
                  offset="0%"
                ></stop>
                <stop
                  id="stop2"
                  stop-color="rgba(199.805, 113.823, 255, 1)"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient)"
              d="M16.1,-29.1C19.7,-25.7,20.9,-19.2,26,-13.9C31.1,-8.5,40.1,-4.2,41.7,1C43.4,6.2,37.8,12.4,33.5,19.1C29.2,25.9,26.3,33.3,21,37.6C15.6,42,7.8,43.3,2.1,39.7C-3.6,36,-7.1,27.3,-13.6,23.6C-20.1,19.8,-29.5,21.1,-31.7,18.1C-34,15,-29.1,7.5,-28.3,0.4C-27.5,-6.6,-30.9,-13.2,-29.8,-18.3C-28.7,-23.4,-23.2,-27,-17.5,-29.2C-11.8,-31.4,-5.9,-32.1,0.1,-32.4C6.2,-32.6,12.4,-32.4,16.1,-29.1Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              stroke-width="0"
              style={{ transition: "all 0.3s ease 0s" }}
              stroke="url(#sw-gradient)"
            ></path>
          </svg>
        </div>
        <model-viewer
          alt="Ray Avatar"
          src={Me}
          autoplay
          ar
          ar-modes="webxr scene-viewer quick-look"
          shadow-intensity="1"
          camera-controls
          touch-action="pan-y"
          enable-pan
          style={{
            width: "100%",
            height: "800px",
            backgroundColor: "unset",
            position: "relative",
          }}
        ></model-viewer>
      </div>
    </div>
  );
};

export default Intro;
