import React from 'react';
import picture1 from './20210919tunacucumbersalad.jpg';

function TunaCucumberSalad() {
  return (
    <div>
      <h1>Tuna Cucumber Salad ツナキュウリ-青じそ-</h1>
      <h3>Sun 19.09.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tunacucumber-salad-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Tuna can 1</li>
            <li>Cucumber</li>
            <li>For Aojiso dressing</li>
            <li>Vinegar, olive oil 1 tbsp/ea</li>
            <li>Soy sauce 1 tsp</li>
            <li>Sugar 1/2 tsp</li>
            <li>Aojiso chopped(Green perilla)</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Thin slice cucumber</li>
          <li>Mix all together</li>
        </ol>
      </div>
    </div>
  )
}

export default TunaCucumberSalad;
