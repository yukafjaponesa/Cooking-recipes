import React from 'react';
import picture1 from './20220705stirporkeggplantmiso.jpg';

function StirPorkEggplantMisoPaste() {
  return (
    <div>
      <h1>Stir Pork Eggplant Miso Paste 豚肉とナスの味噌炒め</h1>
      <h3>Tue 05.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='pork-eggplant-miso' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Eggplant 2 smalls</li>
            <li>Miso paste 2 tbsp</li>
            <li>Mirin, honey 1 tbsp/ea</li>
            <li>Ground garlic 1/2 tsp</li>
            <li>Ground ginger 1/4 tsp</li>
            <li>Pork(豚こま) 150g</li>
            <li>Spring onion</li>
            <li>Oil</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Slice eggplants and remove skin for 3 stripes</li>
          <li>Add oil in a pan and stir pork and eggplant</li>
          <li>Add sauces</li>
        </ol>
      </div>
    </div>
  )
}

export default StirPorkEggplantMisoPaste;
