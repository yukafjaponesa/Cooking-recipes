import React from 'react';
import picture1 from './20220221cheesecake1.jpg';
import picture2 from './20220221cheesecake2.jpg';

function CheeseCake3Ingredients() {
  return (
    <div>
      <h1>Cheese Cake 3 Ingredients 材料3つでチーズケーキ</h1>
      <h3>Mon 21.02.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='cheese-cake' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cream cheese 400g</li>
            <li>Sugar 60g</li>
            <li>Beaten egg 3</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 170℃</li>
          <li>Put cream cheese in a bowl and make it smooth</li>
          <li>Add sugar and mix well</li>
          <li>Add beten egg little by little and mix well each time</li>
          <li>Bake for 45 min</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='cheese-cake2' />
    </div>
  )
}

export default CheeseCake3Ingredients;
