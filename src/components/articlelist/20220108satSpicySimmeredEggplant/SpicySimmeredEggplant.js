import React from 'react';
import picture1 from './20220108spicysimmeredeggplant.jpg';

function SpicySimmeredEggplant() {
  return (
    <div>
      <h1>Spicy Simmered Eggplant ピリ辛ナスの中華風おひたし</h1>
      <h3>Sat 08.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='simmered-eggplant' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Eggplant 3 small</li>
            <li>Sake, vinegar, sugar, soy sauce, water 1 tbsp/ea</li>
            <li>Konsome 2 tsp</li>
            <li>Chili oil 1 tsp</li>
            <li>Sesame oil 3 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add sesame oil in a pan and stir fri eggplants</li>
          <li>Add other ingredients in a bowl and heat it before boiling</li>
          <li>Add eggplants in sauce and cool down for 30 min in fridge</li>
          <li>Top with green onion and sesame</li>
        </ol>
      </div>
    </div>
  )
}

export default SpicySimmeredEggplant;
