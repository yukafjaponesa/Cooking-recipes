import React from 'react';
import picture1 from './20220615tofuchickennuggets.jpg';
import picture2 from './20220615chicekncrushed.jpg';

function TofuChickenNuggets() {
  return (
    <div>
      <h1>Tofu Chicken Nuggets 豆腐でチキンナゲット</h1>
      <h3>Wed 15.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tofu-chicken-nuggets' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 180g(3 sticks)</li>
            <li>Tofu 100g</li>
            <li>Mayo 1 tbsp</li>
            <li>Salt & pepper</li>
            <li>Ground garlic 1 tsp</li>
            <li>Powdered cheese 1 tsp</li>
            <li>Aosa nori 1 tbsp</li>
            <li>Potato starch 2 tbsp</li>
            <li>Oil 4 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop chicken and crush to spread</li>
          <img className='food-pic' src={picture2} alt='chicken-crushed' />
          <li>Mix with all the ingredients and deep fried</li>
        </ol>
      </div>
    </div>
  )
}

export default TofuChickenNuggets;
