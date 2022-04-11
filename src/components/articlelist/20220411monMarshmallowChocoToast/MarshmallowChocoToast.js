import React from 'react';
import picture1 from './20220411marshmallowchocotoast1.jpg';
import picture2 from './20220411marshmallowchocotoast2.jpg';

function MarshmallowChocoToast() {
  return (
    <div>
      <h1>Marshmallow Choco Toast マシュマロチョコトースト</h1>
      <h3>Mon 11.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='marshmallow-choco-toast1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Toast 1</li>
            <li>Chocolate 50g</li>
            <li>Marshmallow</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop chocolate</li>
          <li>Toast the bread for 1 min</li>
          <li>Top with chocolate and marshmallow and toast it for 3 min</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='marshmallow-choco-toast2' />
    </div>
  )
}

export default MarshmallowChocoToast;
