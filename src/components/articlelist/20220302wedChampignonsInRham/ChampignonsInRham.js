import React from 'react';
import picture1 from './20220302champignonsinrham.jpg';
import picture2 from './20220302champignonsinrhamknorr1.jpg';
import picture3 from './20220302champignonsinrhamknorr2.jpg';

function ChampignonsInRham() {
  return (
    <div>
      <h1>Champignons In Rham きのこのクリームソース</h1>
      <h3>Wed 02.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='champignons-in-rham1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pork</li>
            <li>Mushrooms 500g</li>
            <li>Heavy cream 200cc</li>
            <li>Potato</li>
            <li>Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Slice mushrooms and stir</li>
          <li>Add 100ml cold water and knorr powder</li>
          <li>Cook pork meat</li>
          <li>Make mashed potato</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='champignons-in-rham2' />
      <br />
      <img className='food-pic' src={picture3} alt='champignons-in-rham3' />
    </div>
  )
}

export default ChampignonsInRham;
