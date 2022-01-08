import React from 'react';
import picture1 from './20220107noodlesalad.jpg';

function NoodleSalad() {
  return (
    <div>
      <h1>Noodle Salad パスタサラダ</h1>
      <h3>Fri 07.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='pasta-salad' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pasta</li>
            <li>Red onion</li>
            <li>Tomato</li>
            <li>Lemon juice</li>
            <li>Olive oil</li>
            <li>Paserly</li>
            <li>pepper & salt</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook pasta</li>
          <li>Cut tomato</li>
          <li>Cut onion slightly thin</li>
          <li>Mix all</li>
        </ol>
      </div>
    </div>
  )
}

export default NoodleSalad;
