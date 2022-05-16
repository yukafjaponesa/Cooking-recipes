import React from 'react';
import picture1 from './20220517seafoodgratin.jpg';
import picture2 from './20220517seafoodgratinbeforeoven.jpg';

function SeafoodGratin() {
  return (
    <div>
      <h1>Seafood Gratin シーフードグラタン</h1>
      <h3>Thu 17.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='seafood-gratin' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Onion sliced 1/2</li>
            <li>Macaroni 70g</li>
            <li>Water 1 L</li>
            <li>Salt 1 tsp</li>
            <li>Béchamel sauce 120g ホワイトソース</li>
            <li>Milk 150cc</li>
            <li>Butter 5g</li>
            <li>Olive oil 2 tbsp</li>
            <li>Seafood mix 100g</li>
            <li>Salt and pepper</li>
            <li>Cheese 80g</li>
            <li>Parsley</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook macaroni with water and salt</li>
          <li>Add white sauce and milk in a pan and mix and add butter</li>
          <li>Add olive oil in another pan and cook onion</li>
          <li>Add seafood mix</li>
          <li>(If you don’t have Béchamel sauce, add flour and milk)</li>
          <li>Add seafood mix and white sauce on macaroni</li>
          <li>Add cheese and toast for 10 min</li>
          <img className='food-pic' src={picture2} alt='seafood-gratin-before-baking' />
        </ol>
      </div>
    </div>
  )
}

export default SeafoodGratin;
