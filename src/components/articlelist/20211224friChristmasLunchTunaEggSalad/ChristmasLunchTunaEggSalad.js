import React from 'react';
import picture1 from './20211224tunaeggsalad.jpg';
import picture2 from './20211224lunchpotatosalad.jpg';

function ChristmasLunch() {
  return (
    <div>
      <h1>Christmas Lunch クリスマスランチ～ツナタマサラダ～</h1>
      <h3>Fri 24.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tuna-egg-salad-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Tuna can 1 (190g)</li>
            <li>Cabbage 3-4 leaves</li>
            <li>Eggs 2</li>
            <li>Mayo 3 tbsp</li>
            <li>Mentsuyu 1 tbsp</li>
            <li>Salt</li>
            <li>Black pepper</li>
            <li>Mini tomatoes</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Thin slice cabbage and add salt</li>
          <li>Make boiled eggs (small ones for 6 min 40 sec, big ones for 7 min)</li>
          <li>Drain water from the cabbage</li>
          <li>Mix with mayo, tuna and mentsuyu</li>
          <li>Decolate with mini tomatoes, eggs and pepper</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='xmas-lunch-pic' />
    </div>
  )
}

export default ChristmasLunch;
