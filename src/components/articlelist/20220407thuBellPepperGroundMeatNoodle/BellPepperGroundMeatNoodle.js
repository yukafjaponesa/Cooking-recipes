import React from 'react';
import picture1 from './20220407bellpeppergroundmeatnoodle.jpg';

function BellPepperGroundMeatNoodle() {
  return (
    <div>
      <h1>Bell Pepper Ground Meat Noodle ピーマンそぼろ麺</h1>
      <h3>Thu 07.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='bell-pepper-ground-meat-noodle' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Bell pepper 5 small</li>
            <li>Ground ginger 1/2 tsp</li>
            <li>Ground pork 100g</li>
            <li>Sesame oil 1 tbsp</li>
            <li>Sake 1 tbsp</li>
            <li>Oyster sauce 1.5 tbsp</li>
            <li>Consommé 1/2 tsp</li>
            <li>Sesame oil 1 tbsp</li>
            <li>Soumen noodle 1</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook soumen noodle</li>
          <li>Add sesame oil and ginger in a pan and cook pork and add sake</li>
          <li>Add bell pepper</li>
          <li>Add oyster sauce and consommé</li>
          <li>Mix sesame oil and soumen noodle</li>
        </ol>
      </div>
    </div>
  )
}

export default BellPepperGroundMeatNoodle;
