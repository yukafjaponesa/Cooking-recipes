import React from 'react';
import picture1 from './20220220oreocheesecake.jpg';
import picture2 from './20220220oreo.jpg';
import picture3 from './20220220oreomixer.jpg';

function OreoCheeseCake() {
  return (
    <div>
      <h1>Oreo Cheese Cake オレオチーズケーキ</h1>
      <h3>Sun 20.02.2022</h3>
      <h4>15cm round cake shape</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='oreo-cheese-cake' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Powder gelatine 10g & water 50g</li>
            <li>Unsalted butter 90g</li>
            <li>Oreo cookie 27 pieces(300g)</li>
            <li>Cream cheese 200g</li>
            <li>Yogurt 100g</li>
            <li>Milk 100cc</li>
            <li>Sugar 65g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Make oreo cookies powder with food processor and take 3 tbsp from it</li>
          <li>Melt butter and add into oreo and spread in a cake shape and rest in fridge</li>
          <img className='food-pic' src={picture2} alt='oreo' />
          <li>Soak gelatine in water</li>
          <li>Add other ingredients and 3 tbsp of oreo in food processor</li>
          <li>Add gelatine in microwave oven for 20 sec with 600w</li>
          <li>Add gelatine in food processor</li>
          <img className='food-pic' src={picture3} alt='oreo-mixer' />
          <li>Pour it into oreo shape</li>
          <li>6 hours in fridge</li>
        </ol>
      </div>
    </div>
  )
}

export default OreoCheeseCake;
