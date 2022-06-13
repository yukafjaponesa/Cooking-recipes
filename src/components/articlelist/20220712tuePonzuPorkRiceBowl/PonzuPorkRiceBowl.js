import React from 'react';
import picture1 from './20220712ponzuporkricebowl.jpg';

function PonzuPorkRiceBowl() {
  return (
    <div>
      <h1>Ponzu Pork Rice Bowl ポン酢豚丼</h1>
      <h3>Tue 12.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='ponzu-pork-rice-bowl' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Rice 200g</li>
            <li>Pork(豚こま) 100g</li>
            <li>Oil 1 tsp</li>
            <li>Sake 1 tbsp</li>
            <li>Ponzu 3 tbsp</li>
            <li>Ground ginger 1/4 tsp</li>
            <li>Spring onion</li>
            <li>White sesame</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Slice onion and cut pork</li>
          <li>Add oil in a pan and stir pork and onion</li>
          <li>Add sauces</li>
        </ol>
      </div>
    </div>
  )
}

export default PonzuPorkRiceBowl;
