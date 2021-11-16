import React from 'react';
import picture1 from './20211116locomoco.jpg';

function LocoMoco() {
  return (
    <div>
      <h1>Loco Moco ロコモコ丼</h1>
      <h3>Tue 16.11.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='locomoco-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Grained meat</li>
            <li>Flour, egg, .onion, breadcrumb, Nutsmeg, salt & pepper</li>
            <li>Uster sauce, ketchap(or red wine)</li>
            <li>Rice</li>
            <li>Lettuce, tomato, avocado</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Make burger patie</li>
          <li>Use same pan to make sauce after cooking burger patie</li>
          <li>Add ketchap and uster sauce</li>
          <li>Make sunny side egg</li>
        </ol>
      </div>
    </div>
  )
}

export default LocoMoco;
