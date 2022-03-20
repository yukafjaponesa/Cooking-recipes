import React from 'react';
import picture1 from './20220322cucumberbaconrollwithmayo.jpg';
import picture2 from './20220322slicedcucumber.jpg';
import picture3 from './20220322baconroll.jpg';

function CucumberBaconRollWithMayo() {
  return (
    <div>
      <h1>Cucumber Bacon Roll With Mayo きゅうりのベーコン巻きマヨ炒め</h1>
      <h3>Tue 22.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='taiwanese-mixed-udon' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cucumber 1</li>
            <li>Bacon 8 slices</li>
            <li>Mayo 1 tbsp</li>
            <li>Black pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut cucumber in 8 pieces</li>
          <li>Roll with bacon</li>
          <li>Add mayo in a pan and stir</li>
          <li>Add black pepper</li>
        </ol>
      </div>
    </div>
  )
}

export default CucumberBaconRollWithMayo;
