import React from "react";

import photo1 from '../../images/photo1.jpg'

import photo2 from '../../images/photo2.jpg'

import photo3 from '../../images/photo3.jpg'

import photo4 from '../../images/photo4.jpg'

import photo5 from '../../images/photo5.jpg'

import photo6 from '../../images/photo6.jpg'

import photo7 from '../../images/photo7.jpg'

import photo8 from '../../images/photo8.jpg'


const Grid = () => {
  return (
    <>
      <div class="row" id="gallery">
        <div class="column">
          <img src={photo6} />
          <img src={photo5} />
          <img src={photo8} />
          
        </div>
        <div class="column">
          <img src={photo3} />
          <img src={photo4} />
          
        </div>
        <div class="column">
          <img src={photo7} />
          <img src={photo2} />
        </div>
      </div>
    </>
  );
};

export default Grid;
