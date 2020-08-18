import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Contact = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".contact-title", {opacity:0}, {duration: 2, opacity:1, scrollTrigger: {trigger: ".contact-title", markers: false, start: 'top 60%'}})
    gsap.fromTo(".contact-subtitle", {opacity:0}, {duration: 2, opacity:1, scrollTrigger: {trigger: ".contact-title", markers: false, start: 'top 60%'}})
    gsap.fromTo(".contact-email", { duration: 3, y:100, opacity:0}, {duration: 4, y:0, opacity:1, scrollTrigger: {trigger: ".contact-title", markers: false, start: 'top 60%'}})


  })

    
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-title">
          This is just a project<span className="dot">...</span>
        </div>
        <div className="contact-subtitle">
          Do you want to see what I'm truly capable of
          <span className="dot">?</span>
        </div>
        <div className="contact-email">alexsadowski.dev@gmail.com</div>
      </div>
    </div>
  );
};

export default Contact;
