import React from 'react';
import picture1 from './20220529chickenstew.jpg';

function ChickenStewInTomatoSauce() {
  return (
    <div>
      <h1>Chicken Stew In Tomato Sauce チキンのトマト煮</h1>
      <h3>Sun 29.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chicken-in-tomato' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chopped garlic 1 glove</li>
            <li>Sliced onion 80g</li>
            <li>Chicken 250g</li>
            <li>Olive oil 1 tbsp</li>
            <li>Tomato can 200g</li>
            <li>Red wine 1 tbsp</li>
            <li>Consomme 2 tsp</li>
            <li>Salt & pepper</li>
            <li>Powdered cheese</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add oil and garlic in a pan</li>
          <li>Add onion and chicken</li>
          <li>Add other ingredients</li>
        </ol>
      </div>
    </div>
  )
}

export default ChickenStewInTomatoSauce;
