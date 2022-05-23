import React from 'react';
import picture1 from './20220605plainscone.jpg';
import picture2 from './20220605sconewithcreamcheese.jpg';

function PlainScone() {
  return (
    <div>
      <h1>Plain Scone プレーンスコーン</h1>
      <h3>Sun 05.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='plain-scone' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Flour 200g</li>
            <li>Unsalted butter 50g</li>
            <li>Baking powder 2 tsp</li>
            <li>Sugar 30g</li>
            <li>Milk 100cc</li>
            <li>Salt a bit</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 200℃</li>
          <li>Cut butter 1 cm square</li>
          <li>Add powderes, sugar and butter in a bowl and mix with hand</li>
          <li>Add salt and milk and mix with a rubber spatula and make it gather</li>
          <li>Make dough 1 cm high and 8 shapes</li>
          <li>Bake for 15 - 20 min</li>
          <li>Sand with cream cheese and honey</li>
          <img className='food-pic' src={picture2} alt='scone-with-cream-cheese' />
        </ol>
      </div>
    </div>
  )
}

export default PlainScone;
