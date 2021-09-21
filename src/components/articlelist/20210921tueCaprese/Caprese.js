import React from 'react';
import picture1 from './20210921caprese.jpg';

function Caprese() {
  return (
    <div>
      <h1>Caprese カプレーゼ</h1>
      <h3>Tue 21.09.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='caprese-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Tomato</li>
            <li>Mozzarella cheese</li>
            <li>Basil</li>
            <li>Olive oil</li>
            <li>Pepper & salt</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Slice tomato and cheese</li>
          <li>Decolate them with sauces</li>
        </ol>
      </div>
    </div>
  )
}

export default Caprese;
