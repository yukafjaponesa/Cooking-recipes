import React from 'react';
import picture1 from './20220718tsukimiboiledspinach.jpg';

function TsukimiBoiledSpinach() {
  return (
    <div>
      <h1>Tsukimi Boiled Spinach ほうれん草の月見おひたし</h1>
      <h3>Mon 18.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tsukimi-spinach' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Spinach 250g</li>
            <li>Mentsuyu 1 tbsp</li>
            <li>Katsuo-bushi 2.5g</li>
            <li>Egg york 1</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Boil spinach</li>
          <li>Drain water and cut in 3 cm</li>
          <li>Add sauce, katsuo-bushi and egg york</li>
        </ol>
      </div>
    </div>
  )
}

export default TsukimiBoiledSpinach;
