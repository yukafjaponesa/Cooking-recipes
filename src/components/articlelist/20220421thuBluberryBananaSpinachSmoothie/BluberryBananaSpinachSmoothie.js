import React from 'react';
import picture1 from './20220421blueberrybananaspinach.jpg';
import picture2 from './20220421mixer.jpg';

function BluberryBananaSpinachSmoothie() {
  return (
    <div>
      <h1>Bluberry Banana Spinach Smoothie ブルーベリーバナナほうれん草スムージー</h1>
      <h3>Thu 21.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='bluberry-banana-spinach' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Blueberry</li>
            <li>Banana</li>
            <li>Spinach</li>
            <li>Water or milk</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Mix all</li>
          <img className='food-pic' src={picture2} alt='bluberry-banana-spinach-mixer' />
        </ol>
      </div>
    </div>
  )
}

export default BluberryBananaSpinachSmoothie;
