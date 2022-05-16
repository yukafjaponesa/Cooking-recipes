import React from 'react';
import picture1 from './20220522rollingconsommepotato.jpg';
import picture2 from './20220522potatoricestarch.jpg';

function RollingConsommePotato() {
  return (
    <div>
      <h1>Rolling Consomme Potato くるくるコンソメポテト</h1>
      <h3>22 21.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='rolling-consomme-potato' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Potato 1(150g)</li>
            <li>Flour 1 tbsp</li>
            <li>Oil</li>
            <li>Consomme 1/2 tsp</li>
            <li>Crazy salt 1/2 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Slice potato</li>
          <li>Sift flour and roll it and stick through on a bamboo stick</li>
          <img className='food-pic' src={picture2} alt='potato-starch' />
          <li>Add oil in a pan and fry it with 160℃ 6 - 8 min</li>
          <li>Add salt and consomme in a bowl and add potato (remove from stick)</li>
        </ol>
      </div>
    </div>
  )
}

export default RollingConsommePotato;
