import React from 'react';
import picture1 from './20211225minitomatosanta.jpg';

function MiniTomatoSanta() {
  return (
    <div>
      <h1>Mini Tomato Santa ミニトマトサンタ</h1>
      <h3>Sat 25.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='minitomato-santa-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Mini tomatoes</li>
            <li>Mozzarela cheese (cherry type)</li>
            <li>Black sesame</li>
            <li>Ketchap</li>
            <li>Toothpickes</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut mini tomatoes upper half</li>
          <li>Cut cheese in half</li>
          <li>Make santa clous as in pic</li>
          <li>Make face with sesame and ketchap</li>
        </ol>
      </div>
    </div>
  )
}

export default MiniTomatoSanta;
