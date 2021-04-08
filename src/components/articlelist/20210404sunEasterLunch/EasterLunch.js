import React from 'react';
import picture1 from './20210404easterlunch.jpg';

function EasterLunch() {
  return (
    <div>
      <h1>Easter Lunch Potato Salad イースター ポテサラ</h1>
      <h3>Sun 04.04.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='easter-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Poatato</li>
            <li>Soy milk / Milk</li>
            <li>Carrot</li>
            <li>Spinach</li>
            <li>Lemon juice</li>
            <li>Olive oil</li>
            <li>Salt</li>
            <li>lettecu</li>
            <li>Ham</li>
            <li>Cheese</li>
            <li>Seaweed</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li><strong>Potato Salad</strong></li>
          <li>Peel potatoes skin and boil them</li>
          <li>ONLY put salt (no pepper) and soy milk to make mashed potato</li>
          <li>Cut seaweed to make eyes and mouth</li>
          <li>Make a shape of Rabbit</li>
          <li><strong>Carrot rape</strong></li>
          <li>Shredd carrot and marinate with lemon juice and ONLY salt (no pepper)</li>
          <li>Make a carrot with carrot rape and spinach</li>
          <li>Place lettecu arount potato salad</li>
        </ol>
      </div>

    </div>
  )
}

export default EasterLunch;
