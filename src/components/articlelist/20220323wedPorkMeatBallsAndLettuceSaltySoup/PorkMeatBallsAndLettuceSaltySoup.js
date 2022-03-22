import React from 'react';
import picture1 from './20220323porkmeatballslettucesoup.jpg';

function PorkMeatBallsAndLettuceSaltySoup() {
  return (
    <div>
      <h1>Pork Meat Balls And Lettuce Salty Soup 豚団子とレタスの旨塩スープ</h1>
      <h3>Wed 23.03.2022</h3>
      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='pizza-toast' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Grains pork meat 140g</li>
            <li>Chopped Enoki (mushroom) 10g</li>
            <li>Lettuce 150g</li>
            <li>☆Potato starch 1.5 tbsp</li>
            <li>☆Miso paste 1.5 tsp</li>
            <li>☆Soy sauce, sugar 1 tsp</li>
            <li>○Water 630ml</li>
            <li>○Mirin 1 tbsp</li>
            <li>○Consommé 2 tsp</li>
            <li>○White dashi 1.5 tsp</li>
            <li>○Salt 1/2 tsp</li>
            <li>○Black pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add pork, enoki mushroom and ☆ in a bowl and mix well and make meat balls</li>
          <li>Add ○ in a pot and boil</li>
          <li>Add meat balls and cook</li>
          <li>Add lettuce small pieces</li>
        </ol>
      </div>
    </div>
  )
}

export default PorkMeatBallsAndLettuceSaltySoup;
