import React from 'react';
import picture1 from './20220224cheesecaketastewithyogurt.jpg';

function CheeseCakeTasteWithYogurt() {
  return (
    <div>
      <h1>Cheese Cake Taste With Yogurt ヨーグルトで簡単！チーズケーキ風</h1>
      <h3>Thu 24.02.2022</h3>
      <h4>For 3 servings</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='cheese-cake-yogurt' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pancake mix 150g</li>
            <li>Non sugar yogurt 250g</li>
            <li>Sugar 60g</li>
            <li>Egg 2</li>
            <li>Oil 3 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 180℃</li>
          <li>Add egg in a bowl and beaten</li>
          <li>Add sugar and mix</li>
          <li>Add oil and mix</li>
          <li>Add yogurt and sift pancake mix and mix with a rubber spatula</li>
          <li>Bake for 40 min</li>
        </ol>
      </div>
    </div>
  )
}

export default CheeseCakeTasteWithYogurt;
