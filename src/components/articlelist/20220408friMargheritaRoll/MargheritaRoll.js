import React from 'react';
import picture1 from './20220408margheritaroll.jpg';
import picture2 from './20220408margheritarollprep.jpg';

function MargheritaRoll() {
  return (
    <div>
      <h1>Margherita Roll マルゲリータロール</h1>
      <h3>Fri 08.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='margherita-roll' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Toast 2</li>
            <li>Milk 70ml</li>
            <li>Salt & pepper</li>
            <li>Mini tomato 4</li>
            <li>Fresh Basil 5g</li>
            <li>Cheese 2</li>
            <li>Olive oil 1 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add toast in milk and salt & pepper</li>
          <li>Add cheese, tomato and basil on toast and roll it</li>
          <img className='food-pic' src={picture2} alt='margherita-roll-prep' />
          <li>Add olive oil in a pan and stir</li>
        </ol>
      </div>
    </div>
  )
}

export default MargheritaRoll;
