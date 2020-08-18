import React, { useEffect } from "react";
import photo2 from "../../images/photo2.jpg";
import photo3 from "../../images/photo3.jpg";
import photo4 from "../../images/photo4.jpg";
import photo5 from "../../images/photo5.jpg";
import photo6 from "../../images/photo6.jpg";
import photo7 from "../../images/photo7.jpg";
import photo8 from "../../images/photo8.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Grid = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    

    gsap.fromTo('#six', {opacity:0, x:-100}, {duration: 2, x:0, opacity:1, scrollTrigger: {trigger: '#six', markers: false, start: 'top 60%'}})
    gsap.fromTo('#five', {opacity:0, x:-100}, {duration: 2, x:0, opacity:1, scrollTrigger: {trigger: '#five', markers: false, start: 'top 50%'}})
    gsap.fromTo('#eight', {opacity:0, x:-100}, {duration: 2, x:0, opacity:1, scrollTrigger: {trigger: '#eight', markers: false, start: 'top 80%'}})

    gsap.fromTo('#three', {opacity:0, y:-100}, {duration: 2, y:0, opacity:1, scrollTrigger: {trigger: '#three', markers: false, start: 'top 80%'}})
    gsap.fromTo('#four', {opacity:0, y:100}, {duration: 2, y:0, opacity:1, scrollTrigger: {trigger: '#four', markers: false, start: 'top 80%'}})

    gsap.fromTo('#seven', {opacity:0, x:100}, {duration: 2, x:0, opacity:1, scrollTrigger: {trigger: '#seven', markers: false, start: 'top 80%'}})
    gsap.fromTo('#two', {opacity:0, x:100}, {duration: 2, x:0, opacity:1, scrollTrigger: {trigger: '#two', markers: false, start: 'top 60%'}})

    

  });
  return (
    <>
      <div className="row" id="gallery">
        <div className="column">
          <img id="six" src={photo6} />
          <img id="five" src={photo5} />
          <img id="eight"src={photo8} />
        </div>
        <div className="column">
          <img id="three" src={photo3} />
          <img id="four" src={photo4} />
        </div>
        <div className="column">
          <img id="seven" src={photo7} />
          <img id="two" src={photo2} />
        </div>
      </div>
    </>
  );
};

export default Grid;
