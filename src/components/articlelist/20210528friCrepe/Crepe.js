import React from 'react';
import picture1 from './20210528crepe.jpg';

function Crepe() {
  return (
    <div>
      <h1>Crepe クレープ</h1>
      <h3>Fri 28.05.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='crepe-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>For Crepe 5 sheets 26cm pan</li>
            <li>Milk 220ml</li>
            <li>Flour 50g</li>
            <li>Sugar 10g</li>
            <li>Egg 1</li>
            <li>Salat oil 1tsp</li>
            <li>For Whipped cream</li>
            <li>Geratin 4g</li>
            <li>Water 20g</li>
            <li>Milk 200g</li>
            <li>Sugar 1.5g</li>
            <li>Condenced milk 7g</li>
            <li>Zeratin 4g</li>
            <li>For toppings</li>
            <li>Kiwi, Mango, Strawberry, Yogurht</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Mix flour, sugar and egg in a bowl</li>
          <li>Add milk little by little in the bowl and mix each time</li>
          <li>Put salat oil and put a rap and rest in a fridge for 1 hour</li>
          <li>Take out the bowl and mix again and heat up a pan with a bit of oil</li>
          <li>Put the mixture and make a thin crepe</li>
          <li>For Whipped cream</li>
          <li>Mix geratin and water and mix well and rest for 10 min in fridge</li>
          <li>When geratin is ready, put milk, sugar and condenced milk in a pan and put mid heat</li>
          <li>Mix well and when it begins to boil, stop the heat</li>
          <li>Put geratin and mix for 1 min for melting</li>
          <li>Put the content in a bowl with a cold water in another bowl</li>
          <li>Use hand mixer with low to mid speed until it gets thicker</li>
          <li>After that, put faster speed. Total 8 min to mix</li>
          <li>Serve with your favourite fruits and sauces</li>
        </ol>
      </div>
    </div>
  )
}

export default Crepe;
