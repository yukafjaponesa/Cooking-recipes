import React from 'react';
import picture1 from './20220322meatpastawithwholeonion.jpg';
import picture2 from './20220322graindgarliconion.jpg';

function MeatPastaWithWholeOnion() {
  return (
    <div>
      <h1>Meat Pasta With Whole Onion 丸ごと玉ねぎのワンパンミートパスタ</h1>
      <h3>Tue 22.03.2022</h3>
      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='meat-pasta-whole-onion' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Grated onion 1 big </li>
            <li>Grated garlic 1/2 tsp</li>
            <li>Grains meat 150g</li>
            <li>Olive oil 1 tbsp</li>
            <li>Oster sauce 1/2 tbsp</li>
            <li>Ketchup 90g</li>
            <li>Consommé 1/2 tsp</li>
            <li>Water 400ml</li>
            <li>Spaghetti 160g</li>
            <li>Parsley, powdered cheese </li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add meat, onion and garlic in a pan</li>
          <img className='food-pic' src={picture2} alt='graind-onion-garlic' />
          <li>After meat is cooked, add all except cheese and parsley</li>
        </ol>
      </div>
    </div>
  )
}

export default MeatPastaWithWholeOnion;
