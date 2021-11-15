import React from 'react';
import picture1 from './20211115chocobananachiffoncake.jpg';

function ChocoBananaChiffonCake() {
  return (
    <div>
      <h1>Choco Banana Chiffon Cake チョコバナナシフォンケーキ</h1>
      <h3>Mon 15.11.2021</h3>
      <h4>17cm tube-cake pan</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chocobanana-chiffon-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>☆Flour 90g</li>
            <li>☆Cocoa powder 10g</li>
            <li>☆Baking powder 2g</li>
            <li>Banana 1</li>
            <li>Glanurated sugar 55g</li>
            <li>Oil 30ml</li>
            <li>Milk 30ml</li>
            <li>Egg york 3</li>
            <br />
            <li>For Meringue</li>
            <li>Egg white 3</li>
            <li>Glanurated sugar 40g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven for 170℃</li>
          <li>Crush banana with a fork</li>
          <li>Add egg yorks and glanurated sugar and mix well. Add banana in it.</li>
          <li>Add oil and milk and mix well</li>
          <li>Sift ☆ in it and mix with a rabber supatula</li>
          <li>For Meringue</li>
          <li>Add egg whites in a bowl and mix with a hand mixer</li>
          <li>Add glanurated sugar 2 times separetely and beat each time till vertically for 8 minutes</li>
          <li>Add 1/3 of Meringue in egg yorks bowl and miw with rubber supatula.</li>
          <li>Add the rest of 1/2 Meringue and mix lightly</li>
          <li>Add the rest and mix so as not to crush the bubbles</li>
          <li>Add in a tube-cake pan and drop twice from 10 cm high</li>
          <li>Bake for 40 with 170℃</li>
        </ol>
      </div>
    </div>
  )
}

export default ChocoBananaChiffonCake;
