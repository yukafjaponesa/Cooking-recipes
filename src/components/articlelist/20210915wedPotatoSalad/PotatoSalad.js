import React from 'react';
import picture1 from './20210915potatosalad.jpg';

function PotatoSalad() {
  return (
    <div>
      <h1>Potato Salad ポテサラ</h1>
      <h3>Wed 15.09.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='potatosalad-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Potato</li>
            <li>Red onion</li>
            <li>Corn</li>
            <li>Ham</li>
            <li>Cucumber</li>
            <li>Mayo</li>
            <li>Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook potatoes</li>
          <li>Chop vegs</li>
          <li>Add salt & pepper to potatoes and cool them down</li>
          <li>Mix all well</li>
        </ol>
      </div>
    </div>
  )
}

export default PotatoSalad;
