import React from 'react';
import picture1 from './20220727chocomarshmallowpizza.jpg';
import picture2 from './20220727pizzadough.jpg';
import picture3 from './20220727pizzachoco.jpg';
import picture4 from './20220727pizzapiece.jpg';

function ChocoMarshmallowPizza() {
  return (
    <div>
      <h1>Choco Marshmallow Pizza チョコとマシュマロのピザ</h1>
      <h3>Wed 27.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='choco-marshmallow-pizza' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Marshmallow 50g</li>
            <li>Milk chocolate 100g</li>
            <li>Oil 1 tsp</li>
            <li>Pancake mix 150g</li>
            <li>Salt 1/3 tsp</li>
            <li>Oil 1 tbsp</li>
            <li>Milk 50cc</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop chocolate, cut marshmallows in half</li>
          <li>Add pancake mix, oil 1 tbsp, milk and salt in a plastic bag and mix to gather</li>
          <img className='food-pic' src={picture2} alt='pizza-dough' />
          <li>Spread oil in a pan</li>
          <li>Spread pizza dough in it and make a wall around it</li>
          <li>Top with chocolate and 15 - 20 min with low heat with a lid</li>
          <img className='food-pic' src={picture3} alt='pizza-choco' />
          <li>Turn off the heat and add marshmallows</li>
          <li>Turn the heat with very low heat and put lid and 5 - 7 min</li>
          <img className='food-pic' src={picture4} alt='pizza-piece' />
        </ol>
      </div>
    </div>
  )
}

export default ChocoMarshmallowPizza;
