import React from 'react';
import picture1 from './20220329saltyspringonionroll.jpg';

function SaltySpringOnionRoll() {
  return (
    <div>
      <h1>Salty Spring Onion Roll ネギ塩肉巻きおにぎり</h1>
      <h3>Tue 29.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='salty-spring-onion-roll' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Rice 600g 12 small onigiri</li>
            <li>Thin pork slice 12</li>
            <li>Salt & pepper</li>
            <li>Flour</li>
            <li>Oil</li>
            <li>Chopped spring onion 1/2</li>
            <li>Salt 1/3 tsp</li>
            <li>Grains garlic 1/2 tsp</li>
            <li>Lemon juice, sesame oil, consommé 1 tsp/ea</li>
            <li>Water 100cc & potato starch 1 tbsp mix</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Sift salt & pepper and flour on pork</li>
          <li>Roll onigiri</li>
          <li>Add oil in a pan and cook onigiri</li>
          <li>Then add sauce</li>
        </ol>
      </div>
    </div>
  )
}

export default SaltySpringOnionRoll;
