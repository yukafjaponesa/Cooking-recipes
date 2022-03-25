import React from 'react';
import picture1 from './20220328hotsournoodle.jpg';

function HotSourNoodle() {
  return (
    <div>
      <h1>Hot Sour Noodle サンラータン</h1>
        <h3>Mon 28.03.2022</h3>
        <h4>For 2 servings</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='hot-sour-noodle' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Ramen noodle 2</li>
            <li>Pork meat 100g</li>
            <li>Beaten egg 2</li>
            <li>Spring onion half</li>
            <li>Mushroom/shiitake 2</li>
            <li>Bamboo 50g</li>
            <li>Consommé 1.5 tbsp</li>
            <li>Water 600cc</li>
            <li>Sake 2 tbsp</li>
            <li>Soy sauce 1.5 tbsp</li>
            <li>Salt & pepper</li>
            <li>Vinegar 3 tbsp</li>
            <li>Chili oil 1 tbsp</li>
            <li>Potato starch 1/2 tbsp & water 1 tbsp</li>
            <li>Sesame oil 1 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Slice pork, onion and mushroom</li>
          <li>Add sesame oil in a pot and cook pork</li>
          <li>Then cook mushroom and bamboo</li>
          <li>Add consommé, water, sake and soy sauce to boil</li>
          <li>Add onion and salt and pepper</li>

          <li>Turn low heat and add water and potato starch(mix in advance)</li>
          <li>Add beaten egg, vinegar and chilli oil</li>
          <li>Topping: black pepper and koriander</li>
        </ol>
      </div>
    </div>
  )
}

export default HotSourNoodle;
