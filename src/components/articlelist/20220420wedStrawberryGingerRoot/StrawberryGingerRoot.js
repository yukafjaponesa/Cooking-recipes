import React from 'react';
import picture1 from './20220420strawberrygingerroot.jpg';
import picture2 from './20220420mixer.jpg';

function StrawberryGingerRoot() {
  return (
    <div>
      <h1>Strawberry Ginger Root Smoothie いちごジンジャールートスムージー</h1>
      <h3>Wed 20.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='strawberry-ginger-root' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Strawberry</li>
            <li>Lettuce</li>
            <li>Beetroot</li>
            <li>Banana</li>
            <li>Ginger</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Mix all with a bit of water</li>
          <img className='food-pic' src={picture2} alt='mixer' />
        </ol>
      </div>
    </div>
  )
}

export default StrawberryGingerRoot;
