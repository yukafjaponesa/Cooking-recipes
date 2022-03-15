import React from 'react';
import picture1 from './20220314macaronigratin.jpg';

function ChickenBroccoliMacaroniGratin() {
  return (
    <div>
      <h1>Chicken Broccoli Macaroni Gratin 鶏肉とブロッコリーのマカロニグラタン</h1>
      <h3>Mon 14.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='macaroni-gratin' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sliced onion 1/4</li>
            <li>Chicken 80g</li>
            <li>Macaroni 50g</li>
            <li>Broccoli 80g</li>
            <li>Butter 20g</li>
            <li>Flour 15g</li>
            <li>Milk 200cc</li>
            <li>Corn 50g</li>
            <li>Consome 1tsp</li>
            <li>Salt & pepper</li>
            <li>Pizza cheese 60g</li>
            <li>Paserly</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Boil broccoli for 5min. Boil macaroni as its package shows</li>
          <li>Add butter in a pan and stir onion</li>
          <li>Add chopped chicken to cook</li>
          <li>Add flour and milk and mix well</li>
          <li>Add corn, broccoli and macaroni and consome, salt & pepper</li>
          <li>Toast for 7 min</li>
        </ol>
      </div>
    </div>
  )
}

export default ChickenBroccoliMacaroniGratin;
