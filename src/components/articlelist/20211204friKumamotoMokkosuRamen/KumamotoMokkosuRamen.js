import React from 'react';
import picture1 from './20211204kumamotomokkosuramen.jpg';
import picture2 from './20211204kumamotoramenfront.jpg';
import picture3 from './20211204kumamotoramenback.jpg';
import picture4 from './20211204kmamotorameninside.jpg';

function KumamotoMokkosuRamen() {
  return (
    <div>
      <h1>Kumamoto Mokkosu Ramen 熊本もっこすラーメン</h1>
      <h3>Fri 03.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='kumamoto-ramen-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Ramen pack</li>
            <li>Water 500ml</li>
            <li>*** Toppings ***</li>
            <li>Boiled egg</li>
            <li>Meat / Ham</li>
            <li>Green onion, sesame, spinacht</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Make boiled egg. After boiling, add egg for 7 min</li>
          <li>Boil 500ml water as instruction</li>
          <li>After boiling, add noodle and cook for 2.5min</li>
          <li>Turn off the heat and add powder soup and mix well</li>
          <li>Pour in Ramen bowl with toppings and tasty oil as added</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='kumamoto-ramen-front-pic' />
      <br />
      <img className='food-pic' src={picture3} alt='kumamoto-ramen-back-pic' />
      <br />
      <img className='food-pic' src={picture4} alt='kumamoto-ramen-inside-pic' />
    </div>
  )
}

export default KumamotoMokkosuRamen;
