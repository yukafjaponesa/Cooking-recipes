import React from 'react';
import picture1 from './20220505currypilaf.jpg';

function CurryPilaf() {
  return (
    <div>
      <h1>Curry Pilaf 炊飯器でカレーピラフ</h1>
      <h3>Thu 05.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='curry-pilaf' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Rice 2 cups</li>
            <li>Mixed veg 1/2 cup(carrot, corn & green peas)</li>
            <li>Onion 1/4</li>
            <li>Sausage 4 - 5 sticks</li>
            <li>Consommé 1 tsp</li>
            <li>Ketchup 1/2 tsp</li>
            <li>Curry powder 1 tsp</li>
            <li>Butter 10g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop vegs, cut sausages</li>
          <li>Add rice, water and all the other(except butter) in a rice cooker and cook</li>
          <li>After cooking, add butter and parsley or black pepper</li>
        </ol>
      </div>
    </div>
  )
}

export default CurryPilaf;
