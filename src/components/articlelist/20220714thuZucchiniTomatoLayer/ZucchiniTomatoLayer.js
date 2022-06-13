import React from 'react';
import picture1 from './20220714zucchiniomatolayer.jpg';

function ZucchiniTomatoLayer() {
  return (
    <div>
      <h1>Zucchini Tomato Layer ズッキーニとトマトの重ね焼き</h1>
      <h3>Thu 14.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='zucchini-tomato-layer' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Zucchini 1</li>
            <li>Tomato 1</li>
            <li>Bacon 4 slices</li>
            <li>Pizza cheese 40g</li>
            <li>Salt 1/4 tsp</li>
            <li>Balck pepper</li>
            <li>Olive oil 1 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Slice zucchini 1 cm width, cut tomato and bacon</li>
          <li>Make layer of zucchini, bacon and tomato</li>
          <li>Add salt, pepper and olive oil</li>
          <li>Toaster 10 - 15 min</li>
        </ol>
      </div>
    </div>
  )
}

export default ZucchiniTomatoLayer;
