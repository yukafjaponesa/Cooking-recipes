import React from 'react';
import picture1 from './20210916tunacabaggemayosalad.jpg';

function TunaCabaggeMayoSalad() {
  return (
    <div>
      <h1>Tuna Cabagge Mayo Salad ツナマヨサラダ</h1>
      <h3>Thu 16.09.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tunamayo-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cabagge</li>
            <li>Red onion</li>
            <li>Tuna can</li>
            <li>Mayo</li>
            <li>Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop cabagge and onion</li>
          <li>Steam cabagge or sort in salt</li>
          <li>Mix all well</li>
        </ol>
      </div>
    </div>
  )
}

export default TunaCabaggeMayoSalad;
