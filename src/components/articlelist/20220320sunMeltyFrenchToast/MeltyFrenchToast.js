import React from 'react';
import picture1 from './20220320meltyfrenchtoast.jpg';

function MeltyFrenchToast() {
  return (
    <div>
      <h1>Melty French Toast とろとろフレンチトースト</h1>
      <h3>Sun 20.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='melty-french-toast' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Toast 1</li>
            <li>Egg 1</li>
            <li>Milk 100cc</li>
            <li>Sugar 2 tsp</li>
            <li>Butter 20g</li>
            <li>Powder sugar, honey</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Make holes in toast with a fork</li>
          <li>Cut in 4 pieces</li>
          <li>Add egg, milk and sugar in a bowl and mix</li>
          <li>Sink toast in it</li>
          <li>Add butter in a pan and cook with low heat</li>
          <li>Topping: hoeny and powder sugar</li>
        </ol>
      </div>
    </div>
  )
}

export default MeltyFrenchToast;
