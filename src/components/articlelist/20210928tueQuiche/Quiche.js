import React from 'react';
import picture1 from './20210928quiche.jpg';
import picture2 from './20210928quichepack.jpg';

function Quiche() {
  return (
    <div>
      <h1>Quiche キッシュ</h1>
      <h3>Tue 28.09.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='quiche-pic' />
        <img className='food-pic' src={picture2} alt='quichepack-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Frozen quiche</li>
            <li>For chicken marinated sald</li>
            <li>Bell pepper, carrot, onion</li>
            <li>Flour</li>
            <li>Vinegar 3 tbsp</li>
            <li>Sugar 1 tbsp</li>
            <li>Sake or white wine 2 tbsp</li>
            <li>Seed mustard 1 tsp</li>
            <li>Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Bake quiche</li>
          <li>Thin slice vegs</li>
          <li>Cover chicken with flour</li>
          <li>First, stir fry chicken</li>
          <li>Put in a bowl</li>
          <li>Stir fry vegs in the same pan</li>
          <li>Add sauces</li>
          <li>Add vegs and sauce into chicken bowl and let for 10 min to be marinated</li>
        </ol>
      </div>
    </div>
  )
}

export default Quiche;
