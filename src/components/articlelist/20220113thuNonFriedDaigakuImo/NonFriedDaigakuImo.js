import React from 'react';
import picture1 from './20220113nonfrieddaigakuimo.jpg';

function NonFriedDaigakuImo() {
  return (
    <div>
      <h1>Non Fried Daigaku Imo 揚げない大学芋</h1>
      <h3>Thu 13.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='daigaku-imo' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sweet potato 300g(medium size 1)</li>
            <li>Oil 1 tbsp</li>
            <li>Sugar 2 tbsp</li>
            <li>Soy sauce 1 tsp</li>
            <li>Mirin 1 tbsp</li>
            <li>Black sesame</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Wash and cut sweet potato</li>
          <li>Rest in water for 5 min</li>
          <li>Drain water and steam till soften(or 600w microwave oven 4 - 5 min with wrap)</li>
          <li>Add oil in a pan and stir fry sweet potato till browned</li>
          <li>Add sugar, soy sauce and mirin and mix well</li>
          <li>Add black sesame</li>
        </ol>
      </div>
    </div>
  )
}

export default NonFriedDaigakuImo;
