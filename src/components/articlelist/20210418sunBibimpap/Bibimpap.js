import React from 'react';
import picture1 from './20210418bibimpap.jpg';

function Bibimpap() {
  return (
    <div>
      <h1>Korean Bibimpap ビビンバ</h1>
      <h3>Sun 18.04.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='soba-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chopped meat</li>
            <li>For Namuru</li>
            <li>Carrot & Cabbege</li>
            <li>Chicken soup broth, soy sauce, sesame oil</li>
            <li>Onion</li>
            <li>Cucumber</li>
            <li>Soy sauce</li>
            <li>Kotcujan - Korean spicy miso paste</li>
            <li>Sugar</li>
            <li>Egg</li>
            <li>Rice</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook rice</li>
          <li>Make namuru salad. Chop carot and cabbege in thin slice</li>
          <li>Marinate with chicken broth & soy sauce</li>
          <li>Slice onion and cucumber</li>
          <li>Stir fry the meat and put sauces</li>
          <li>Make boiled water for egg. After boiling, stop the stove and put the egg for 10 minutes</li>
          <li>Put all ingredients on top of rice and mix everything to eat</li>
        </ol>
      </div>
    </div>
  )
}

export default Bibimpap;
