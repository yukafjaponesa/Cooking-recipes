import React from 'react';
import picture1 from './20220419cucumberapplemintsmoothie.jpg';
import picture2 from './20220419mixer.jpg';

function CucumberAppleMintSmoothie() {
  return (
    <div>
      <h1>Cucumber Apple Mint Smoothie きゅうりりんごミントスムージー</h1>
      <h3>Tue 19.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='cucumber-apple-mint-smoothie' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cucumber</li>
            <li>Mint</li>
            <li>Green apple</li>
            <li>Honey</li>
            <li>Avocado</li>
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

export default CucumberAppleMintSmoothie;
