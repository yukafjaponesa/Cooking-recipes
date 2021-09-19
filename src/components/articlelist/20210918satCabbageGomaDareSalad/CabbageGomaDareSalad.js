import React from 'react';
import picture1 from './20210918cabaggegomadaresalad.jpg';

function CabbageGomaDareSalad() {
  return (
    <div>
      <h1>Cabbage Goma Dare Salad ゴマダレキャベツサラダ</h1>
      <h3>Sat 18.09.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='cabagge-gomadare-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cabagge</li>
            <li>Mayo 2 tbsp</li>
            <li>Crushed sesame 1 tbsp</li>
            <li>Soy sauce, sugar, vinegar, dashi 1 tsp/ea</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Slice cabagge and let in salt</li>
          <li>Drain cabagge and mix with sauces</li>
        </ol>
      </div>
    </div>
  )
}

export default CabbageGomaDareSalad;
