import React from 'react';
import picture1 from './20220412icecreamchocomuffin.jpg';

function IceCreamChocoMuffin() {
  return (
    <div>
      <h1>Ice Cream Choco Muffin アイスでチョコマフィン</h1>
      <h3>Tue 12.04.2022</h3>
      <h4>Normal muffin cup 5 or small cup cake 10</h4>
      <h4>I used normal vanilla ice cream insead of chocolate ice cream</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='ice-cream-choco-muffin' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chocolate ice cream 200g</li>
            <li>Pancake mix 150g(flour 120g, sugar 25g, baking powder 5g and salt)</li>
            <li>Egg 1</li>
            <li>Chocolate 1 sheet(100g)</li>
            <li>Olive oil 3 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>First, melt ice cream(600w 30sec)</li>
          <li>Chop chocolate</li>
          <li>Pre heat oven 180℃</li>
          <li>Add egg and olive oil in ice cream and mix well</li>
          <li>Add pancake mix and mix well</li>
          <li>Add dough in muffin cups bake for 25 min</li>
        </ol>
      </div>
    </div>
  )
}

export default IceCreamChocoMuffin;
