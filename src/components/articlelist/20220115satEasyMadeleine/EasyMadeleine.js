import React from 'react';
import picture1 from './20220115easymadeleine.jpg';

function EasyMadeleine() {
  return (
    <div>
      <h1>Easy Madeleine with hot cake mix 簡単マドレーヌ</h1>
      <h3>Sat 15.01.2022</h3>
      <h4>8cm Aluminium Cup 8 cups</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='easy-madeleine' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Hot cake mix 100g</li>
            <li>or</li>
            <li>Sugar 20g,Baking powder 1 tsp (4g),Salt a bit,Flour 76g(total up to 100g)</li>
            <li>Sugar 70g(I used 50g)</li>
            <li>Unsalted butter 100g</li>
            <li>Beaten eggs 2</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 180℃</li>
          <li>Put butter and sugar in a bowl and mix till whiten</li>
          <li>Add beaten egg slowly and mix well</li>
          <li>Add hot cake mix and mix well</li>
          <li>Add in baking cups and bake for 15 - 20 min </li>
        </ol>
      </div>
    </div>
  )
}

export default EasyMadeleine;
