import React from 'react';
import picture1 from './20220616chickenpiccata.jpg';
import picture2 from './20220616piccatasauce.jpg';

function ChickenPiccata() {
  return (
    <div>
      <h1>Chicken Piccata チキンピカタ</h1>
      <h3>Thu 16.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chicken-piccata' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 3 sticks</li>
            <li>Salt 1/3 tsp</li>
            <li>Beaten egg 2</li>
            <li>Aosa nori 1 tbsp</li>
            <li>Powdered cheese 2 tbsp</li>
            <li>Oil 4 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut chicken in 3 pieces each and spread</li>
          <li>Add salt on it</li>
          <li>Mix others and add chicken in it</li>
          <img className='food-pic' src={picture2} alt='piccata-sauce' />
          <li>Stir fry</li>
        </ol>
      </div>
    </div>
  )
}

export default ChickenPiccata;
