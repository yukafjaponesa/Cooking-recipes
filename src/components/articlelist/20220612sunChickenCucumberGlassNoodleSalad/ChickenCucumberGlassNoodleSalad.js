import React from 'react';
import picture1 from './20220612glassnoodlesalad.jpg';

function ChickenCucumberGlassNoodleSalad() {
  return (
    <div>
      <h1>Chicken Cucumber Glass Noodle Salad ささみときゅうりの春雨サラダ</h1>
      <h3>Sun 12.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='glassnoodle-salad' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cucumber 1/2</li>
            <li>Chicken 2 sticks</li>
            <li>Sake 1 tbsp</li>
            <li>Glass noodle 20g</li>
            <li>Soy sauce, vinegar, sesame 1 tbsp/ea</li>
            <li>Consomme, sugar 1/2 tsp</li>
            <li>Sesame oil 1/2 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Boil chicken with sake</li>
          <li>Cut cucumber</li>
          <li>Cook glass noodle</li>
          <li>Mix with all</li>
        </ol>
      </div>
    </div>
  )
}

export default ChickenCucumberGlassNoodleSalad;
