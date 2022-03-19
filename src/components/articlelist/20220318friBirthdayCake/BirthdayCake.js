import React from 'react';
import picture1 from './20220318birthdaycake.jpg';
import picture2 from './20220318wholecake.jpg';
import picture3 from './20220318spongecake.jpg';
import picture4 from './20220318slicedstrawberries.jpg';

function BirthdayCake202203() {
  return (
    <div>
      <h1>Birthday Cake ～strawberry sponge cake～ 苺のショートケーキ</h1>
      <h3>Fri 18.03.2022</h3>
      <h4>15 cm</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='birthday-cake' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Flour 60g</li>
            <li>Egg 2</li>
            <li>Sugar 60g</li>
            <li>Unsalted butter 10g</li>
            <li>Boiled water</li>
            <li>Vanilla essence a bit</li>
            <li>☆ Water 50ml</li>
            <li>☆ Sugar 10g</li>
            <li>Strawberry 200g</li>
            <li>Heavy cream 200ml</li>
            <li>Sugar 20g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add sugar and egg in a bowl</li>
          <li>Mix with a mixer while make it warm to melt sugar</li>
          <li>Mix until the sauce keeps letter for 10 secs</li>
          <li>Sift flour and mix with rubber spatula</li>
          <li>Add butter and vanilla</li>
          <li>Put baking papaer in cake shape and pour the sauce</li>
          <li>Remove air</li>
          <li>Bake for 25 min</li>
          <img className='food-pic' src={picture3} alt='sponge-cake' />
          <li>Slice strawberries</li>
          <li>Add ☆ to melt sugar and cool down</li>
          <li>Add heavy cream and sugar in a bowl to mix with a mixer till 1/8</li>
          <li>Cut sponge cake and add ☆, cream, strawberries</li>
          <img className='food-pic' src={picture4} alt='strawberries' />
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='whole-cake' />
    </div>
  )
}

export default BirthdayCake202203;
