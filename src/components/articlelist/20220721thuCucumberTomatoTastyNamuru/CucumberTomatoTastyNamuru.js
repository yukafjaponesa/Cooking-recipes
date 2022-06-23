import React from 'react';
import picture1 from './20220721cucumbertomatotastynamru.jpg';

function CucumberTomatoTastyNamuru() {
  return (
    <div>
      <h1>Cucumber Tomato Tasty Namuru きゅうりとトマトの旨だれナムル</h1>
      <h3>Thu 21.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='cucumber-tomato-namuru' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cucumber 1 small</li>
            <li>Tomato 1 medium</li>
            <li>White sesame 1 tsp</li>
            <li>Sesame oil 1 tbsp</li>
            <li>Consomme 1 tsp</li>
            <li>Ground garlic 1/2 tsp</li>
            <li>Ground sesame 1 tbsp</li>
            <li>Vinegar 1 tbsp</li>
            <li>Spring onion 10 cm</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Smash cucumber and cut in pieces</li>
          <li>Cut tomato</li>
          <li>Mix with all</li>
        </ol>
      </div>
    </div>
  )
}

export default CucumberTomatoTastyNamuru;
