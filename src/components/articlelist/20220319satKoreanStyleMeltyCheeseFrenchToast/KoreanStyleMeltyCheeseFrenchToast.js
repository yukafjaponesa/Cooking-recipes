import React from 'react';
import picture1 from './20220319koreanstylemeltycheesefrenchtoast.jpg';
import picture2 from './20220319meltycheesefrenchtoast1.jpg';
import picture3 from './20220319meltycheesefrenchtoast2.jpg';
import picture4 from './20220319meltycheesefrenchtoast3.jpg';

function KoreanStyleMeltyCheeseFrenchToast() {
  return (
    <div>
      <h1>Korean Style Melty Cheese French Toast</h1>
      <h1>韓国風とろーりチーズのフレンチトースト</h1>
      <h3>Sat 19.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='korean-french-toast' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Toast 1</li>
            <li>Beaten eggs 2</li>
            <li>Salt</li>
            <li>Butter 10g</li>
            <li>Cheese</li>
            <li>Butter 10g</li>
            <li>Sugar 1 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add butter in a pan and beaten egg</li>
          <li>Cut toast in half and sink in eggs</li>
          <img className='food-pic' src={picture2} alt='korean-french-toast1' />
          <li>Add cheese and fold 4 sides</li>
          <img className='food-pic' src={picture3} alt='korean-french-toast2' />
          <li>Fold in half and cook both sides well</li>
          <li>Remove it and add anoter butter and sugar in the pan</li>
          <li>Put toast back and mix with sugar</li>
          <img className='food-pic' src={picture4} alt='korean-french-toast3' />
        </ol>
      </div>
    </div>
  )
}

export default KoreanStyleMeltyCheeseFrenchToast;
