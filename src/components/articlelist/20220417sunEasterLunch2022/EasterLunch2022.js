import React from 'react';
import picture1 from './20220417easterlunch1.jpg';
import picture2 from './20220417eastersweets.jpg';
import picture3 from './20220417easterlunch2.jpg';

function EasterLunch2022() {
  return (
    <div>
      <h1>Easter Lunch 2022 Bunny Curry Rice & Bunny Potato Salad & Scotch Egg</h1>
      <h1>1 Bite Sweet Potato ~Baby Chick ver.~ & Carrot Cup Cake</h1>
      <h1>イースターランチ2022 うさぎカレー & うさぎポテサラ & スコッチエッグ</h1>
      <h1>1口スイートポテト ~ひよこver.~ & キャロットカップケーキ</h1>
      <h3>Sun 17.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='easter-lunch2022-1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>~ Easter Lunch 2022 Menu ~</li>
            <li>Curry with Bunny Rice</li>
            <li>Bunny Potato Salad</li>
            <li>Scoth Egg</li>
            <li>1 Bite Sweet Potato ~Baby Chick ver.~</li>
            <li>Carrot Cup Cake</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>***Curry Rice***</li>
          <li>Use ham to make ears and seaweed for face</li>
          <br />
          <li>***Bunny Potato Salad***</li>
          <li>Potato 2(300g)</li>
          <li>Carrot 20g</li>
          <li>Onion 25g</li>
          <li>Thin sliced ham 2 slices</li>
          <li>Mayo 7 tbsp</li>
          <li>Salt & pepper</li>
          <li>Boiled egg 1</li>
          <li>Lettuce 1</li>
          <li>Broccoli 50g</li>
          <li>Seaweed</li>
          <li>Cucumber</li>
          <br />
          <li>Boil potato. Chop ham, carrot and onion. Onion rest in water</li>
          <li>Thin slice cut lettuce</li>
          <li>Make bunny ears with cucumber</li>
          <li>Mix mayo with potato, carrot, onion, ham and salt & pepper</li>
          <br />
          <li>***Scoth Egg***</li>
          <li>Boiled egg 4</li>
          <li>Ground meat 250g</li>
          <li>Water or milk 120ml</li>
          <li>Flour, beaten egg, bread crumble</li>
          <br />
          <li>Make burger pattie and add egg in it</li>
          <li>Add flour, egg, bread in order and deep fry</li>
          <br />
          <li>***1 Bite Sweete Potato 25 pieces***</li>
          <li>Sweet potato 2(500g)</li>
          <li>Sugar 4 tbsp</li>
          <li>Unsalted butter 20g</li>
          <li>Egg york 1</li>
          <li>Heavy cream 50cc</li>
          <li>Black sesame, sunflower seeds or pumpkin seeds</li>
          <li>Egg york</li>
          <br />
          <li>Steam sweet potato and add sugar, butter and egg york and mix</li>
          <li>Add heavy cream to smooth</li>
          <li>Make 1 bite size and cover with egg york</li>
          <li>5 min in toaster</li>
          <li>Make baby chick face with sesame and seeds</li>
          <br />
          <li>***Carrot cup cake 6 small cups***</li>
          <li>Ground carrot 50g</li>
          <li>Unsalted butter 50g</li>
          <li>Sugar 20g</li>
          <li>Egg 1</li>
          <li>Milk 2 tbsp</li>
          <li>Pancake mix 100g</li>
          <li>White chocolate 20g</li>
          <li>Chocolate 10g</li>
          <li>Pink chocolate 8 pieces　アラザン</li>
          <li>Heavy cream 50cc & sugar 1/2 tbsp</li>
          <br />
          <li>Pre heat oven 170℃</li>
          <li>Make butter creamy and add sugar to mix</li>
          <li>Add egg, milk and carrot in order and mix each time</li>
          <li>Add pancake mix</li>
          <li>Bake for 15 min</li>
          <li>Melt chocolates and make bunny ears and faces on baking sheet</li>
          <li></li>
          <img className='food-pic' src={picture2} alt='easter-sweets' />
          <br />
          <img className='food-pic' src={picture3} alt='easter-lunch2022-2' />
        </ol>
      </div>
    </div>
  )
}

export default EasterLunch2022;
