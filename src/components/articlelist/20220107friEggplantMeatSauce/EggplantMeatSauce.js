import React from 'react';
import picture1 from './20220107eggplantmeatsauce.jpg';

function EggplantMeatSauce() {
  return (
    <div>
      <h1>Eggplant Meat Sauce ナスのミートソース丼</h1>
      <h3>Fri 07.01.2022</h3>


      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='eggplant-meat-sauce' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Eggplant 1</li>
            <li>Graind meat 250g</li>
            <li>Onion 1</li>
            <li>Ketchap 3 tbsp</li>
            <li>Consome 1 tsp</li>
            <li>Paserly</li>
            <li>Rice</li>
            <li>Olive oil</li>
            <li>Boiled egg</li>
            <li>Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Start cooking rice</li>
          <li>Chop onion</li>
          <li>Add olive oil in a pan</li>
          <li>Stir fri meat → onion → eggplant</li>
          <li>Add ketchap and consome and salt & pepper</li>
        </ol>
      </div>
    </div>
  )
}

export default EggplantMeatSauce;
