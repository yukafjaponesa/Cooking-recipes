import React from 'react';
import picture1 from './20220404oilsobasoumen.jpg';

function OilSobaSoumen() {
  return (
    <div>
      <h1>Oil Soba Soumen 油そば風そうめん</h1>
      <h3>Mon 04.04.2022</h3>
      <h4>For 2 servings</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='oil-soba-soumen' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Soumen noodle 2(200g)</li>
            <li>Graind chicken 100g</li>
            <li>Chopped garlic & ginger 1 glove/ea</li>
            <li>Egg 1</li>
            <li>Sugar 1 tsp</li>
            <li>Soy sauce, sesame oil 1/2 tbsp/ea</li>
            <li>***For sauce***</li>
            <li>Sesame oil 2 tbsp</li>
            <li>Oyster sauce 1 tbsp</li>
            <li>Mentsuyu 1 tbsp</li>
            <li>Vinegar 1 tsp</li>
            <li>Toubanjan 1/4 tsp</li>
            <li>Egg york, chopped spring onion</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add sesame oil in a pan and cook meat, ginger, garlic and other ingredients</li>
          <li>Mix sauce ingredients and cooked noodle</li>
        </ol>
      </div>
    </div>
  )
}

export default OilSobaSoumen;
