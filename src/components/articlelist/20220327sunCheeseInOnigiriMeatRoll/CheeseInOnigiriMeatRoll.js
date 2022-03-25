import React from 'react';
import picture1 from './20220327cheeseinonigirimeatroll.jpg';

function CheeseInOnigiriMeatRoll() {
  return (
    <div>
      <h1>Cheese In Onigiri Meat Roll チーズイン肉巻きおにぎりの照り煮</h1>
      <h3>Sun 27.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='cheese-in-onigiri-meat-roll' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cheese 20g</li>
            <li>Rice 200g</li>
            <li>Thin pork meat 200g</li>
            <li>Flour 1 tbsp</li>
            <li>Sesame oil 1 tsp</li>
            <li>Mentsuyu 4 tbsp</li>
            <li>Water 2 tbsp</li>
            <li>Sugar 1 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook rice and make balls</li>
          <li>Roll them with meat or bacon</li>
          <li>Sift flour</li>
          <li>Add sesame oil in a pan and stir all sides and add sauce</li>
        </ol>
      </div>
    </div>
  )
}

export default CheeseInOnigiriMeatRoll;
