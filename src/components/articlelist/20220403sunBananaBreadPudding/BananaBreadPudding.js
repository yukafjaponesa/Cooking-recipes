import React from 'react';
import picture1 from './20220403bananabreadpudding.jpg';

function BananaBreadPudding() {
  return (
    <div>
      <h1>Banana Bread Pudding バナナパンプディング</h1>
      <h3>Sun 03.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='banana-pan-pudding' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Small toast 3 lices</li>
            <li>Banan 1</li>
            <li>Melted butter</li>
            <li>Egg 1</li>
            <li>Milk 200cc</li>
            <li>Sugar 1 tbsp</li>
            <li>Maple syrup</li>
            <li>Cinamon powder</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 180℃</li>
          <li>Cut toast in 9 pieces/ea</li>
          <li>Add egg, milk and sugar in a bowl and mix</li>
          <li>Rest toast in egg for 10 min</li>
          <li>Slice banana 1 cm</li>
          <li>Bake for 20 - 25 min</li>
        </ol>
      </div>
    </div>
  )
}

export default BananaBreadPudding;
