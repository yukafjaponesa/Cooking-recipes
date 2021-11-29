import React from 'react';
import picture1 from './20211129pumpkinsoup.jpg';

function PumpkinSoup() {
  return (
    <div>
      <h1>Pumpkin Soup かぼちゃスープ</h1>
      <h3>Mon 29.11.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='pumpkin-soup-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pumpkin 1/4 without skin</li>
            <li>Sliced onion</li>
            <li>Foulr 1 tbsp</li>
            <li>Milk 300ml</li>
            <li>Soy sauce, sugar 1 tsp/ea</li>
            <li>Peserly</li>
            <li>Chicken powder 1 tsp</li>
            <li>Butter</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Steam pumpkin</li>
          <li>Stir fry onion with butter and add flour</li>
          <li>Smash/beaten pumpkin and add to onion</li>
          <li>Add other ingredients and cook with low heat</li>
          <li>Top with peserly</li>
        </ol>
      </div>
    </div>
  )
}

export default PumpkinSoup;
