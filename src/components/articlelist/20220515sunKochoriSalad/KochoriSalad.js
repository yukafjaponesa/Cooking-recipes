import React from 'react';
import picture1 from './20220515kochorisalad.jpg';

function KochoriSalad() {
  return (
    <div>
      <h1>Kochori Salad チョレギサラダ</h1>
      <h3>Sun 15.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='kochori-salad' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Soy sauce, vinegar 1 tbsp/ea</li>
            <li>Sugar 1 tsp</li>
            <li>Consomme 1/2 tsp</li>
            <li>Sesame oil, chili oil 1/2 tbsp/ea</li>
            <li>Ground garlic 1/3 tsp</li>
            <li>White sesame, ito togarashi</li>
            <li>Lettuce, cucumber, tomato</li>
            <li>Tofu(soft) 150g</li>
            <li>Chicken 1 stick</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut veg, boil chicken</li>
          <li>Mix sauce</li>
        </ol>
      </div>
    </div>
  )
}

export default KochoriSalad;
