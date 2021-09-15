import React from 'react';
import picture1 from './20210914breaky.jpg';

function Breaky() {
  return (
    <div>
      <h1>Breaky 朝食</h1>
      <h3>Wed 15.09.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='breaky-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Bread</li>
            <li>Avocado, egg, bacon, apple</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook your choice of egg</li>
        </ol>
      </div>
    </div>
  )
}

export default Breaky;
