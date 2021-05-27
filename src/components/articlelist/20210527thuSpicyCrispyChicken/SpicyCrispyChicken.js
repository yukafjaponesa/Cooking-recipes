import React from 'react';
import picture1 from './20210527spicyrispyhicken.jpg';

function SpicyCrispyChicken() {
  return (
    <div>
      <h1>Spicy Crispy Chicken スパイシークリスピーチキン</h1>
      <h3>Thu 27.05.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='spicycrispychicken-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Rice</li>
            <li>Chicken</li>
            <li>For marinate</li>
            <li>Sake 1 tbsp</li>
            <li>Salt & sugar 1 tsp each</li>
            <li>Chicken broth 1/2 tsp</li>
            <li>Grind ginger & garic 1/2 tsp each</li>
            <li>For deep fry</li>
            <li>Egg 1</li>
            <li>Crumble bread & flour 3 tbsp each</li>
            <li>Water 2 tbsp</li>
            <li>Pepper 1 tsp</li>
            <li>Chili powder 1/2 tsp</li>
            <li>For seaweed soup</li>
            <li>Water 400ml</li>
            <li>Seaweed 2g</li>
            <li>Green onion</li>
            <li>Sesame oil 2 tsp</li>
            <li>Sesame</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Start cooking rice</li>
          <li>Marinate chicken with the marinate ingredients</li>
          <li>Stay for 5 minutes</li>
          <li>Put chicken in deep fry ingredients</li>
          <li>Deep fry chicken until brwon</li>
          <li>For seaweed soup</li>
          <li>Put seaweed and green onion with water</li>
          <li>After boiling, put chicken broth and sesame oil</li>
          <li>Serve in a cup with sesame topping</li>
        </ol>
      </div>
    </div>
  )
}

export default SpicyCrispyChicken;
