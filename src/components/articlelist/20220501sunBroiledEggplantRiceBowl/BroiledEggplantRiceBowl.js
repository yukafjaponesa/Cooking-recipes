import React from 'react';
import picture1 from './20220501broiledeggplant.jpg';

function BroiledEggplantRiceBowl() {
  return (
    <div>
      <h1>Broiled Eggplant Rice Bowl ナスの蒲焼き丼</h1>
      <h3>Sun 01.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='broiled-eggplant' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Eggplant 1 - 2</li>
            <li>Mirin, sake, soy sauce 2 tbsp</li>
            <li>Sugar 1 tbsp</li>
            <li>Rice 200g</li>
            <li>Seaweed</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Peel eggplant skin</li>
          <li>Microwave oven 600w 3 min to soften</li>
          <li>Add ingredients in a pan to boil</li>
          <li>Add eggplant</li>
          <li>Put seaweed on rice</li>
        </ol>
      </div>
    </div>
  )
}

export default BroiledEggplantRiceBowl;
