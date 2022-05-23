import React from 'react';
import picture1 from './20220613sesameoilchickensalad.jpg';

function SesameOilChickenCucumberSalad() {
  return (
    <div>
      <h1>Sesame Oil Chicken Cucumber Salad ごま油香るささみときゅうりの簡単和え</h1>
      <h3>Mon 13.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='cucumber-chicken-salad' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 1 stick</li>
            <li>Sake 1 tbsp</li>
            <li>Cucumber 1</li>
            <li>Salt 1 tsp</li>
            <li>Soy sauce 1/2 tbsp</li>
            <li>Sesame oil 1 tbsp</li>
            <li>Sugar 1/4 tsp</li>
            <li>Toubanjan 1/2 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Boil chicken with sake</li>
          <li>Add salt on cucumber skin and rub and then wash out</li>
          <li>Add cucumber in a plastic bag and crush roughly</li>
          <li>Mix with all</li>
        </ol>
      </div>
    </div>
  )
}

export default SesameOilChickenCucumberSalad;
