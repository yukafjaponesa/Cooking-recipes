import React from 'react';
import picture1 from './20220706eggplantporkshabushabu.jpg';

function EggplantPorkShabuShabu() {
  return (
    <div>
      <h1>Eggplant Pork Shabu Shabu ナスと豚しゃぶ肉の香味ドレッシングサラダ</h1>
      <h3>Wed 06.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='eggplnat-pork-shabu' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Eggplant 2</li>
            <li>Olive oil 1 tbsp</li>
            <li>Perilla 3 leaves</li>
            <li>Pork(豚バラ) 150g</li>
            <li>Soy sauce, vinegar 1 tbsp/ea</li>
            <li>Ground ginger & garlic 1/2 tsp/ea</li>
            <li>Sesame oil, sesame 1/2 tbsp</li>
            <li>Ground japanese radish(大根おろし)</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut eggplants and score skin</li>
          <li>Skin side down and pour olive oil. Toast for 7 min</li>
          <li>Boil thin sliced pork</li>
          <li>Chop perilla</li>
          <li>Mix pork and eggplant and put on a plate</li>
          <li>Top with radish and perilla</li>
          <li>Pour sauces</li>
        </ol>
      </div>
    </div>
  )
}

export default EggplantPorkShabuShabu;
