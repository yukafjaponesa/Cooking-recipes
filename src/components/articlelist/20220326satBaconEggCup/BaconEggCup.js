import React from 'react';
import picture1 from './20220326baconeggcup.jpg';
import picture2 from './20220326bacon.jpg';
import picture3 from './20220326baconeggcupcut.jpg';

function BaconEggCup() {
  return (
    <div>
      <h1>Bacon Egg Cup ベーコンエッグカップ</h1>
      <h3>Sat 26.03.2022</h3>
      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='bacon-egg-cup' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Bacon 1</li>
            <li>Egg 1</li>
            <li>Water 1 tbsp</li>
            <li>Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Fold bacon in half and make a cup shape</li>
          <img className='food-pic' src={picture2} alt='bacon' />
          <li>Pour egg in bacon and add water in pan and close the lid</li>
          <img className='food-pic' src={picture3} alt='baconegg-cup-cut' />
        </ol>
      </div>
    </div>
  )
}

export default BaconEggCup;
