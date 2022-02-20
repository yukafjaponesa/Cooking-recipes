import React from 'react';
import picture1 from './20220218saltybuttersweetpotato.jpg';

function SaltyButterSweetPotato() {
  return (
    <div>
      <h1>Salty Butter Sweet Potato 塩バター大学芋</h1>
      <h3>Fri 18.02.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='salty-butter-sweetpotato' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sweet potato 1/2 (150g)</li>
            <li>Butter 20g</li>
            <li>Honey 1 tbsp</li>
            <li>Salt 1/4 tsp</li>
            <li>Walnuts</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop sweet potato in small pieces and rest in water for 10 min</li>
          <li>And then steam it</li>
          <li>Add butter in a pan and stir fry sweet potato with low heat till browned</li>
          <li>Add salt and honey</li>
          <li>Top with walnuts</li>
        </ol>
      </div>
    </div>
  )
}

export default SaltyButterSweetPotato;
