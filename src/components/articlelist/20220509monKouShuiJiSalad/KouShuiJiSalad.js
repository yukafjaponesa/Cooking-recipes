import React from 'react';
import picture1 from './20220509koushuijisalad.jpg';

function KouShuiJiSalad() {
  return (
    <div>
      <h1>KouShuiJi Salad よだれ鶏風サラダ</h1>
      <h3>Mon 09.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='koushioji-salad' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Bean sprout 1 bag</li>
            <li>Cucumber sliced</li>
            <li>Lettuce</li>
            <li>Spring onion</li>
            <li>White sesame</li>
            <li>Ito togarashi</li>
            <li>Chicken 2 sticks</li>
            <li>Soy sauce, vinegar 1 tbsp/ea</li>
            <li>Honey or sugar 2 tsp</li>
            <li>Toubanjan 1/2 tsp</li>
            <li>Sesame oil 1 tsp</li>
            <li>Ground garlic 1/3 tsp</li>
            <li>Chili oil 1 tsp(optional)</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Boil chicken</li>
          <li>Chop vegs</li>
          <li>Mix sauce</li>
        </ol>
      </div>
    </div>
  )
}

export default KouShuiJiSalad;
