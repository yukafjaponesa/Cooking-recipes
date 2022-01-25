import React from 'react';
import picture1 from './20220127honeylemoncheesecream.jpg';

function HoneyLemonCheesecream() {
  return (
    <div>
      <h1>Honey Lemon Cheese Cream はちみつレモンのレアチーズ</h1>
      <h3>Thu 27.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='honey-lemon-cheese' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***Honey Lemon***</li>
            <li>Lemon 1</li>
            <li>Honey 2 tbsp</li>
            <li>Sugar 1 tbsp</li>
            <li>***Cream***</li>
            <li>Cream cheese 100g</li>
            <li>Heavy cream 50cc</li>
            <li>Sugar 1 tbsp</li>
            <li>***Bottom & topping***</li>
            <li>Cookie 20g</li>
            <li>Mint</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Slice lemon and add in a bowl with honey and sugar</li>
          <li>softly cover folio microwave oven 600w 1 min 30 sec and rest 30 min</li>
          <li>Add heavy cream and sugar in a bowl and mix with hand mixer till 7 min</li>
          <li>Add cream cheese in a bowl and softly cover with folio 1 min for microwave oven</li>
          <li>Add honey lemon juice in cream cheese and mix well</li>
          <li>Add cream cheese in heavy cream bowl and mix well</li>
          <li>Add cookie in bottom of glass, lemon on the side and pour cream and top with cookie, lemon and mint</li>
        </ol>
      </div>
    </div>
  )
}

export default HoneyLemonCheesecream;
