import React from 'react';
import picture1 from './20220414deepfriesoumen.jpg';

function DeepFriedSoumenWithStarchySauce() {
  return (
    <div>
      <h1>Deep Fried Soumen With Starchy Sauce</h1>
      <h1>坦々そぼろのかた焼きそうめん</h1>
      <h3>Thu 14.04.2022</h3>
      <h4>For 2 servings</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='deep-fried-soumen' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Soumen noodle 2 150g</li>
            <li>Ground pork meat 100g</li>
            <li>Bean sprout 1/2 bag</li>
            <li>Sesame oil 2 tbsp</li>
            <li>Toubanjan 1/2 tsp</li>
            <li>Sake 1 tbsp</li>
            <li>Sugar 1/2 tsp</li>
            <li>Miso paste 1 tbsp</li>
            <li>Ground white sesame 2 tbsp</li>
            <li>Water 100ml</li>
            <li>Water & potato starch 1/2 tbsp/ea mix</li>
            <li>Spring onion</li>
            <li>Ito togarashi</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook soumen noodle</li>
          <li>Add 1 tbsp of sesame oil in a pan and cook soumen both side to crispy</li>
          <li>At the end, add the rest of sesame oil around the soumen and remove</li>
          <li>Add pork in the same pan and cook</li>
          <li>Add bean sprout and toubanjan</li>
          <li>Add the rest</li>
          <li>Add water & potato starch mixed to the pan</li>
        </ol>
      </div>
    </div>
  )
}

export default DeepFriedSoumenWithStarchySauce;
