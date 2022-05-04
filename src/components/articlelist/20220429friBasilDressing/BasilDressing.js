import React from 'react';
import picture1 from './20220429basildressing.jpg';

function BasilDressing() {
  return (
    <div>
      <h1>Basil Dressing バジルドレッシング</h1>
      <h3>Fri 29.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='basil-dressing' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Fresh basil 5 -6 leaves</li>
            <li>White wine vinegar 1 tbsp</li>
            <li>Olive oil 1.5 tbsp</li>
            <li>Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop basil and mix with all</li>
        </ol>
      </div>
    </div>
  )
}

export default BasilDressing;
