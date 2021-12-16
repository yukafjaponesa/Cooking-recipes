import React from 'react';
import picture1 from './20211216fishpack.jpg';
import picture2 from './20211216fishbeforeoven.jpg';
import picture3 from './20211216fishafteroven.jpg';
import picture4 from './20211216fishinside.jpg';
import picture5 from './20211216fishonplate.jpg';

function OvenFish() {
  return (
    <div>
      <h1>Oven Fish 魚のオーブン焼き</h1>
      <h3>Thu 16.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture5} alt='oven-fish1-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Frozen fish 400g x 2</li>
            <li>Your fav vegs</li>
            <li>Cabbage, carrot, onion, potato, paprika</li>
            <li>Milk, cheese, pepper, italian herbs</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add fish in oven plate</li>
          <li>Chop vegs in small pieces</li>
          <li>Add all in plate and bake for 40 min 200℃</li>
        </ol>
      </div>
      <img className='food-pic' src={picture1} alt='fish-pack-pic' />
      <br />
      <img className='food-pic' src={picture2} alt='fish-before-oven-pic' />
      <br />
      <img className='food-pic' src={picture3} alt='fish-after-oven-pic' />
      <br />
      <img className='food-pic' src={picture4} alt='fish-inside-pic' />
    </div>
  )
}

export default OvenFish;
