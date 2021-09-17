import React from 'react';
import picture1 from './20210917chickenkatsu.jpg';

function ChickenKatsu() {
  return (
    <div>
      <h1>Chicken Katsu チキンカツ</h1>
      <h3>Fri 17.09.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chickenkatsu-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken</li>
            <li>Mayo</li>
            <li>Bread crumble</li>
            <li>Salt & pepper</li>
            <li>Buldog saud/ Tonkatsu sauce</li>
            <li>For Cabagge salad</li>
            <li>Cabagge</li>
            <li>Vinegar & Olive oil 1 tbsp/ea</li>
            <li>Soy sauce 1 tsp</li>
            <li>Sugar 1/2 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Put pepper and salt on chicken</li>
          <li>Pre heat oven with 180 degrees</li>
          <li>Spread mayo and cover with bread crumble</li>
          <li>Put in oven for 5 min</li>
          <li>Turn around chicken and 5 min more</li>
          <li>For cabagge sald</li>
          <li>Slice cabagge and mix with sauces</li>
        </ol>
      </div>
    </div>
  )
}

export default ChickenKatsu;
