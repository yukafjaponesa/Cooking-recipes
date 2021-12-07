import React from 'react';
import picture1 from './20211206smokedsalmonsushicakecut.jpg';
import picture2 from './20211206chirashizushifront.jpg';
import picture3 from './20211206chirashizushiback.jpg';
import picture4 from './20211206chirashizushipack.jpg';
import picture5 from './20211206smokedsalmonsushicake.jpg';

function SmokedSalmonSushiCake() {
  return (
    <div>
      <h1>Smoked Salmon Sushi Cake サーモン押し寿司</h1>
      <h3>Mon 06.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='salmon-sushicake-cut-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Rice 1.5 cups</li>
            <li>Chirashizushi 1 pack for 2 portions</li>
            <li>Smoked salmon 200g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook rice normally or with a bit less water</li>
          <li>After cooked, add chirashi zushi pack and mix well</li>
          <li>Put a wrap in a bowl and add salmon → rice → salmon → rice</li>
          <li>Pile some plates and push it</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='chirashizushi-front-pic' />
      <br />
      <img className='food-pic' src={picture3} alt='chirashizushi-back-pic' />
      <br />
      <img className='food-pic' src={picture4} alt='chirashizushi-pack-pic' />
      <br />
      <img className='food-pic' src={picture5} alt='salmon-sushicake-cut-pic' />
    </div>
  )
}

export default SmokedSalmonSushiCake;
