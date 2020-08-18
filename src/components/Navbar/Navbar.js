import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";

import Burger from './Burger'
import VisibleNav  from './VisibleNav'

const Navbar = () => {

  useEffect(() => {

    gsap.fromTo("nav", {delay:2, opacity:0}, { duration: 3, opacity:1})


  },[])
  

  return (
    <nav>
      <Link to="/" className="logo">
        Patrice Cadet
      </Link>
        <VisibleNav />
        <Burger />
    </nav>
  );
};

export default Navbar;
