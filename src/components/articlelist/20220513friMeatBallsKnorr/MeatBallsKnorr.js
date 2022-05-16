import React from 'react';
import picture1 from './20220513meatballsknorr.jpg';
import picture2 from './20220513meatballssauceknorr1.jpg';
import picture3 from './20220513meatballssauceknorr2.jpg';

function MeatBallsKnorr() {
  return (
    <div>
      <h1>Meat Balls Knorr ミートボール クノーソース</h1>
      <h3>Fri 13.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='meat-balls' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Ground meat 350g</li>
            <li>Heavy cream 100cc</li>
            <li>Mozzarela cheese 125g</li>
            <li>Gyoza paper 12 sheets</li>
            <li>Oil, pepper and salt</li>
            <li>Water 100ml</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Make meat balls</li>
          <li>Knorr sauce and water mix</li>
          <li>Cover meat balls with it and cheese oven 175℃ 25 min</li>
          <img className='food-pic' src={picture2} alt='meat-balls-knorr1' />
          <br />
          <img className='food-pic' src={picture3} alt='meat-balls-knorr2' />
        </ol>
      </div>
    </div>
  )
}

export default MeatBallsKnorr;
