import React from 'react';
import picture1 from './20220427leeksaltpasta.jpg';

function LeekSaltPasta() {
  return (
    <div>
      <h1>Leek Salt Pasta ネギ塩パスタ</h1>
      <h3>Wed 27.04.2022</h3>
      <h4>For 1 serving</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='leek-salt-pasta' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Spaghetti 100g</li>
            <li>Leek 1/4</li>
            <li>Thin sliced pork 80g</li>
            <li>Chilli</li>
            <li>Oil</li>
            <li>Sake 1 tbsp</li>
            <li>Salt 1/3 tsp</li>
            <li>Dashi powder 1/2 tsp</li>
            <li>Water 600ml</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop chili and leek</li>
          <li>Add oil in a pan and cook pork</li>
          <li>Add chili, sake, salt, dashi and water in it</li>
          <li>After boiled, add spaghetti and cook as it shows</li>
          <li>Put on a plate and top with leek and soup</li>
        </ol>
      </div>
    </div>
  )
}

export default LeekSaltPasta;
