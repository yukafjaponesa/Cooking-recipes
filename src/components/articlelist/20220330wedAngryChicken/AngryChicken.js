import React from 'react';
import picture1 from './20220330angrychicken.jpg';
import picture2 from './20220330deepfriedchicken.jpg';

function AngryChicken() {
  return (
    <div>
      <h1>Angry Chicken アングリーチキン</h1>
      <h3>Wed 30.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='angry-chicken' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 400g</li>
            <li>Oil</li>
            <li>Potato starch</li>
            <li>Salt & pepper</li>
            <li>Grains ginger 1/2 tsp</li>
            <li>Sake 1 tbsp</li>
            <li>☆Sake, kochujan 2 tbsp/ea</li>
            <li>☆Soy sauce, sugar 1 tbsp/ea</li>
            <li>☆Vinegar 1/2 tbsp</li>
            <li>☆Grains garlic 1/2 tsp</li>
            <li>Sesame or chopped spring onion</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut chicken and marinate with sake 1 tbsp, salt & pepper and ginger</li>
          <li>Meanwhile make sauce ☆</li>
          <li>Add potato starch to chicken</li>
          <li>Add oil in a pan 2 - 3 cm to lightly deep fry</li>
          <li>Remove chicken once from the pan and clean the oil</li>
          <li>Put chicken again to lightly stir fry</li>
          <li>Add sauce</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='deep-fried-chicken' />
    </div>
  )
}

export default AngryChicken;
