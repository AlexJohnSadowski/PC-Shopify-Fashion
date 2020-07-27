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
            <div className="bg-title">P.</div>
            <div className="bg-subtitle">Stands for prestige.</div>
            
        </div>
    </div>
 
  );
};

export default Homepage;
