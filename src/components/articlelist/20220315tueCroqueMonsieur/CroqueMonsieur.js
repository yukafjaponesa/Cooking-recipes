import React from 'react';
import picture1 from './20220315croquemonsieur.jpg';
import picture2 from './20220315croquemonsieurprep.jpg';

function CroqueMonsieur() {
  return (
    <div>
      <h1>Croque Monsieur クロックムッシュ</h1>
      <h3>Tue 15.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='croque-monsieur' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Toast 2 slices</li>
            <li>Cheese 2 slices</li>
            <li>Bacon</li>
            <li>Egg 1</li>
            <li>Sugar, milk 1 tsp/ea</li>
            <li>Salt</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut cheese and toasts in half</li>
          <li>Add egg, sugar, salt and milk in a bowl and mix well</li>
          <li>Add toast in the bowl</li>
          <li>Add oil in a pan and stir toasts with low heat</li>
          <li>Add cheese and bacon and sand with toast</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='croque-monsieur-prep' />
    </div>
  )
}

export default CroqueMonsieur;
