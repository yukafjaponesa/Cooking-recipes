import React from 'react';
import picture1 from './20210519japanesebreaky.jpg';

function JapaneseBreaky() {
  return (
    <div>
      <h1>Japanese Breaky 和朝食</h1>
      <h3>Wed 19.05.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='japanesebreaky-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Brown rice</li>
            <li>Fish</li>
            <li>Sleded radish with soy sauce</li>
            <li>Miso soup</li>
            <li>Salad (cucumer & tomato)</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Start cooking rice</li>
          <li>Radish and seaweed for miso soup</li>
        </ol>
      </div>
    </div>
  )
}

export default JapaneseBreaky;
