import React from 'react';
import picture1 from './20220316bacongingertoast.jpg';

function BaconGingerToast() {
  return (
    <div>
      <h1>Bacon Ginger Toast ベーコンで生姜焼きトースト</h1>
      <h3>Wed 16.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='bacon-ginger-toast' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sliced onion 30g</li>
            <li>Bacon 1(cut in 5 slices)</li>
            <li>Soy sauce 2 tsp</li>
            <li>Sake, mirin & graind ginger 1tsp/ea</li>
            <li>Chopped cabagge 30g</li>
            <li>Toast 1 slice</li>
            <li>Mayo</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Mix sauce</li>
          <li>Add oil in a pan and stir onion</li>
          <li>Add bacon to grill and then add sauce</li>
          <li>Toast a toast and add cabagge, onion, bacon and mayo</li>
        </ol>
      </div>
    </div>
  )
}

export default BaconGingerToast;
