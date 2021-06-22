import React from 'react';
import picture1 from './20210621beefstew.jpg';
import picture2 from './20210621beefstewroux.jpg';

function BeefStew() {
  return (
    <div>
      <h1>Beef Stew ビーフシチュー</h1>
      <h3>Mon 21.06.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='beefstew-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Beef</li>
            <li>Onion</li>
            <li>Potato</li>
            <li>Carrot</li>
            <li>Beef stew roux - half package</li>
            <li>Water 400ml</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Start cooking rice</li>
          <li>Stir fry ingredients and add water</li>
          <li>After boiling, let it cook for 10 min</li>
          <li>Stop the stove and add roux</li>
          <li>Cook for 5 min with low heat</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='beefstew-roux-pic' />
    </div>
  )
}

export default BeefStew;
