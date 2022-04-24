import React from 'react';
import picture1 from './20220424kimcheesekimpa.jpg';

function KimcheeseKimpa() {
  return (
    <div>
      <h1>Kimcheese Kimpa キムチーズキンパ</h1>
      <h3>Sun 24.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='kimcheese-kimpa' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Rice 200g</li>
            <li>Kimchi 50g</li>
            <li>Tuna can 1(70g)</li>
            <li>Yakiniku no tare 2 tsp</li>
            <li>Sesame oil 2 tsp</li>
            <li>Mozzarella cheese</li>
            <li>Seaweed</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Mix rice with chopped kimchi, tuna, yakiniku no tare and sesame oil</li>
          <li>Add cheese in the middle and make it roll</li>
          <li>Microwave oven 600w 2 min to melt cheese</li>
        </ol>
      </div>
    </div>
  )
}

export default KimcheeseKimpa;
