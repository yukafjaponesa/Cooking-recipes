import React from 'react';
import picture1 from './20211109carrotcake1.jpg';
import picture2 from './20211109carrotcake2.jpg';

function CarrotCake() {
  return (
    <div>
      <h1>Carrot Cake キャロットケーキ</h1>
      <h3>Tue 09.11.2021</h3>
      <h4>16.5 x 7 x 5.5</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='carrot-cake1-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>A. Oil 90g</li>
            <li>A. Egg 2</li>
            <li>A. Sugar 80g</li>
            <li>A. Milk 50ml</li>
            <li>B. Flour 140g</li>
            <li>B. Baking powder 5g</li>
            <li>B. Cinamon, Nutsmeg 1 tsp/ea</li>
            <li>B. Grained ginger 1 tsp</li>
            <li>B. Salt 1/2 tsp</li>
            <li>Sleded carrot 100g</li>
            <li>Rasin 50g</li>
            <li>Chesnut 30g</li>
            <li>C. Cream cheese 200g</li>
            <li>C. Sugar 40g</li>
            <li>C. Milk 1 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cream cheese room temprature. Preheat oven 180℃</li>
          <li>Mix A</li>
          <li>Add B into A and mix well</li>
          <li>Add carrot and nuts and mix lightly</li>
          <li>Add in a plate and heat for 50 - 60 min</li>
          <li>Mix C</li>
          <li>After baking, cool it down and top with C</li>
          <li>Cool down in fridge</li>
        </ol>
        <img className='food-pic' src={picture2} alt='carrot-cake2-pic' />
      </div>
    </div>
  )
}

export default CarrotCake;
