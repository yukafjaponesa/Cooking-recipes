import React from 'react';
import picture1 from './20220716spinachwrap.jpg';
import picture2 from './20220716inside.jpg';
import picture3 from './20220716hotsand.jpg';

function SpinachWarp() {
  return (
    <div>
      <h1>Spinach Warp ほうれん草ラップ</h1>
      <h3>Sat 16.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='spinach-wrap' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Tortilla</li>
            <li>Spinach</li>
            <li>Cream cheese</li>
            <li>Tomato</li>
            <li>Cheese</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Spread cream cheese</li>
          <li>Add spinach, tomato and cheese</li>
          <img className='food-pic' src={picture2} alt='inside' />
          <li>Sand with a waffle maker</li>
          <img className='food-pic' src={picture3} alt='hotsand' />
        </ol>
      </div>
    </div>
  )
}

export default SpinachWarp;
