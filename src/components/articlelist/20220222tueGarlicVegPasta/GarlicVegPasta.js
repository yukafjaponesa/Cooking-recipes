import React from 'react';
import picture1 from './20220222garlicvegpasta.jpg';

function GarlicVegPasta() {
  return (
    <div>
      <h1>Garlic Veg Pasta ガーリック野菜パスタ</h1>
      <h3>Tue 22.02.2022</h3>
      <h4>For 3 servings</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='garlic-veg-pasta' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Oil 2 tbsp</li>
            <li>Sliced mushroom 150g(2 cups)</li>
            <li>Chopped broccoli 500g(2 cups)</li>
            <li>Chopped garlic 4 cloves</li>
            <li>Sliced bell pepper yellow and red 1 each</li>
            <li>Dried oregano 1 tbsp</li>
            <li>Salt & pepper 2 tsp/ea</li>
            <li>Rotini pasta 250g(1 1/4 cups)</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Heat oil in a large pot over high heat</li>
          <li>Cook all the ingredients (except pasta) until the vegs are tender</li>
          <li>Add in the pasta and stir until evenly mixed</li>
        </ol>
      </div>
    </div>
  )
}

export default GarlicVegPasta;
