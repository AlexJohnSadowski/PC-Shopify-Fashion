import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { Link } from 'react-router-dom'
import MediaQuery from "react-responsive";


const VisibleNav = () => {

    const { openCart } = useContext(ShopContext);

  return (
    <>
    <MediaQuery minDeviceWidth={1025}>
      <Link to="/products" className="shop">
        Products
      </Link>
      <Link onClick={() => openCart()} className="shop">
        Cart
      </Link>
    </MediaQuery>
    </>
    
  );
};

export default VisibleNav;
