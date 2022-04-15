import React from 'react';
import picture1 from './20220415starbucksscone.jpg';
import picture2 from './20220415sconedough.jpg';
import picture3 from './20220415sconebeforebaked.jpg';

function StarbucksScone() {
  return (
    <div>
      <h1>Starbucks Scone スタバ風スコーン</h1>
      <h3>Fri 15.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='starbucks-scone' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pancake mix 150g</li>
            <li>Chocolate 100g</li>
            <li>Unsalted butter 30g</li>
            <li>Milk 4 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 180℃</li>
          <li>Add pancake mix and melted butter and mix(I added extra 100g flour and 1tbsp milk)</li>
          <li>Add milk in it</li>
          <li>Add chopped chocolate in it and make it gather</li>
          <img className='food-pic' src={picture2} alt='scone-dough' />
          <li>Make it 2 cm high and slice in 6 pieces</li>
          <img className='food-pic' src={picture3} alt='scone-before-bake' />
          <li>Bake for 20min</li>
        </ol>
      </div>
    </div>
  )
}

export default StarbucksScone;
