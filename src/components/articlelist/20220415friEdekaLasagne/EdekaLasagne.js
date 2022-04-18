import React from 'react';
import picture1 from './20220415edekalasagne.jpg';
import picture2 from './20220415edekalasagnepack.jpg';

function EdekaLasagne() {
  return (
    <div>
      <h1>Edeka Lasagne エデカの冷凍ラザニア</h1>
      <h3>Fri 15.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='edeka-lasgne' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Edeka frozen lasagne</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Bake for 35 - min 40 min in oven 180℃ without defrost</li>
          <img className='food-pic' src={picture2} alt='edeka-lasgne-pack' />
        </ol>
      </div>
    </div>
  )
}

export default EdekaLasagne;
