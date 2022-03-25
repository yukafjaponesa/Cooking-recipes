import React from 'react';
import picture1 from './20220330foldcheesekimpa.jpg';
import picture2 from './20220330foldcheesekimpa1.jpg';
import picture3 from './20220330foldcheesekimpa2.jpg';
import picture4 from './20220330foldcheesekimpa3.jpg';

function FoldCheeseKimpa() {
  return (
    <div>
      <h1>Fold Cheese Kimpa 折りたたみチーズキンパ</h1>
      <h3>Wed 30.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='fold-cheese-kimpa' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Rice 120g</li>
            <li>Chopped kimchi 40g</li>
            <li>Tuna can 70g</li>
            <li>Yakiniku-no-tare 1 tsp(bbq sauce)</li>
            <li>Seaweed 1 sheet</li>
            <li>Cheese</li>
            <li>White sesame, sesame oil</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add kimchi, tuna and bbq sauce in rice</li>
          <li>Cut seaweed as in pic</li>
          <img className='food-pic' src={picture2} alt='fold-cheese-kimpa1' />
          <li>Put rice and cheese and fold</li>
          <img className='food-pic' src={picture3} alt='fold-cheese-kimpa2' />
          <br />
          <img className='food-pic' src={picture4} alt='fold-cheese-kimpa3' />
          <li>Warm with microwave oven 20 sec</li>
        </ol>
      </div>
    </div>
  )
}

export default FoldCheeseKimpa;
