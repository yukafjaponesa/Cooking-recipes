import React from 'react';
import picture1 from './20220325eggporridge.jpg';

function EggPorridge() {
  return (
    <div>
      <h1>Egg Porridge たばご雑炊</h1>
      <h3>Fri 25.03.2022</h3>
      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='egg-porridge' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cooked rice  100g</li>
            <li>Powdered dashi 1 tsp</li>
            <li>Soy sauce 1 tsp</li>
            <li>Salt</li>
            <li>Water 200ml</li>
            <li>Beaten egg 1</li>
            <li>Chopped spring onion</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add all the ingredients except spring i onion and beaten egg to boil</li>
          <li>Add egg</li>
          <li>Top with spring onion</li>
        </ol>
      </div>
    </div>
  )
}

export default EggPorridge;
