import React from 'react';
import picture1 from './20210731mincedmeatsteak.jpg';

function MincedMeatSteak() {
  return (
    <div>
      <h1>Minced Meat Steak ミンチ肉ステーキ</h1>
      <h3>Sat 31.07.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='mincedmeat-steak-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Minced meat 500g</li>
            <li>Potato starch or flour</li>
            <li>Carrot, corn (or broccoli)</li>
            <li>☆Sledded Onion</li>
            <li>☆Sake, Mirin 1 tbsp/ea</li>
            <li>☆Soy sauce 2 tbsp</li>
            <li>☆Grained garlic 1 tsp</li>
            <li>☆Consome powder 1/2 tsp</li>
            <li>☆Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Make ☆steak sauce</li>
          <li>Mix meat with Cornstarch</li>
          <li>Put meat on wrap and make 3cm high squar</li>
          <li>Cut meat in dice squar</li>
          <li>Gril all the side of meat and add ☆steak sauce</li>
          <li>Add carrot and corn to heat</li>
        </ol>
      </div>
    </div>
  )
}

export default MincedMeatSteak;
