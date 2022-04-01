import React from 'react';
import picture1 from './20220402cheesefrenchtoast.jpg';
import picture2 from './20220402liquid.jpg';
import picture3 from './20220402cheeseintoast.jpg';
import picture4 from './20220402toastinegg.jpg';

function CheeseFrenchToast() {
  return (
    <div>
      <h1>Cheese French Toast チージーフレンチトースト</h1>
      <h3>Sat 02.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='cheesy-french-toast' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Thick sliced toast 1</li>
            <li>Sliced cheese 2</li>
            <li>Milk 100ml</li>
            <li>Egg 1</li>
            <li>Sugar 1 tbsp</li>
            <li>Butter 10g</li>
            <li>Powdered sugar, honey or maple syrup</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Slice only half of thick toast and add cheese in it</li>
          <img className='food-pic' src={picture3} alt='cheese-in-toast' />
          <li>Milk, egg and sugar mix in a bowl and add toast</li>
          <img className='food-pic' src={picture2} alt='liquid' />
          <br />
          <img className='food-pic' src={picture4} alt='toast-in-egg' />
          <li>Add butter in a pan and cook in low heat</li>
        </ol>
      </div>

    </div>
  )
}

export default CheeseFrenchToast;
