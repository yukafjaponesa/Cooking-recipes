import React from 'react';
import picture1 from './20220104yogurtcakeavosmoothie1.jpg';
import picture2 from './20220104yogurtcake.jpg';
import picture3 from './20220104yogurtcakeavosmoothie2.jpg';

function YogurtCakeAvoSmoothie() {
  return (
    <div>
      <h1>Yogurt Cake Avo Smoothie ヨーグルトケーキ＆アボカドスムージー</h1>
      <h3>Tue 04.01.2022</h3>
      <h4>15cm round shape</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='yogurt-cake-avo-smoothie1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Plain yogurt 400g</li>
            <li>Sugar 60g</li>
            <li>Hot cake mix 100g(or flour is also ok)</li>
            <li>Egg 2</li>
            <li>Honey, nuts</li>
            <li>***For Avo Smoothie 2 persons***</li>
            <li>Avocado 1/2</li>
            <li>Banan 1</li>
            <li>Milk 150ml</li>
            <li>Non sweeten yogurt 150g</li>
            <li>Honey 3 tbsp</li>
            <li>Mint</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 180℃</li>
          <li>Add eggs, yogurt and sugar in a bowl and mix well</li>
          <li>Add flour and mix well with a rubber spatula</li>
          <li>Put cooking sheet in a plate and 40 min in oven</li>
          <li>Topping with honey and nuts</li>
          <br />
          <li>***For Avo Smoothie***</li>
          <li>Add all in a mixer</li>
          <li>Pour in a glass and top with mint</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='yogurt-cake' />
      <br />
      <img className='food-pic' src={picture3} alt='yogurt-cake-avo-smoothie2' />
    </div>
  )
}

export default YogurtCakeAvoSmoothie;
