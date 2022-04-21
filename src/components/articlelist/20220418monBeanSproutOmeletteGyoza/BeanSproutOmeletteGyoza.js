import React from 'react';
import picture1 from './20220418beansproutomelettegyoza.jpg';
import picture2 from './20220418pattie.jpg';

function BeanSproutOmeletteGyoza() {
  return (
    <div>
      <h1>Bean Sprout Omelette Gyoza オムもやし餃子</h1>
      <h3>Mon 18.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='beansprout-omelette-hanburg' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Egg 5</li>
            <li>Ground pork 150g</li>
            <li>Bean sprout 100g</li>
            <li>Oil</li>
            <li>☆Sake 1 tbsp</li>
            <li>☆Salt 1/4 tsp</li>
            <li>☆Soy sauce, oyster sauce, ground ginger 1 tsp/ea</li>
            <li>☆Sesame oil 1/2 tbsp</li>
            <li>Sugar 1 tsp</li>
            <li>Salt</li>
            <li>Dashi powder 1/3 tsp</li>
            <li>Water 50ml</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add pork and ☆ in a bowl and mix</li>
          <li>Add bena sprout in it and make 2 shapes for egg roll pan</li>
          <img className='food-pic' src={picture2} alt='pattie' />
          <li>Add eggs in a bowl and mix with sugar, salt, dashi and water</li>
          <li>Add oil in a pan and stir meat and remove them</li>
          <li>Add 1/6 egg liquid and put meat on it and roll it</li>
          <li>Add egg liquid again and roll it</li>
          <li>When egg rolls are done, add ☆ in the pan and make sauce</li>
        </ol>
      </div>
    </div>
  )
}

export default BeanSproutOmeletteGyoza;
