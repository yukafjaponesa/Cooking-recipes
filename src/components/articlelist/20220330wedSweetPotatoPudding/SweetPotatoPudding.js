import React from 'react';
import picture1 from './20220330sweetpotatopudding.jpg';

function SweetPotatoPudding() {
  return (
    <div>
      <h1>Sweet Potato Pudding スイートポテトプリン</h1>
      <h3>Wed 30.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sweet-potato-pudding' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sweet potato 2 small(400g)</li>
            <li>Egg 1</li>
            <li>Vanilla ice cream 200g</li>
            <li>Balck sesame</li>
            <li>Soumen 100g</li>
            <li>Maple syrup</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut sweet potato in half and stay in water</li>
          <li>Steam it and remove content</li>
          <li>Add the content, egg and ice cream in a mixer and smoothen</li>
          <li>Pour in sweet potato cups and 1 min 600w in microwave oven</li>
          <li>Add maple syrup and sesame</li>
        </ol>
      </div>
    </div>
  )
}

export default SweetPotatoPudding;
