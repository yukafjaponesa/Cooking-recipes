import React from 'react';
import picture1 from './20220107basquecheesecake1.jpg';
import picture2 from './20220107basquecheesecake2.jpg';

function BasqueCheeseCake() {
  return (
    <div>
      <h1>Basque Cheese Cake バスクチーズケーキ</h1>
      <h3>Fri 07.01.2022</h3>
      <h4>15cm round shape</h4>


      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='basque-cheese-cake1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>heavy cream 200ml</li>
            <li>Cream cheese 200g</li>
            <li>Eggs 2</li>
            <li>Sugar 60g</li>
            <li>Flour 1 tbsp</li>
            <li>Cooking sheet</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 200℃</li>
          <li>Soften cream cheese and mix well</li>
          <li>Add sugar and mix</li>
          <li>Add flour and mix</li>
          <li>Add beaten eggs and mix</li>
          <li>Add heavy cream 2 times each and mix</li>
          <li>Bake for 30min</li>
          <li>Cool down</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='basque-cheese-cake1' />
    </div>
  )
}

export default BasqueCheeseCake;
