import React from 'react';
import picture1 from './20210919poacedegg.jpg';

function PoacedEggBreaky() {
  return (
    <div>
      <h1>Poaced Egg Breaky ポーチドエッグ</h1>
      <h3>Sun 19.09.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='poacedegg-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Boiled water</li>
            <li>Vinegar 1 tbsp</li>
            <li>Salt 1 tsp</li>
            <li>Bread / Sourdough</li>
            <li>Egg 2</li>
            <li>Avocado</li>
            <li>Ham or bacon</li>
            <li>Tomato or paprika</li>
            <li>Persely, dill etc</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>After boiling water, add vinegar and salt</li>
          <li>Turn off the heat and mix water</li>
          <li>Add egg softly in the middle and turn on heat to the lowest and cook for 4 min</li>
          <li>Spread avocado on toast</li>
          <li>Add ham, herbs on egg and toast</li>
        </ol>
      </div>
    </div>
  )
}

export default PoacedEggBreaky;
