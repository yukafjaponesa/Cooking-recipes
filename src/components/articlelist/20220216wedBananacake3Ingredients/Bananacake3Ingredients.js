import React from 'react';
import picture1 from './20220216bananacake.jpg';

function Bananacake3Ingredients() {
  return (
    <div>
      <h1>Banana Cake 3 Ingredients 材料3つでバナナケーキ</h1>
      <h3>Wed 16.02.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='banana-cake' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Banana 2 stick</li>
            <li>Egg 2</li>
            <li>Hot cake mix(pan cake mix) 150g</li>
            <li>or</li>
            <li>Flour 110g</li>
            <li>Baking powder 9g</li>
            <li>Sugar 30g</li>
            <li>Salt</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 180℃</li>
          <li>Crush bananas with a fork in a bowl</li>
          <li>Add eggs and mix well</li>
          <li>Add hot cake mix and mix with a ruber spatula</li>
          <li>Bake in oven for 30 min</li>
        </ol>
      </div>
    </div>
  )
}

export default Bananacake3Ingredients;
