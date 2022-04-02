import React from 'react';
import picture1 from './20220404baconcheesesteamedbun.jpg';

function BaconCheeseSteamedBun() {
  return (
    <div>
      <h1>Bacon Cheese Steamed Bun ベーコンチーズ蒸しパン</h1>
      <h3>Mon 04.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='bacon-cheese-steamed-bun' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cream cheese 40g</li>
            <li>Bacon 20g</li>
            <li>Pancake mix 50g(flour 37.5g sugar 10g, baking powder 2.5g, salt)</li>
            <li>Milk 50cc</li>
            <li>Oil 1 tsp</li>
            <li>Parsely</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 180℃, prepare boiled water</li>
          <li>Chop bacon and cheese</li>
          <li>Mix ingredients in a bowl and add bacon and cheese</li>
          <li>Add in cupcake cup and add water in oven and bake 15 min</li>
        </ol>
      </div>
    </div>
  )
}

export default BaconCheeseSteamedBun;
