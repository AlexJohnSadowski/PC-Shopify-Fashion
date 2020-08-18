import React, { useEffect } from "react";
import video from "../video/video1.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    gsap.fromTo('.about-ab', {opacity:0}, {duration: 2, opacity:1, scrollTrigger: {trigger: '.about-ab', markers: true, start: 'top 60%'}})
    gsap.fromTo('.about-tx', {opacity:0}, {duration: 2, opacity:1, scrollTrigger: {trigger: '.about-tx', markers: true, start: 'top 50%'}})
    gsap.fromTo('#myVideo', {x:100, opacity:0}, {duration: 2, x:0, opacity: 1, scrollTrigger: {trigger: '.about-tx', markers: true, start: 'top 50%'}})
    gsap.fromTo('.bg-about', {y:100, opacity:0}, {duration: 2, y:0, opacity: 1, scrollTrigger: {trigger: '.bg-about', markers: true, start: 'top 80%'}})

  });

  return (
    <div className="bg-about">
      <div className="grid-about">
        <div className="about-ab">
          About us<span className="dot">.</span>
        </div>
        <div className="about-tx">
          <p className="about-small">
            Founded in Paris in 2019, Patrice Cadet is one of the world's
            leading luxury fashion brands, with a renowned reputation for
            creativity, innovation and French craftsmanship.
          </p>
          <p>
            The house’s strangely beautiful collections are wearable and
            intelligent, influenced largely by the sartorial conventions of
            bourgeois Milan. The garments – which portray a sense of awkward
            sexuality and complexity that is unfussy provide a substantial take
            on fashion, on personal style, on dressing, in general.
          </p>
        </div>
        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default About;
