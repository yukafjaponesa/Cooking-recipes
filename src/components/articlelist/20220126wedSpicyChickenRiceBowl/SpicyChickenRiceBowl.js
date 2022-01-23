import React from 'react';
import picture1 from './20220126spicychickenricebowl.jpg';

function SpicyChickenRiceBowl() {
  return (
    <div>
      <h1>Spicy Chicken Rice Bowl 鶏ひき肉のピリ辛親子丼</h1>
      <h3>Wed 26.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='spicy-oyakodon' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chinese chives 10g</li>
            <li>Sesame oil 1 tsp</li>
            <li>Minced chicken 80g</li>
            <li>Kimchi 40g</li>
            <li>Boiled or raw egg</li>
            <li>Oyster sauce, sake 1 tsp/ea</li>
            <li>Graind ginger 1/2 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Start cooking rice</li>
          <li>Cut chinese chives</li>
          <li>Add sesame oil in a pan and cook meat and then chinese chives</li>
          <li>Add kimchi and slightly cook and add other ingredients</li>
          <li>Top with egg</li>
        </ol>
      </div>
    </div>
  )
}

export default SpicyChickenRiceBowl;
