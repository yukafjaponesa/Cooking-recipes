import React from 'react';
import picture1 from './20220622zucchinitoscana.jpg';
import picture2 from './20220622zucchinitoscanaknorr1.jpg';
import picture3 from './20220622zucchinitoscanaknorr2.jpg';

function ZucchiniToscana() {
  return (
    <div>
      <h1>Zucchini Toscana ズッキーニトスカーナ</h1>
      <h3>Wed 22.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='zucchini-toscana' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Zucchini 400g</li>
            <li>Water 200ml</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add oil in a pan and stir zucchini</li>
          <li>Add water and knorr powder to cook 2 - 3 min</li>
          <img className='food-pic' src={picture2} alt='zucchini-toscana-knorr1' />
          <br />
          <img className='food-pic' src={picture3} alt='zucchini-toscana-knorr2' />
        </ol>
      </div>
    </div>
  )
}

export default ZucchiniToscana;
