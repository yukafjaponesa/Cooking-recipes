import React from 'react';
import picture1 from './20220530orangemangocarrotsmoothie.jpg';
import picture2 from './20220530mixer.jpg';

function OrangeMangoCarrotSmoothie() {
  return (
    <div>
      <h1>Orange Mango Carrot Smoothie オレンジマンゴーキャロットスムージー</h1>
      <h3>Mon 30.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='orange-mango-carrot' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Orange juice</li>
            <li>Orange 2 -3 slices</li>
            <li>Mango</li>
            <li>Carrot</li>
            <li>Water or ice cubes</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop mango, shred carrot</li>
          <li>Mix</li>
          <img className='food-pic' src={picture2} alt='mixer' />
        </ol>
      </div>
    </div>
  )
}

export default OrangeMangoCarrotSmoothie;
