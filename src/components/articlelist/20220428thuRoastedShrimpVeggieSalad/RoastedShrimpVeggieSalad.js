import React from 'react';
import picture1 from './20220428roastedshrimpsveggiesalda.jpg';
import picture2 from './20220428beforebake.jpg';
import picture3 from './20220428shrimpbeforebake.jpg';
import picture4 from './20220428dressing.jpg';
import picture5 from './20220428afterbake.jpg';
import picture6 from './20220428roastedshrimpveggiesaladbeforemix.jpg';

function RoastedShrimpVeggieSalad() {
  return (
    <div>
      <h1>Roasted Shrimp Veggie Salad ローストエビのサラダ</h1>
      <h3>Thu 28.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='roast-shrimp-veggies-salad' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Mini tomato, shred carrot, yellow bell pepper</li>
            <li>Red onion, green asparagus 1 cup/ea</li>
            <li>Olive oil, salt, pepper</li>
            <li>Oregano, chili powder</li>
            <li>Shrip 1 LB</li>
            <li>***For dressing***</li>
            <li>Lime juice 3 tbsp</li>
            <li>Olive oil 2 tbsp</li>
            <li>Hoeny 1 tbsp</li>
            <li>Chili powder 1/2 tsp</li>
            <li>Salt & pepper</li>
            <li>Green salad</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Mix veggies with ingredients and bake or 10 min 200℃</li>
          <img className='food-pic' src={picture2} alt='before-bake' />
          <li>Add shrimps and add ingredients on it and bake for 5 - 8 min</li>
          <img className='food-pic' src={picture3} alt='shrimp-before-bake' />
          <li>Make dressing</li>
          <img className='food-pic' src={picture4} alt='dressing' />
          <li>Add veggies on greens</li>
          <img className='food-pic' src={picture5} alt='after-bake' />
          <li>Pour dressing and mix</li>
          <img className='food-pic' src={picture6} alt='before-mix' />
        </ol>
      </div>
    </div>
  )
}

export default RoastedShrimpVeggieSalad;
