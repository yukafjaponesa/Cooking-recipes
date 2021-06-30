import React from 'react';
import picture1 from './20210630yodaredori.jpg';

function YodareDori() {
  return (
    <div>
      <h1>YodareDori よだれどり</h1>
      <h3>Wed 30.06.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='yodaredori-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Rice</li>
            <li>Chicken 400g</li>
            <li>☆Soy sauce, vinegar, chili oil & sugar 2 tbsp/ea</li>
            <li>☆Spring onion - chopped</li>
            <li>☆Grained garlic 1 tsp</li>
            <li>For Ramen salad</li>
            <li>Noodle 1</li>
            <li>Grained sesame 2 tbsp</li>
            <li>Mayonaise 2 tbsp</li>
            <li>Sugar  1 tsp</li>
            <li>vinegar 1 tsp</li>
            <li>Mentsuyu 1 tbsp</li>
            <li>Lettecu, tomato & cucumber</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Start cooking rice</li>
          <li>Mix ☆</li>
          <li>Boil chicken for 7 min</li>
          <li>For Ramen salad</li>
          <li>Boil noodle and mix sauces</li>
          <li>Mix all vegs, noodle and sauce</li>
        </ol>
      </div>
    </div>
  )
}

export default YodareDori;
