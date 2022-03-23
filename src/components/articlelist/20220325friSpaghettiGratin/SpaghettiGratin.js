import React from 'react';
import picture1 from './20220325spaghettigratin.jpg';

function SpaghettiGratin() {
  return (
    <div>
      <h1>Spaghetti Gratin スパゲッティグラタン</h1>
      <h3>Fri 25.03.2022</h3>
      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='spaghetti-gratin' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Spaghetti 100g</li>
            <li>Bacon 40g</li>
            <li>Butter 10g</li>
            <li>Flour 2 tbsp</li>
            <li>Milk 400cc</li>
            <li>Consommé 2 tsp</li>
            <li>Corn 30g</li>
            <li>Cheese 40g</li>
            <li>Bread crumbs 2 tbsp</li>
            <li>Parsley</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add butter in a pan and cook bacon</li>
          <li>Cover spaghetti in cooking paper and fold in small length</li>
          <li>Add flour</li>
          <li>Then add pasta, milk, consommé and corn to cook u til pasta is done</li>
          <li>Add in a plate and add cheese and bread crumbs</li>
          <li>10 min in a toaster</li>
          <li>Add parsley</li>
        </ol>
      </div>
    </div>
  )
}

export default SpaghettiGratin;
