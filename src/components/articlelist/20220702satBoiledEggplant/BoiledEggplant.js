import React from 'react';
import picture1 from './20220702boiledeggplant.jpg';

function BoiledEggplant() {
  return (
    <div>
      <h1>Boiled Eggplant めんつゆで簡単ナスの煮びたし</h1>
      <h3>Sat 02.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='boiled-eggplant' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Eggplant 2 smalls</li>
            <li>Radish 100g</li>
            <li>Oil</li>
            <li>Mentsuyu, water 50ml/ea</li>
            <li>Ground ginger 10g</li>
            <li>Spring onion</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut eggplants and score in skin side</li>
          <li>Add oil in a pan and stir eggplant</li>
          <li>Add shreded radish</li>
          <li>Add others and boil</li>
        </ol>
      </div>
    </div>
  )
}

export default BoiledEggplant;
