import React from 'react';
import picture1 from './20220223nonbakedmarblecheesecake.jpg';

function NonBakedMarbleCheeseCake() {
  return (
    <div>
      <h1>Non Baked Marble Cheese Cake マーブルチーズケーキ</h1>
      <h3>Wed 23.02.2022</h3>
      <h4>15cm round shape</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='mable-cheese-cake' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Cream cheese 200g</li>
            <li>Milk chocolate 50g</li>
            <li>Heavy cream 100cc</li>
            <li>Non sugar yogurt 100g</li>
            <li>Milk 80cc</li>
            <li>Sugar 60g</li>
            <li>Powder gelatine 5g & water 1 tbsp</li>
            <li>Lemon juice 2 tsp</li>
            <li>Oreo 9 pieces(100g)</li>
            <li>Melted butter(unsalted) 40g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Put oreo cookies in a plastic bag and crush them</li>
          <li>Add butter and mix well</li>
          <li>Put baking paper in a cake shape and add oreo onto the bottom</li>
          <li>Soak gelatine in water</li>
          <li>Add milk in a pot and put on stove until short before boiled</li>
          <li>Remove it from the stove and add gelatine</li>
          <li>Add cream cheese in a bowl and mix well</li>
          <li>Add sugar in it</li>
          <li>Add milk, yogurt and heavy cream in the bowl and mix well</li>
          <li>Add lemon juice</li>
          <li>Melt chocolate and add2 tbsp of cheese sauce</li>
          <li>Pour cheese sauce onto oreo and add chocolate and make marble patterns</li>
          <li>3 hours in fridge</li>
        </ol>
      </div>
    </div>
  )
}

export default NonBakedMarbleCheeseCake;
