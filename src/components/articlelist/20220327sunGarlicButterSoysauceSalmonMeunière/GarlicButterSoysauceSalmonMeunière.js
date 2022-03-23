import React from 'react';
import picture1 from './20220327garlicbuttersoysaucesalmonneuniere.jpg';
import picture2 from './20220327glazedcarrot.jpg';

function GarlicButterSoysauceSalmonMeunière() {
  return (
    <div>
      <h1>Garlic Butter Soy Sauce Salmon Meunière</h1>
      <h1>鮭のガリバタ醤油ムニエル～人参グラッセ～</h1>
      <h3>Sun 27.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='garlic-butter-soy-sauce-salmon-meuniere' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Salmon 2 filets</li>
            <li>Flour 1 tbsp</li>
            <li>Garlic 1 glove</li>
            <li>Sake, soy sauce, mirin 1 tbsp/ea</li>
            <li>Black pepper</li>
            <li>Butter 10g</li>
            <li>Lemon juice</li>
            <li>***For glazed carrot***</li>
            <li>Carrot 1(200g)</li>
            <li>Butter, sugar 1 tbsp/ea</li>
            <li>Water</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Slice garlic</li>
          <li>Sift flour on salmon</li>
          <li>Add butter in a pan and vook garlic</li>
          <li>Cook salmon and add sauces</li>
          <br />
          <li>***For glazed carrot***</li>
          <li>Cut/slice carrot and add in a pot and cover it with water</li>
          <li>Add all in a pan and to boil</li>
          <li>After boiling, turn down to low heat to cook for 20 min</li>
          <li>Turn it on high heat to dry the water</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='glazed-carrot' />
    </div>
  )
}

export default GarlicButterSoysauceSalmonMeunière;
