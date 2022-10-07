import React from 'react'
import './experience.css'
import inti from '../../img/logo_inti.png'
import telkom from '../../img/logo_telkom.png'
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

const Experience = () => {
    useEffect(() => {
        Aos.init({mirror: true});
        }, []);
  return (
    <div className='e'>
        <div className="carde">
            <h2 data-aos="zoom-in" className='ed-title'><div className='anotasi'>Experiences</div></h2>
            <div className="card-content">
                <div data-aos="fade-right" className="e-left">
                    <img src={inti} alt='PT. INTI'/>
                    <h2>PT. INTI</h2>
                    <h4>Web Developer - 3 mos</h4>
                    <p>Completed two websites development projects, using HTML/CSS, CodeIgniter and Bootstrap, while incorporating data from back-end databases and services</p>
                </div>
                <div data-aos="fade" className="e-mid">
                    <svg version="1.1" id="line_2" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1200px" height="5px">
                        <path class="path2" fill="#01a09e" stroke-width="3" stroke="#01a09e" d="M0 0 l1120 0"/>
                    </svg>
                    <lord-icon
                        src={'https://cdn.lordicon.com/lhiefomu.json'}
                        trigger="loop"
                        delay="1000"
                        colors="outline:#121331,primary:#3a3347,secondary:#000000,tertiary:#4faef9,quaternary:#f1c1b8,quinary:#e7e2eb"
                        style={{width: '250px', height:'250px'}}>
                    </lord-icon>
                    <svg version="1.1" id="line_2" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1200px" height="5px">
                        <path class="path2" fill="#01a09e" stroke-width="3" stroke="#01a09e" d="M0 0 l1120 0"/>
                    </svg>
                </div>
                <div data-aos="fade-left" className="e-right">
                    <img src={telkom} alt='Telkom'/>
                    <h2>Telkom Indonesia</h2>
                    <h4>Web Developer - 6 mos</h4>
                    <p>Has a role as Full-Stack Dev project called Insight. The web is an information system built for talent/member management.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience