import React from 'react';
import picture1 from './20220116dandansoup.jpg';

function DandanSoup() {
  return (
    <div>
      <h1>Dandan Soup 坦々スープ</h1>
      <h3>Sun 16.01.2022</h3>
      <h4>For 3 portiions</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='easy-madeleine' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pork grains meat 100g</li>
            <li>Bean sprout 1 bag or as much as you want</li>
            <li>Soy milk 400ml</li>
            <li>Grains sesame 3 tbsp</li>
            <li>Konsome 2 tsp</li>
            <li>Miso paste 1 tsp</li>
            <li>Salt a bit</li>
            <li>Chili oil and sesame for toppings</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Stir fry meat</li>
          <li>Add bean sprout till soften</li>
          <li>Add soy milk, miso, konsome and graind sesame</li>
          <li>Pour in a cup with toppings</li>
        </ol>
      </div>
    </div>
  )
}

export default DandanSoup;
