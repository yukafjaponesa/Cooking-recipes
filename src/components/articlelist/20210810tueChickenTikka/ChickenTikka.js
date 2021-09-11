import React from 'react';
import picture1 from './20210810chickentikka.jpg';
import picture2 from './20210810chickentikkapack.jpg';

function ChickenTikka() {
  return (
    <div>
      <h1>Chicken Tikka Curry チキンテッカカレー</h1>
      <h3>Tue 10.08.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chickentikkacurry-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pre-packed curry box from supermarket</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Follow the instruction of the package</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='chickentikkapack-pic' />
    </div>
  )
}

export default ChickenTikka;
