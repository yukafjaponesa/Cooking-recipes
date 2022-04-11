import React from 'react';
import picture1 from './20220410southgermanfood.jpg';
import picture2 from './20220410ingredients.jpg';
import picture3 from './20220410pasta1.jpg';
import picture4 from './20220410pasta2.jpg';

function SouthGermanStyleStewedLentilsWithSpätzle() {
  return (
    <div>
      <h1>South German Style Stewed Lentils With Spätzle</h1>
      <h1>南ドイツ風レンズ豆煮込み～シュペッツレ添え～</h1>
      <h3>Sun 10.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='south-german-food' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Spätzle 125g(for 2 servings)</li>
            <li>Sausages</li>
            <li>(Below for 4 servings)</li>
            <li>Lentil 250g</li>
            <li>Bacon 3 slices</li>
            <li>Carrot, onion, potato 1/ea</li>
            <li>Celery 1/2</li>
            <li>Bay lief ローリエ　1</li>
            <li>Red wine 1/2 cup</li>
            <li>Water or dashi</li>
            <li>Vinegar 2 - 4 tbsp</li>
            <li>Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Put lentil in water for over night or boiled for 10 min from cold water</li>
          <img className='food-pic' src={picture2} alt='ingredients' />
          <li>Chop vegs and bacon</li>
          <li>Add oil in a large pod and cook onion and bacon</li>
          <li>Add lentil, carrot, potato, celery and bay leaf. Add water to fulfil</li>
          <li>Add red wine also</li>
          <li>After boiling, turn to low heat and cook for 30 - 40 min till lentil is soften</li>
          <li>Add salt and pepper and sausage to cook for 5 min</li>
          <li>Add vinegar and cook for 5 more min and done</li>
          <li>Cook Spätzle in boiled eater for 18 min</li>
          <img className='food-pic' src={picture3} alt='spaetzel1' />
          <br />
          <img className='food-pic' src={picture4} alt='spaetzel2' />
        </ol>
      </div>
    </div>
  )
}

export default SouthGermanStyleStewedLentilsWithSpätzle;
