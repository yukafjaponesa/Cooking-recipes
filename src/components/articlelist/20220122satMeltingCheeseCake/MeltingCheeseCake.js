import React from 'react';
import picture1 from './20220122metingcheesecake.jpg';

function MeltingCheeseCake() {
  return (
    <div>
      <h1>Melting Cheese Cake とろけるチーズケーキ</h1>
      <h3>Sat 22.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='melting-cheese-cake' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cream cheese 200g(room temprature)</li>
            <li>Sugar 100g</li>
            <li>Beaten egg 2</li>
            <li>Yogurt(no sugar) 150g</li>
            <li>Flour 2 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 180℃</li>
          <li>Add cream cheese in a bowl and mix till smooth</li>
          <li>Add sugar and mix well</li>
          <li>Sift beaten egg and mix well</li>
          <li>Add yogurt and mix well</li>
          <li>Sift flour and mix well</li>
          <li>Add in a cake palte and put in a plate where add boild water to steam cake</li>
          <li>Bake for 45 - 60 min</li>
        </ol>
      </div>
    </div>
  )
}

export default MeltingCheeseCake;
