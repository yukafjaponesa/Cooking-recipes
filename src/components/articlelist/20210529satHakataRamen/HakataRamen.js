import React from 'react';
import picture1 from './20210529hakataramen.jpg';
import picture2 from './20210529ramenpack.jpg';

function HakataRamen() {
  return (
    <div>
      <h1>Hakata Tonkotsu Ramen 博多とんこつラーメン</h1>
      <h3>Sat 29.05.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='hakataramen-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>I just bought an instant noodle</li>
            <li>Sesame</li>
            <li>Green onion</li>
            <li>Seaweed</li>
            <li>Vegetables</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook ramen noodle as instruction says</li>
          <li>For 2 persons, boil 900ml water</li>
          <li>After boiling, cook noodle for 3 min</li>
          <li>After 3 min, stop the heat and add attached soup powder</li>
          <li>Chop green onion</li>
          <li>Serve in a bowl</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='ramenpack-pic' />
    </div>
  )
}

export default HakataRamen;
