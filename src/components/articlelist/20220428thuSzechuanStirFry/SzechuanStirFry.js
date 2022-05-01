import React from 'react';
import picture1 from './20220428szechuanstirfry.jpg';
import picture2 from './20220428szechuanstirfrypack1.jpg';
import picture3 from './20220428szechuanstirfrypack2.jpg';

function SzechuanStirFry() {
  return (
    <div>
      <h1>Szechuan Stir Fry 四川野菜炒め & レンコンサラダ</h1>
      <h3>Thu 28.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='szechuan-stir-fry' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Stir fry seasoning 1</li>
            <li>Vegs - </li>
            <li>Baby corn</li>
            <li>Mushroom</li>
            <li>Green bell pepper</li>
            <li>Carrot</li>
            <li>Pak choi チンゲン菜</li>
            <li>Bean sprout</li>
            <li>Lotus root</li>
            <li>***Lotus root salad***</li>
            <li>Lotus root</li>
            <li>Carrot</li>
            <li>Corn</li>
            <li>Mayo, salt & pepper, a bit soy sauce</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop veggies and meat(beef or chicken) and cook in a oil</li>
          <img className='food-pic' src={picture2} alt='szechuan-stir-fry-pack1' />
          <br />
          <img className='food-pic' src={picture3} alt='szechuan-stir-fry-pack2' />
        </ol>
      </div>
    </div>
  )
}

export default SzechuanStirFry;
