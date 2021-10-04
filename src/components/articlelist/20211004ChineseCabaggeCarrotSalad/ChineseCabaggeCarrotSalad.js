import React from 'react';
import picture1 from './20211004chinesecabaggecarrotsalad.jpg';

function ChineseCabaggeCarrotSalad() {
  return (
    <div>
      <h1>Chinese Cabagge Carrot Salad 白菜と人参のサラダ</h1>
      <h3>Mon 04.10.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chinesecabagge-carrot-salad-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chinese cabbage</li>
            <li>Carrot</li>
            <li>Soy sauce, sesame oil, mentsuyu 1 tbsp/ea</li>
            <li>Sesame, chili powder</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Slice cabbage and carrot and soak in salt for 10 min</li>
          <li>Drain 1</li>
          <li>Mix with sauces</li>
        </ol>
      </div>
    </div>
  )
}

export default ChineseCabaggeCarrotSalad;
