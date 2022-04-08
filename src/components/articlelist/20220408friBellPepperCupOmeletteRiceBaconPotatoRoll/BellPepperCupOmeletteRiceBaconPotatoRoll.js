import React from 'react';
import picture1 from './20220408bellpeppercupomeletterice.jpg';

function BellPepperCupOmeletteRiceBaconPotatoRoll() {
  return (
    <div>
      <h1>Bell Pepper Cup Omelette Rice Bacon Potato Roll</h1>
      <h1>ピーマン丸ごとオムライス & ベーコンとじゃがいものくるくる巻き</h1>
      <h3>Fri 08.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='bell-pepper-cup-omelette-rice' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***Bell pepper cup omelette rice***</li>
            <li>Bell pepper 2 small</li>
            <li>Rice 100g</li>
            <li>Egg 1</li>
            <li>Sausage 2</li>
            <li>Oil 1 tsp</li>
            <li>Milk 1 tbsp</li>
            <li>Cheese 50g</li>
            <li>Ketchup 2 tbsp</li>
            <li>☆Ketchup 1 tbsp</li>
            <li>☆Salt & pepper</li>
            <li>☆Consommé 1/3 tsp</li>
            <li>☆Olive oil 1 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut bell pepper in half</li>
          <li>Cut sausages in small pieces</li>
          <li>Add egg and milk in a bowl and mix</li>
          <li>Make scramble egg</li>
          <li>Add rice, sausage and ingredients for ketchup rice and cook lightly</li>
          <li>Put rice in bell pepper and egg and cheese</li>
          <li>Toast for 3 - 5 min</li>
          <br />
          <li>***For bacon potato roll ***</li>
          <li>Potato 1</li>
          <li>Bacon 70g</li>
          <li>Oil 1 tsp</li>
          <li>Salt & pepper</li>
          <li>Parsley</li>
          <li>Powdered cheese</li>
          <br />
          <li>Thin slice potato and roll with bacon</li>
          <li>Stir it with oil</li>
        </ol>
      </div>
    </div>
  )
}

export default BellPepperCupOmeletteRiceBaconPotatoRoll;
