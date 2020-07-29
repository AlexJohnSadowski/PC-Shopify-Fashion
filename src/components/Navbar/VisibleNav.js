import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { Link } from 'react-router-dom'



const VisibleNav = () => {

    const { openCart } = useContext(ShopContext);

  return (
    <>
      <Link to="/products" className="shop">
        Collection
      </Link>
      <Link onClick={() => openCart()} className="shop">
        Cart
      </Link>
    </>
  );
};

export default VisibleNav;
