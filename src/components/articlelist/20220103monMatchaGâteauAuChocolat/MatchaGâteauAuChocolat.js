import React from 'react';
import picture1 from './20220103matchgateauauchocolat1.jpg';
import picture2 from './20220103matchgateauauchocolat2.jpg';

function MatchaGâteauAuChocolat() {
  return (
    <div>
      <h1>Matcha Gâteau Au Chocolat 抹茶ガトーショコラ</h1>
      <h3>Mon 03.01.2022</h3>
      <h4>18 x 13 cm egg roll frying-pan</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='match-gateau-au-chocolat1-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>White chocolate 80g(I used 100g)</li>
            <li>Unsalted butter 60g</li>
            <li>Sugar 3 tbsp(I didn't use sugar at all)</li>
            <li>Egg 1</li>
            <li>Flour 60g</li>
            <li>Match powder 1 tbsp</li>
            <li>Mix nuts 30g</li>
            <li>Butter 5g for coating</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add white chocolate and butter in a bowl and melt them</li>
          <li>(add sugar here and remove from hot water)</li>
          <li>Add egg and mix well</li>
          <li>Sift flour and matcha and mix well</li>
          <li>Coat fring-pan with butter and pour chocolate</li>
          <li>Add mix nuts</li>
          <li>Cover with alminum folie and 20 30 min with low heat</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='match-gateau-au-chocolat2-pic' />
    </div>
  )
}

export default MatchaGâteauAuChocolat;
