import React from 'react';
import picture1 from './20220323honeycheese1bitefrenchtoast.jpg';

function HoneyCheese1biteFrenchToast() {
  return (
    <div>
      <h1>Honey Cheese 1 bite French Toast</h1>
      <h1>はちみつとチーズの1口フレンチトースト</h1>
      <h3>Wed 23.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='honey-cheese-1bite-french-toast' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Toast 2 slices</li>
            <li>Egg 1</li>
            <li>Milk  150cc</li>
            <li>Sugar 1 tbsp</li>
            <li>Butter 20g</li>
            <li>Honey, powdered cheese</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut toasts in 9 pieces</li>
          <li>Add milk, sugar and egg in a bowl and mix</li>
          <li>Sink toasts in it</li>
          <li>Add butter in a pan and cook toast with low heat</li>
          <li>Topping: honey, powdered cheese</li>
        </ol>
      </div>
    </div>
  )
}

export default HoneyCheese1biteFrenchToast;
