import React from 'react';
import picture1 from './20220418garlicmeatmisosoumen.jpg';

function GarlicMeatMisoSoumen() {
  return (
    <div>
      <h1>Garlic Meat Miso Soumen にんにく肉味噌そうめん</h1>
      <h3>Mon 18.04.2022</h3>
      <h4>For 2 sevings</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='garlic-meaat-miso-soumen' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Soumen noodle 2</li>
            <li>Ground pork 150g</li>
            <li>Garlic 1 glove</li>
            <li>Spring onion</li>
            <li>Oil</li>
            <li>Ground ginger 1/2 tsp</li>
            <li>Toubanjan 1 tsp</li>
            <li>Egg york 2</li>
            <li>Sake 1 tbsp</li>
            <li>Sugar 1 tsp</li>
            <li>Miso paste 1 1/2 tbsp</li>
            <li>Water 50ml</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop garlic, cut spring onion</li>
          <li>Add oil in a pan and garlic</li>
          <li>Add pork, ginger, toubanjan</li>
          <li>Add sake, sugar, miso and water</li>
          <li>Cook soumen noodles</li>
        </ol>
      </div>
    </div>
  )
}

export default GarlicMeatMisoSoumen;
