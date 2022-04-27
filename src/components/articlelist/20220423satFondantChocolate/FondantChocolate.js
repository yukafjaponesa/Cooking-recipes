import React from 'react';
import picture1 from './20220423fondantchocolate.jpg';

function FondantChocolate() {
  return (
    <div>
      <h1>Fondant Chocolate 材料3つでフォンダンショコラ</h1>
      <h3>Sat 23.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='fondant-chocolate' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Dark chocolate 100g</li>
            <li>Unsalted butter 50g</li>
            <li>Beaten egg 2</li>
            <li>Powdered sugar</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 180℃</li>
          <li>Melt chocolate and butter and mix well</li>
          <li>Add beaten eggs little by little and mix well each time</li>
          <li>Pour in 2 plates and bake for 10 min or microwave oven 500w 2 min</li>
        </ol>
      </div>
    </div>
  )
}

export default FondantChocolate;
