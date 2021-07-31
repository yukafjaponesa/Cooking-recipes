import React from 'react';
import picture1 from './20210730meatdoria.jpg';

function MeatDoria() {
  return (
    <div>
      <h1>Meat Doria ミートドリア</h1>
      <h3>Fri 30.07.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='meatdoria-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Minced meat</li>
            <li>Tomato can 400g</li>
            <li>Onion</li>
            <li>Rice</li>
            <li>Cheese</li>
            <li>Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Start cooking rice(with a bit less water)</li>
          <li>Stir fry meat</li>
          <li>After meat color changed, add chopped onion</li>
          <li>When onion turned into clear color, add tomato can and salt & pepper</li>
          <li>Stir for 3 min till water will be less</li>
          <li>Add cooked rice and mix well</li>
          <li>Cook until water is away</li>
          <li>Add cheese and put a lid until cheese melts</li>
        </ol>
      </div>
    </div>
  )
}

export default MeatDoria;
