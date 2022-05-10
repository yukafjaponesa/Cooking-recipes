import React from 'react';
import picture1 from './20220512gyozapaper3different.jpg';
import picture2 from './20220512gyozacheese.jpg';
import picture3 from './20220512gyozapizzasausagestick.jpg';
import picture4 from './20220512chorizopotato.jpg';
import picture5 from './20220512chorizogyoza.jpg';

function CheeseAndPizzaSausageStickAndChorizoDog() {
  return (
    <div>
      <h1>Cheese And Pizza Sausage Stick And Chorizo Dog</h1>
      <h1>餃子の皮アレンジ チーズ包み ソーセージスティック チョリソードッグ</h1>
      <h3>Thu 12.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='gyoza-3arranges' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***For 3 cheese***</li>
            <li>Procced cheese 2 sheets</li>
            <li>Cheddar cheese 2 sheets</li>
            <li>Mozzarela cheese 2 sheets</li>
            <li>Gyoza paper 12 sheets</li>
            <li>Oil 2 tbsp</li>
            <li>Pepper, salt, honey</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>***For 3 cheese***</li>
          <li>Pile cheese and cut in 12 pieces</li>
          <li>Cover with gyoza paper and stir fry</li>
          <img className='food-pic' src={picture2} alt='gyoza-cheese' />
          <br />
          <li>***Suasage stick Pizza ver.***</li>
          <li>Sliced cheese 1 sheet</li>
          <li>Ketchup 2 tsp</li>
          <li>Gyoza paper 4 sheets</li>
          <li>Sausage 4 sticks</li>
          <li>Oil 1 tbsp</li>
          <br />
          <li>Add ketchup, cheese and sausage on gyoza paper</li>
          <img className='food-pic' src={picture3} alt='gyoza-pizza-sausage' />
          <li>Stir fry with oil</li>
          <br />
          <li>***Mini chorizo dog***</li>
          <li>Potato 1 (medium)</li>
          <li>Gyoza paper 6 sheets</li>
          <li>Ketchup 1 tbsp</li>
          <li>Mustard 1 tsp</li>
          <li>Mayo 1 tbsp</li>
          <li>Cheese 30g</li>
          <li>Sausage 6 sticks</li>
          <br />
          <li>Boil potato and mashed with mayo</li>
          <li>Add mashed potato, sausage and cheese on gyoza paper</li>
          <img className='food-pic' src={picture4} alt='mashed-potato' />
          <li>Toast for 5 min</li>
          <img className='food-pic' src={picture5} alt='chorizo' />
        </ol>
      </div>
    </div>
  )
}

export default CheeseAndPizzaSausageStickAndChorizoDog;
