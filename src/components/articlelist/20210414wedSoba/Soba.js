import React from 'react';
import picture1 from './20210414soba.jpg';

function Soba() {
  return (
    <div>
      <h1>Soba noodle 茶そば</h1>
      <h3>Wed 14.04.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='soba-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Soba noodle</li>
            <li>Green nion</li>
            <li>Sesame</li>
            <li>Soba tsuyu</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Put soba noodle in boiled water cook for the time stated on the package</li>
          <li>Chop green onion</li>
          <li>Make fried chicken</li>
        </ol>
      </div>
    </div>
  )
}

export default Soba;
