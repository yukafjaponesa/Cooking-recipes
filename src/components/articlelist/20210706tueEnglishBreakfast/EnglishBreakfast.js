import React from 'react';
import picture1 from './20210706englishbreaky.jpg';

function EnglishBreakfast() {
  return (
    <div>
      <h1>English Breakfast イングリッシュブレックファスト</h1>
      <h3>Tue 06.07.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='blt-sand-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Toast</li>
            <li>Bacon</li>
            <li>Mushroom</li>
            <li>Tomato</li>
            <li>Egg</li>
            <li>Englsih Breakfast tea</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Grill bacon, tomato & mushroom</li>
          <li>Your choice of egg - scrumbled, sunny side up, poached</li>
          <li>Salt & pepper to the taste</li>
        </ol>
      </div>
    </div>
  )
}

export default EnglishBreakfast;
