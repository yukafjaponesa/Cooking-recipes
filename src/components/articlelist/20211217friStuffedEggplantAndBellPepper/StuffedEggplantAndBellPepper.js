import React from 'react';
import picture1 from './20211217stuffedeggplantandbellpepper.jpg';

function StuffedEggplantAndBellPepper() {
  return (
    <div>
      <h1>Stuffed Eggplant And Bell Pepper</h1>
      <h1>ナスとピーマンの肉詰め</h1>
      <h3>Fri 17.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='stuffed-vegs-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Graind meat 250g</li>
            <li>Eggplant 1</li>
            <li>Green bell pepper 1</li>
            <li>Salt & pepper</li>
            <li>Egg york 1</li>
            <li>Flour 1 tbsp</li>
            <li>Consome 1 tsp</li>
            <li>Tomato can 1(200g)</li>
            <li>Cheese, paserly</li>
            <li>Ketchap 2 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut vegs in half. Remove inside of eggplant and chop.</li>
          <li>Mix meat, chopped eggplant, salt & pepper, egg york</li>
          <li>Cover vegs with flour and stuff with meat</li>
          <li>Add oil in a pan and cook from meat side</li>
          <li>Flip the stuffed stuff and add tomato can, Consome and ketchap to cook</li>
          <li>Top with cheese and paserly</li>
        </ol>
      </div>
    </div>
  )
}

export default StuffedEggplantAndBellPepper;
