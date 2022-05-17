import React from 'react';
import picture1 from './20220531avotoast.jpg';
import picture2 from './20220531avoscrumble.jpg';

function AvoToast() {
  return (
    <div>
      <h1>Avo Toast アボトースト</h1>
      <h3>Tue 31.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='orange-mango-carrot' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Avocado 1/2</li>
            <li>Chopped spring onion</li>
            <li>Egg 1</li>
            <li>Toast 1</li>
            <li>Sriracha</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add oil in a pan and stir avocado</li>
          <li>Add egg and mix to make scrumble egg</li>
          <img className='food-pic' src={picture2} alt='scrumble-egg' />
          <li>Add spring onion and slat & pepper to taste</li>
        </ol>
      </div>
    </div>
  )
}

export default AvoToast;
