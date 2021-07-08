import React from 'react';
import picture1 from './20210705bltsand.jpg';
import picture2 from './20210705bltprep.jpg';
import picture3 from './20210705blteat.jpg';

function BLTSandwich() {
  return (
    <div>
      <h1>BLT Sandwich BLTサンド</h1>
      <h3>Mon 05.07.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='blt-sand-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Toast</li>
            <li>Bacon</li>
            <li>Lettecu</li>
            <li>Tomato</li>
            <li>Egg</li>
            <li>Avocado</li>
            <li>Mayo or Ketchap</li>
            <li>sesame 2 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Toast up toast bread</li>
          <li>Make a sunny side egg</li>
          <li>Grill bacon</li>
          <li>Prep vegs</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='blt-prep-pic' />
      <img className='food-pic' src={picture3} alt='blt-eat-pic' />
    </div>
  )
}

export default BLTSandwich;
