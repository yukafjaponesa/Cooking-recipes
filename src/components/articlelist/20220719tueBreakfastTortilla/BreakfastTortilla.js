import React from 'react';
import picture1 from './20220719breakytortilla.jpg';
import picture2 from './20220719tortilladivided.jpg';

function BreakfastTortilla() {
  return (
    <div>
      <h1>Breakfast Tortilla ブレックファストトルティーヤ</h1>
      <h3>Tue 19.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='breakfast-tortilla' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Avocado</li>
            <li>Bacon</li>
            <li>Mozzarella cheese</li>
            <li>Fried chicken</li>
            <li>Tomato</li>
            <li>Red onion</li>
            <li>Mayo</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Place ingredeints and hold it</li>
          <img className='food-pic' src={picture2} alt='toritilla-divided' />
        </ol>
      </div>
    </div>
  )
}

export default BreakfastTortilla;
