import React from 'react';
import picture1 from './20210512mediterranean.jpg';

function MediterraneanDish() {
  return (
    <div>
      <h1>Mediterranean Dish 地中海風料理</h1>
      <h3>Wed 12.05.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='mediterranean-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>For tomato salat</li>
            <li>Onion & garic & tomato</li>
            <li>Italian herbs</li>
            <li>Olive oil</li>
            <li>Balsamic vinegar</li>
            <li>Pepper & salt</li>
            <li>For the rice - used precooked package</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>For tomato salat</li>
          <li>Chop all in pieces and mix together</li>
          <li>Cook rice as the reciep</li>
        </ol>
      </div>
    </div>
  )
}

export default MediterraneanDish;
