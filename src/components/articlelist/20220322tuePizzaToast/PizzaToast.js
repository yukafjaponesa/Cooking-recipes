import React from 'react';
import picture1 from './20220322pizzatoast.jpg';

function PizzaToast() {
  return (
    <div>
      <h1>Pizza Toast ピザトースト</h1>
      <h3>Tue 22.03.2022</h3>
      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='pizza-toast' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Toast 2 slices</li>
            <li>Sliced onion 1/8</li>
            <li>Green bell pepper 1 small sliced </li>
            <li>Ham 2 cut in small</li>
            <li>Ketchup 2 tbsp</li>
            <li>Cheese 40g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add ketchap, contents and cheese on toast</li>
          <li>Toast for 3 min</li>
        </ol>
      </div>
    </div>
  )
}

export default PizzaToast;
