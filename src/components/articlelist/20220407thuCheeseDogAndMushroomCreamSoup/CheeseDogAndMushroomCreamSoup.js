import React from 'react';
import picture1 from './20220407cheesedogmushroomcreamsoup.jpg';
import picture2 from './20220407cheesedog.jpg';

function CheeseDogAndMushroomCreamSoup() {
  return (
    <div>
      <h1>Cheese Dog And Mushroom Cream Soup</h1>
      <h1>卵焼き器でチーズドッグ & きのこクリームスープ</h1>
      <h3>Thu 07.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='cheese-dogmushroom-cream-soup' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***Cheese dog 4 sticks***</li>
            <li>Pancake mix 200g</li>
            <li>Sugar 30g</li>
            <li>Egg 1</li>
            <li>Milk 120cc</li>
            <li>Oil 1 tsp</li>
            <li>Butter, cheese</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Mix all except cheese, oil and butter</li>
          <li>Add oil in a pan and pour 1/4 dough</li>
          <li>Spread melted butter and put cheese and roll it</li>
          <img className='food-pic' src={picture2} alt='cheese-dog' />
          <br />
          <li>***For Mushroom cream soup***</li>
          <li>Shiitake, Shimeji, maitke 50g/ea</li>
          <li>Bacon 40g</li>
          <li>Garlic 1 glove</li>
          <li>Butter 15g</li>
          <li>Flour 2 tbsp</li>
          <li>Milk 200cc</li>
          <li>Heavy cream 100ml</li>
          <li>Salt 1 tsp</li>
          <li>Pepper, paserly</li>
          <br />
          <li>Chop mushrooms, garlic and bacon</li>
          <li>Add butter, garlic and bacon to cook in a pot</li>
          <li>Add mushroom</li>
          <li>Add flour</li>
          <li>Add milk little by little and then heavy cream</li>
        </ol>
      </div>
    </div>
  )
}

export default CheeseDogAndMushroomCreamSoup;
