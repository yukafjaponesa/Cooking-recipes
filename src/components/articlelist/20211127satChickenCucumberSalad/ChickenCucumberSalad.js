import React from 'react';
import picture1 from './20211127chickencucumberchukasalad.jpg';
import picture2 from './20211127chickencucumbersesamevinegarsalad.jpg';

function ChickenCucumberSalad() {
  return (
    <div>
      <h1>2 sorts of Chicken Cucumber Salad 2種の鶏ときゅうりサラダ</h1>
      <h3>Sat 27.11.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chuka-salad-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>*** 1. Chuka Salad ***</li>
            <li>Chicken 200g</li>
            <li>Cucumber 1(small 1 or half of big one)</li>
            <li>Soy sauce, sesame oil, vinegar 1 tbsp/ea</li>
            <li>Sugar, chicken powder 1/2 tbsp/ea</li>
            <li>Ground white sesame 4 tbsp</li>
            <li>Sake 2 tbsp</li>
            <li>Water 6 cups</li>
            <br />
            <li>*** 2. Sesame vinegar salad ***</li>
            <li>Vinegar, white sesame 1 tbsp/ea</li>
            <li>White dashi 2 tsp</li>
            <li>Water, soy sauce, sugar 1 tsp/ea</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>*** For both of them ***</li>
          <li>Boil chicken with sake for 7 min with 12 cups of water and 4 tbsp of sake</li>
          <li>Then break up into pieces</li>
          <li>Slice cucumber and add salt. Drain water</li>
          <br />
          <li>Mix with each ingredients</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='sesame-vinegar-salad-pic' />
    </div>
  )
}

export default ChickenCucumberSalad;
