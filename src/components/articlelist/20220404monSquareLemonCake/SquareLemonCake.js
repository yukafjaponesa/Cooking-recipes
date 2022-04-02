import React from 'react';
import picture1 from './20220404squarelemoncake.jpg';

function SquareLemonCake() {
  return (
    <div>
      <h1>Square Lemon Cake 卵焼き器でスクエアレモンケーキ</h1>
      <h3>Mon 04.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='square-lemon-cake' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Lemon 1/2</li>
            <li>Powdered sugar 50g</li>
            <li>Sugar 50g</li>
            <li>Egg 1</li>
            <li>Yogurt 80g(non-sugar)</li>
            <li>Unsalted melted butter 20g</li>
            <li>Pancake mix 100g(flour 75g, baking powder 5g, sugar 20g, salt)</li>
            <li>Melted butter 5g for coating</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Squeez lemon juice and peel skin</li>
          <li>Add egg and sugar in a bowl and yogurt, butter and lemon skin</li>
          <li>Add pancake mix</li>
          <li>Add coating butter in egg roll pan and then the dough</li>
          <li>Cook with low heat 20 - 30 min covered wuth alminum</li>
          <li>Add lemon juice and powdere sugar and mix well(add milk or water)</li>
        </ol>
      </div>
    </div>
  )
}

export default SquareLemonCake;
