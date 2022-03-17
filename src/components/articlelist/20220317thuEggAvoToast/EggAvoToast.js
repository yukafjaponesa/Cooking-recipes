import React from 'react';
import picture1 from './20220317eggavotoast.jpg';

function EggAvoToast() {
  return (
    <div>
      <h1>Egg Avo Toast とろーり卵のアボカドトースト</h1>
      <h3>Thu 17.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='egg-avo-toast' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Toast 1</li>
            <li>Egg 1</li>
            <li>Half avocado</li>
            <li>Mayo 1 tbsp</li>
            <li>Lemon juice 1 tsp</li>
            <li>Cheese</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Smash avocado and mix with mayo and lemon juice</li>
          <li>Put avo sauce on toast and add raw egg in the middle</li>
          <li>Put cheese around the egg and toast for 5 min with toaster</li>
        </ol>
      </div>
    </div>
  )
}

export default EggAvoToast;
