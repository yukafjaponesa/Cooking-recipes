import React from 'react';
import picture1 from './20220305tofucaprese.jpg';

function TofuCaprese() {
  return (
    <div>
      <h1>Tofu Caprese 豆腐カプレーゼ</h1>
      <h3>Sat 05.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tofu-caprese' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Tofu 1 pack(200g)</li>
            <li>Tomato 1</li>
            <li>Salt 1/2 tsp</li>
            <li>☆Salt 1/2 tsp</li>
            <li>☆Lemon juice 1 tsp</li>
            <li>☆Olive oil 2 tsp</li>
            <li>☆Garlic powder a bit</li>
            <li>Pepper & paserly</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Slice tofu and tomato</li>
          <li>Mix ☆ and pour on them</li>
          <li>Top with pepper and paserly</li>
        </ol>
      </div>
    </div>
  )
}

export default TofuCaprese;
