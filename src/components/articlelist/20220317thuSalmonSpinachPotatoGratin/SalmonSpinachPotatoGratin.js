import React from 'react';
import picture1 from './20220317salmonspinachpotatogratin.jpg';

function SalmonSpinachPotatoGratin() {
  return (
    <div>
      <h1>Salmon Spinach Potato Gratin 鮭とほうれん草のポタとグラタン</h1>
      <h3>Thu 17.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='salmon-spinach-potato-gratin' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sliced onion half</li>
            <li>Peeled potato 2</li>
            <li>Spinach 100g</li>
            <li>Flour 15g</li>
            <li>Milk 200ml</li>
            <li>Cheese 50g</li>
            <li>Salt</li>
            <li>Butter</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Slice potatoes and add in water<  /li>
          <li>Add butter in a pan and stir salmon and make it in small pieces</li>
          <li>Remove salmon and add butter in the same pan and cook onion</li>
          <li>Add flour and mix well and then add milk</li>
          <li>Add spinach and salmon and salt to the taste</li>
          <li>Pre heat oven 200℃</li>
          <li>Add cream → potato in a plate and bake for 15 min</li>
        </ol>
      </div>
    </div>
  )
}

export default SalmonSpinachPotatoGratin;
