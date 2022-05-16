import React from 'react';
import picture1 from './20220528butterchicken.jpg';

function ButterChickenCurry2() {
  return (
    <div>
      <h1>Butter Chicken Curry2 バターチキンカレー2</h1>
      <h3>Sat 28.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='butter-chicken' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 200g</li>
            <li>Chopped onion 1/2</li>
            <li>Tomato can 200g</li>
            <li>Ketchup 1 tbsp</li>
            <li>Consomme 1 tsp</li>
            <li>Ground garlic 1/2 tsp</li>
            <li>Butter 30g</li>
            <li>Curry roux 20g(2 pieces)</li>
            <li>Milk 100cc</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add oil in a pan and cook chicken and onion</li>
          <li>Add tomato can, ketchup, consomme and garlic and cook chicken</li>
          <li>Add butter and curry and then milk</li>
        </ol>
      </div>
    </div>
  )
}

export default ButterChickenCurry2;
