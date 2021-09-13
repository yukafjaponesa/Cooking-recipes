import React from 'react';
import picture1 from './20210908radishsaladgarlic.jpg';

function RadishSaladGarlic() {
  return (
    <div>
      <h1>Radish Salad ver.Garlic 大根サラダ　ごま油＆ガーリック</h1>
      <h3>Wed 08.09.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='radishsalad-garlic-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sled radish (& cucumber)</li>
            <li>Soy sauce & sesame oil 2 tbsp ea</li>
            <li>Chicken brooth 1/4 tsp</li>
            <li>Sesame 1 tbsp</li>
            <li>Grained garlic 1 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Slice radish and put in salt and rest for 10 min</li>
          <li>Drein radish and leave water well</li>
          <li>Mix well with other ingredients</li>
        </ol>
      </div>
    </div>
  )
}

export default RadishSaladGarlic;
