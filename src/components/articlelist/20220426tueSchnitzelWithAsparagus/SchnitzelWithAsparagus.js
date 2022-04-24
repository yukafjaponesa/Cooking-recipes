import React from 'react';
import picture1 from './20220426schnitzelwithasparagus.jpg';

function SchnitzelWithAsparagus() {
  return (
    <div>
      <h1>Schnitzel With Asparagus シュニッツェル アスパラガス</h1>
      <h3>Tue 26.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='schnitzel-asparagus' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Schnitzel meat</li>
            <li>Asparagus</li>
            <li>Potato</li>
            <li>Egg</li>
            <li>Bread crumbles</li>
            <li>Butter</li>
            <li>Salt & pepper</li>
            <li>Sauce Hollandaise</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook potatoes</li>
          <li>Boil asparagus</li>
          <li>Make schnitzel cuttlet</li>
        </ol>
      </div>
    </div>
  )
}

export default SchnitzelWithAsparagus;
