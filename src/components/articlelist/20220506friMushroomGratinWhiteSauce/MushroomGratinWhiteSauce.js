import React from 'react';
import picture1 from './20220506mushroomgratin.jpg';
import picture2 from './20220506mushroomgratinbeforeoven.jpg';

function MushroomGratinWhiteSauce() {
  return (
    <div>
      <h1>Mushroom Gratin White Sauce ホワイトソースでマッシュルームグラタン</h1>
      <h3>Fri 06.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='mushroom-gratin' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Sweet potato 100g</li>
            <li>Shimeji 40g</li>
            <li>Enoki 50g</li>
            <li>Shiitake 1 stick</li>
            <li>Sliced onion 50g</li>
            <li>Chicken 50g</li>
            <li>Flour 2 tbsp</li>
            <li>Butter 10g</li>
            <li>Milk 250ml</li>
            <li>Pepper and salt</li>
            <li>Consommé 1/2 tsp</li>
            <li>Cheese 20g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut mushrooms and chicken and cut sweet potato into quarter-rounds, peel the skin</li>
          <li>Add butter in a pan and cook chicken and sweet potato</li>
          <li>Add mushroom room and onion</li>
          <li>Add flour</li>
          <li>Add milk little by little</li>
          <li>Add pepper and salt and consommé</li>
          <li>Add cheese and toast for 8 min</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='mushroom-gratin-before-baking' />
    </div>
  )
}

export default MushroomGratinWhiteSauce;
