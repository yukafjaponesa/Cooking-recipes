import React from 'react';
import picture1 from './20220122spicysoupvergyoza.jpg';

function SpicySoupverGyoza() {
  return (
    <div>
      <h1>Spicy Soup ver. Gyoza 餃子風ピリ辛スープ</h1>
      <h3>Sat 22.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='gyoza-ver-soup' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>☆Mixed minced meat 150g</li>
            <li>☆Graind ginger & garlic 1/2 tsp/ea</li>
            <li>Water 500ml</li>
            <li>Soy sauce, konsome 1 tbsp/ea</li>
            <li>Gyoza or Wantan paper 8</li>
            <li>Chinese chives or Green onion 1/2 stick</li>
            <li>Chili oil 1/2 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add ☆ in a pot and cook meat</li>
          <li>Add water, soy sauce and konsome to boil</li>
          <li>Add the rest of the ingredients till cooked</li>
        </ol>
      </div>
    </div>
  )
}

export default SpicySoupverGyoza;
