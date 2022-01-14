import React from 'react';
import picture1 from './20220114tandoorichicken.jpg';
import picture2 from './20220114tandoorichickenprep.jpg';

function TandooriChicken() {
  return (
    <div>
      <h1>Tandoori Chicken タンドリーチキン</h1>
      <h3>Fri 14.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='tandoori-chicken' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 300g</li>
            <li>Non-sugar yogurt 50g</li>
            <li>Curry powder 1 tbsp</li>
            <li>Ketchap 1 tbsp</li>
            <li>Graind ginger & garlic & honey 1 tsp/ea</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut chicken in small pieces and marinate with the ingredients</li>
          <li>Rest in fridge for about 2 hours</li>
          <img className='food-pic' src={picture2} alt='tandoori-chicken-prep' />
          <li>Pre heat oven 200℃</li>
          <li>Bake for 20 min</li>
        </ol>
      </div>
    </div>
  )
}

export default TandooriChicken;
