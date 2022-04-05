import React from 'react';
import picture1 from './20220405saltysoumennoodle.jpg';

function SaltySoumenNoodle() {
  return (
    <div>
      <h1>Salty Soumen Noodle ごま油が決め手　塩そうめん</h1>
      <h3>Tue 05.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='bacon-cheese-steamed-bun' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chopped spring onion 3g</li>
            <li>Graind pork 30g</li>
            <li>Sesame oil 1tsp</li>
            <li>Salt & pepper</li>
            <li>Sake 1 tbsp</li>
            <li>Water 200ml</li>
            <li>Consommé, sesame oil 1 tsp/ea</li>
            <li>Salt, graind garlic 1/2 tsp/ea</li>
            <li>Boiled egg 1/2</li>
            <li>Soumen noodle 1</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook soumen noodle</li>
          <li>Cook pork with sake, sesame oil and salt & pepper</li>
          <li>Add water, consomme, sesame oil, garlic and salt in a pot to boil</li>
        </ol>
      </div>
    </div>
  )
}

export default SaltySoumenNoodle;
