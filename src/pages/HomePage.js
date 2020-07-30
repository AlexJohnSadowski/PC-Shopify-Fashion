import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";


const Homepage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);


  if (!products) return <div>loading</div>;
  return (
    <div className="bg-container">
        <div className="bg-img">
            <div className="container">
              <div className="bg-title">P<span className="dot">.</span></div>
              <div className="bg-subtitle">Stands for prestige.</div>
            </div>
            
            
        </div>
    </div>
 
  );
};

export default Homepage;
