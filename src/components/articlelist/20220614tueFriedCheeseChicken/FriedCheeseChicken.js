import React from 'react';
import picture1 from './20220614friedcheesechicken.jpg';

function FriedCheeseChicken() {
  return (
    <div>
      <h1>Fried Cheese Chicken ささみの一口チーズフライ</h1>
      <h3>Tue 14.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='fried-cheese-chicken' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sliced cheese 1</li>
            <li>Chicken 3 sticks</li>
            <li>Flour 1 tbsp</li>
            <li>Beaten egg 1/2</li>
            <li>Bread crumbles 3 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut chicken in half virtically</li>
          <li>Cut cheese in 9 pieces</li>
          <li>Sand cheese with chicken and add flour, egg and bread</li>
          <li>Deep fry</li>
        </ol>
      </div>
    </div>
  )
}

export default FriedCheeseChicken;
