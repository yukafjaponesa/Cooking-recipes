import React from 'react';
import picture1 from './20210909radishsaladyakiniku.jpg';

function RadishSaladYakiniku() {
  return (
    <div>
      <h1>Radish Salad ver.Yakiniku 焼肉屋さんの大根サラダ</h1>
      <h3>Thu 09.09.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='radishsalad-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sled radish (& cucumber)</li>
            <li>Soy sauce, vinegar & sesame oil 2 tbsp ea</li>
            <li>Mirin, sugar 1 tsp/ea</li>
            <li>Sesame 1 tbsp</li>
            <li>Seaweed, katsuo-bushi</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Mix all together</li>
        </ol>
      </div>
    </div>
  )
}

export default RadishSaladYakiniku;
