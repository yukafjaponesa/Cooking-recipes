import React from 'react';
import picture1 from './20220710chocolatebarcakeslice.jpg';
import picture2 from './20220710beforebaking.jpg';
import picture3 from './20220710chocolatebarcake.jpg';

function ChocolateBarCake() {
  return (
    <div>
      <h1>Chocolate Bar Cake 板チョコケーキ</h1>
      <h3>Sun 10.07.2022</h3>
      <h4>15 x 15 cm square shape</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chocolate-bar-cake-slice' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chocolate bar 2 sheets(100g)</li>
            <li>Pancake mix 150g(flour 110g, sugar 30g, baking powder 9g, salt)</li>
            <li>Cocoa powder 3 tbsp</li>
            <li>Egg 1</li>
            <li>Milk 100cc</li>
            <li>Unsalted butter 50g</li>
            <li>Walnuts 30g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 170℃</li>
          <li>Add egg and milk in a bowl and mix</li>
          <li>Sift pancake mix and cocoa powder and mix</li>
          <li>Add melted butter and walnuts and mix</li>
          <li>Pour in cake shape and put chocolate bars</li>
          <img className='food-pic' src={picture2} alt='before-baking' />
          <li>Bake for 25 min</li>
          <img className='food-pic' src={picture3} alt='chocolate-bar-cake' />
        </ol>
      </div>
    </div>
  )
}

export default ChocolateBarCake;
