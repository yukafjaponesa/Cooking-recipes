import React from 'react';
import picture1 from './20220503potatomeatgratin.jpg';

function PotatoMeatGratin() {
  return (
    <div>
      <h1>Potato Meat Gratin ポテトミートグラタン</h1>
      <h3>Tue 03.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='potato-meat-gratin' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Ground meat 250g</li>
            <li>Chopped onion 1</li>
            <li>Tomato can 1(400g)</li>
            <li>Ketchup 2 tbsp</li>
            <li>Uster sauce 中濃ソース 2 tbsp</li>
            <li>Soy sauce 1 tsp</li>
            <li>Sugar 1/2 tbsp</li>
            <li>Ground garlic 1 tsp</li>
            <li>Consomme 1 tsp</li>
            <li>Salt & pepper</li>
            <li>Potato 4</li>
            <li>Milk 2 tbsp</li>
            <li>Cheese, paserly</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Make mashed potato(milk and salt & pepper)</li>
          <li>Stir fry other ingredients</li>
          <li>Layer of mased potato and meat sauce oven 180℃ 15 - 20 min</li>
        </ol>
      </div>
    </div>
  )
}

export default PotatoMeatGratin;
