import React from 'react';
import picture1 from './20210323salmonpoke.jpg';

function SalmonPoke() {
  return (
    <div>
      <h1>Hawaiian Poke Bowl ~ Salmon & Avo ~</h1>
      <h3>Tue 23.03.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='salmonpoke-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Salmon or Smoked salmon</li>
            <li>Avocado</li>
            <li>Rice 2 cups</li>
            <li>Vinegar - 3 tbsp</li>
            <li>Sugar - 1 tbsp</li>
            <li>Salt - 2 tsp</li>
            <li>Soy sauce - 2 tbsp</li>
            <li>Sesame oil - 1 tbsp</li>
            <li>Red onion</li>
            <li>Cucumber</li>
            <li>Green onion</li>
            <li>White sesame</li>
            <li>Seaweed</li>
          </ul>
        </div>
      </div>

      <div>
        <h4 className='section-title'>Process</h4>
        <div className='process'>
          <ol className='process-list'>
            <li>Cook rice with a bit less water.</li>
            <li>Cop cucumber and onion. Put onion in water for 5 minutes.</li>
            <li>Put soy sauce, sesame oil, vegs and salmon in a bat to marinate.</li>
            <li>Make sushi vinegar with vinegar, sugar and salt. Mix until sugar is melted.</li>
            <li>When rice is cooked, mix with sushi vinegar.</li>
            <li>Place in a bowl with topping of chopped green onion, white sesame and seaweed.</li>
          </ol>
        </div>
      </div>

    </div>
  )
}

export default SalmonPoke;
