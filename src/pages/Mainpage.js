import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";

import About from "../components/Mainpage/About";
import Grid from "../components/Mainpage/Grid";
import Contact from "../components/Mainpage/Contact";

import gsap from "gsap";



const Mainpage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);

  useEffect(() => {

    gsap.fromTo(".bg-title", {delay:2, x:100, opacity:0}, { duration: 2, x:0, opacity:1})
    gsap.fromTo(".bg-subtitle", {x:-200, delay:3, opacity:0}, { duration: 2, x:0, opacity:1})
  


  },[])

  if (!products) return <div>loading</div>;
  return (
    <>
      <div className="bg-container">
        <div className="bg-img">
          <div className="container">
            <div className="bg-title">
              P<span className="dot">.</span>
            </div>
            <div className="bg-subtitle">Stands for prestige.</div>
          </div>
        </div>
      </div>
      <About />
      <Grid />
      <Contact />
    </>
  );
};

export default Mainpage;
