import React from 'react';
import picture1 from './20220430salmonavoasparagusgenovese.jpg';

function SalmonAvoAsparagusGenoveseSauce() {
  return (
    <div>
      <h1>Salmon Avo Asparagus Genovese Sauce</h1>
      <h1>サーモン アボカド アスパラガス ジェノベーゼソース</h1>
      <h3>Sat 30.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='genovese-sauce' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Basil 15g(2 leaves for topping)</li>
            <li>Walnuts 15g(almond or whatever you like)</li>
            <li>Powdered cheese 2g</li>
            <li>Olive oil 1 1/3 tbsp</li>
            <li>Ground garlic 1 g</li>
            <li>Salt 1 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Crush nuts and chop basil</li>
          <li>Mix with all</li>
        </ol>
      </div>
    </div>
  )
}

export default SalmonAvoAsparagusGenoveseSauce;
