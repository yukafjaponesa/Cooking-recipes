import React from 'react';
import picture1 from './20210615koreanchicken.jpg';

function KoreanChickenRiceBowl() {
  return (
    <div>
      <h1>Korean Chicken Rice Bowl 韓国風チキン丼</h1>
      <h3>Tue 15.06.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='korean-chicken-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 400g</li>
            <li>Flour / Cornstach</li>
            <li>☆Kotcujan (Korean spicy miso paste) 1 tbsp</li>
            <li>☆Soy sauce & Sugar & Sake 1/2 tbsp</li>
            <li>☆Vinegar 1 tsp</li>
            <li>☆Grained garic 1/2 tsp</li>
            <li>☆Chili powder 1/3 tsp</li>
            <li>Green onion</li>
            <li>Carrot & onion</li>
            <li>Egg </li>
            <li>Rice</li>
            <li>Sesame oil</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Start cooking rice</li>
          <li>Chop vegs</li>
          <li>Chop chicken in pieces and put flour</li>
          <li>Mix ☆ingredients</li>
          <li>Grill chicken with sesame oil</li>
          <li>Add vegs except green onion</li>
          <li>Make onsen egg - boil water and put in a pot and egg for 7 min</li>
        </ol>
      </div>
    </div>
  )
}

export default KoreanChickenRiceBowl;
