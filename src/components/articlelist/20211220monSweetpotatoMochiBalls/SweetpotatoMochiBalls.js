import React from 'react';
import picture1 from './20211220sweetpotatomochiballs.jpg';

function SweetpotatoMochiBalls() {
  return (
    <div>
      <h1>Sweet Potato Mochi Balls さつまいものもちもちボール</h1>
      <h3>Mon 20.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sweetpotato-mochi-balls-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sweet potato 200g(no skin)</li>
            <li>Cheese 20g</li>
            <li>Butter 20g</li>
            <li>Potato starch 5 tbsp</li>
            <li>Flour 2 tbsp</li>
            <li>Sugar 1 tbsp</li>
            <li>Milk 4 tbsp</li>
            <li>Black sesame 1 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Steam sweet potato</li>
          <li>Pre heat oven 180℃</li>
          <li>Cut cheese in 12 pieces</li>
          <li>Add butter in sweet potato while it is still warm</li>
          <li>Add Potato starch, flour, sugar and mix well</li>
          <li>Add Milk and black sesame and mix well adn then make it in 12 pieces</li>
          <li>Make a ball and put cheese inside</li>
          <li>20 min in oven</li>
        </ol>
      </div>
    </div>
  )
}

export default SweetpotatoMochiBalls;
