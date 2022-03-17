import React from 'react';
import picture1 from './20220317pommeswithmayo.jpg';
import picture2 from './20220317bakedpommes.jpg';
import picture3 from './20220317pommescoating.jpg';

function FriedPotatoesWithMayoSauce() {
  return (
    <div>
      <h1>Fried Potatoes With Mayo Sauce ポテフラとマヨソース</h1>
      <h3>Thu 17.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='pommes-mayo-sauce' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Yellow potato 7 -8</li>
            <li>Avocado oil or raps oil 3 -4 tbsp</li>
            <li>☆Garlic powder 1 tsp</li>
            <li>☆Oregano, red pepper flakes, dried parsley 1/2 tsp/ea</li>
            <li>☆Salt & pepper</li>
            <li>〇Mayo 4- 5 tbsp</li>
            <li>〇Mustard, honey 1/2 tsp</li>
            <li>〇Lemon juice, garlic powder, dried parsley, salt 1/4 tsp/ea</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut potatoes in wedges</li>
          <li>Boil for 8 - 10 min</li>
          <li>Pre heat oven 200℃</li>
          <li>Mix ☆ and coat potato with it</li>
          <img className='food-pic' src={picture2} alt='pommes-coating' />
          <li>Bake for 15- 20 min</li>
          <img className='food-pic' src={picture3} alt='pommes-baked' />
          <li>Mix 〇 to make mayo dip</li>
        </ol>
      </div>
    </div>
  )
}

export default FriedPotatoesWithMayoSauce;
