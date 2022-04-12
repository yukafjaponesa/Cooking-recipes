import React from 'react';
import picture1 from './20220413broccolicarbonara.jpg';

function BroccoliCarbonara() {
  return (
    <div>
      <h1>Broccoli Carbonara ブロッコリーカルボナーラ</h1>
      <h3>Wed 13.04.2022</h3>
      <h4>For 2 servings</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='broccoli-carbonara' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Spaghetti 160g</li>
            <li>Bacon 4 slices</li>
            <li>Broccoli 1/2</li>
            <li>Olive oil 1/2 tbsp</li>
            <li>Ground garlic 1/4 tsp</li>
            <li>Milk 200cc</li>
            <li>Water 200ml</li>
            <li>Salt 1/3 tsp</li>
            <li>Pepper</li>
            <li>Powdered cheese 4 tbsp</li>
            <li>Beaten egg 1</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut broccoli, slice bacon in 1 cm</li>
          <li>Add olive oil in a pan and cook bacon and garlic</li>
          <li>Add ilk, water salt & pepper to boil and add spagehtti to cook 2 min shorter than shown on the paper</li>
          <li>Add broccoli and put a lid and cook for 2 min</li>
          <li>Mix and turn off the heat and add beaten egg and cheese</li>
          <li>Add black pepper if you like</li>
        </ol>
      </div>
    </div>
  )
}

export default BroccoliCarbonara;
