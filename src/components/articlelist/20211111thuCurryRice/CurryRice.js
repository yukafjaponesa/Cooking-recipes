import React from 'react';
import picture1 from './20211111curryrice.jpg';
import picture2 from './20211111curryricepack.jpg';

function CurryRice() {
  return (
    <div>
      <h1>Curry Rice カレーライス</h1>
      <h3>Thu 11.11.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='curry-rice-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Beef or chicken or pork</li>
            <li>Carrot, potato, onion</li>
            <li>Curry roux</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Start cooking rice</li>
          <li>Chop vegs</li>
          <li>Heat oil and cook vegs and meat</li>
          <li>Add water and cook for 20 min after boiling</li>
          <li>Turn off the heat and add curry roux and melt it</li>
          <li>Cook for 5 min with low heat</li>
        </ol>
        <img className='food-pic' src={picture2} alt='curry-rice-pack-pic' />
      </div>
    </div>
  )
}

export default CurryRice;
