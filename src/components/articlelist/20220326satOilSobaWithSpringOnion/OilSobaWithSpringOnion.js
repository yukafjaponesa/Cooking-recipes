import React from 'react';
import picture1 from './20220326oilsoba.jpg';

function OilSobaWithSpringOnion() {
  return (
    <div>
      <h1>Oil Soba With Spring Onion ねぎだく油そば</h1>
      <h3>Sat 26.03.2022</h3>
      <h4>For 2 servings</h4>
      <h5>I wanted to make onsen egg but turned out hard boiled egg</h5>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='oil-soba' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Ramen noodle 2</li>
            <li>Egg 2</li>
            <li>Mentsutu 2 tbsp</li>
            <li>Oyster sauce 1 tbsp(soy sauce 1 tbsp & honey 1 tsp)</li>
            <li>Consommé 1/4 tsp</li>
            <li>Graind ginger, garlic and vinegar 1 tsp/ea</li>
            <li>Soy sauce 1 tsp</li>
            <li>Sesame oil 1.5 tbsp</li>
            <li>Chopped spring onion green and white</li>
            <li>Seaweed, Sesame, Bamboo</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Make onsen egg. Add egg in a boiled water with a lid and leave it for 7 - 10 min</li>
          <li>Cook ramen noodle</li>
          <li>Mix ramen sauce</li>
        </ol>
      </div>
    </div>
  )
}

export default OilSobaWithSpringOnion;
