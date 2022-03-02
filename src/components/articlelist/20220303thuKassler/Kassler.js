import React from 'react';
import picture1 from './20220303kassler.jpg';
import picture2 from './20220302bohnenkraut.jpg';

function Kassler() {
  return (
    <div>
      <h1>Kassler mit Bohnen カスラー</h1>
      <h3>Thu 03.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='kassler' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Salted pork</li>
            <li>Green beans 2 small cans</li>
            <li>Boiled potatoes</li>
            <li>Bohnenkraut</li>
            <li>Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Stir pork</li>
          <li>Add butter in another pan and beans</li>
          <li>Add salt & pepper and bohnenkraut</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='bohnenkraut' />
    </div>
  )
}

export default Kassler;
