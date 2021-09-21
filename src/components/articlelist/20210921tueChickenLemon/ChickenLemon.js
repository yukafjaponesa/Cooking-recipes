import React from 'react';
import picture1 from './20210921chickenlemeon.jpg';

function ChickenLemon() {
  return (
    <div>
      <h1>Chicken Lemon 鶏もものねぎ塩レモン</h1>
      <h3>Tue 21.09.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chickenlemon-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken thigh</li>
            <li>Lemon juice 1.5 tbsp</li>
            <li>Sesame oil 1 tbsp</li>
            <li>Green onion</li>
            <li>Sake 1 tsp</li>
            <li>Sugar 1/2 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop chichen and sort in sake and sugar</li>
          <li>Mix lemon juice and sesame oil. Add 1 tbsp of it to chicken and stay for 10 min</li>
          <li>Chop green onion and add to the sauce</li>
          <li>Grill chicken from skin side</li>
          <li>Put on plate and add sauce</li>
        </ol>
      </div>
    </div>
  )
}

export default ChickenLemon;
