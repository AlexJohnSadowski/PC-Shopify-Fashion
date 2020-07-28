import React, { useContext } from "react";
import { Anchor, Icon } from "atomize";
import { Link } from "react-router-dom";


import Burger from './Burger'
import VisibleNav  from './VisibleNav'

const Navbar = () => {
  

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
