import React from 'react';
import picture1 from './20220607taiwanesecastella.jpg';
import picture2 from './20220607castelladough.jpg';

function TaiwaneseCastella() {
  return (
    <div>
      <h1>Taiwanese Castella 台湾カステラ</h1>
      <h3>Tue 07.06.2022</h3>
      <h4>15cm square</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='taiwan-castella' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Egg 4</li>
            <li>Oil 4 tbsp</li>
            <li>Pancake mix 100g</li>
            <li>Milk 80cc</li>
            <li>Sugar 50g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 150℃</li>
          <li>Separate egg york and egg white</li>
          <li>Add oil in a plate and microwave oven 600w 40sec</li>
          <li>Add  pancake mix in it and mix well</li>
          <img className='food-pic' src={picture2} alt='castella-dough' />
          <li>Add milk in another plate and 600w 30sec</li>
          <li>Add milk in pancake mix and mix well</li>
          <li>Add egg yorks and mix well</li>
          <li>Add egg white in a bowl and mix with a hand mixer with low speed</li>
          <li>Change to high speed and add sugar 3 times and mix each time</li>
          <li>Back to low speed and make round shape 5 times</li>
          <li>Add meringue 1/3 to egg york and mix well with mixer</li>
          <li>Add the rest of meringue in 2 times and mix with a rubber spatula</li>
          <li>Pour gently in a oven safe plate and fall 1 time from 5 cm</li>
          <li>Bake for 40 - 50 min with 50℃ water(steamed)</li>
        </ol>
      </div>
    </div>
  )
}

export default TaiwaneseCastella;
