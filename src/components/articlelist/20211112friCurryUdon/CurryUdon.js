import React from 'react';
import picture1 from './2021112curryudon1.jpg';
import picture2 from './2021112curryudon2.jpg';

function CurryUdon() {
  return (
    <div>
      <h1>Curry Udon(Noodel) カレーうどん</h1>
      <h3>Fri 12.11.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='curry-udon1-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Udon Noodel</li>
            <li>Curry made yesterday</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook noodel</li>
          <li>Heat up curry from yesterday and simply add on Udon</li>
        </ol>
        <img className='food-pic' src={picture2} alt='curry-udon2-pic' />
      </div>
    </div>
  )
}

export default CurryUdon;
