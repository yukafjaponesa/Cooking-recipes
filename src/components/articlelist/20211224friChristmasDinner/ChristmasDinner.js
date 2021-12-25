import React from 'react';
import picture1 from './20211224christmasdinner.jpg';
import picture2 from './20211224xmasduck.jpg';
import picture3 from './20211224xmasdinner2.jpg';

function ChristmasDinner() {
  return (
    <div>
      <h1>Christmas Dinner クリスマスディナー～鴨のオーブン焼き～</h1>
      <h3>Fri 24.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='xmas-dinner1-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Duck</li>
            <li>Kale</li>
            <li>Apple red cabagge</li>
            <li>Potato dumplings</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Typical christmas dinner in Europe</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='xmas-duck-pic' />
      <br />
      <img className='food-pic' src={picture3} alt='xmas-dinner2-pic' />
    </div>
  )
}

export default ChristmasDinner;
