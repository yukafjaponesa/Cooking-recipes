import React from 'react';
import picture1 from './20211125kurumehotomekiramen.jpg';
import picture2 from './20211125ramenfront.jpg';
import picture3 from './20211125ramenback.jpg';

function KurumeHotomekiRamen() {
  return (
    <div>
      <h1>Kurume Hotomeki Ramen 久留米ほとめきラーメン</h1>
      <h3>Thu 25.11.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='kurume-hotomeki-ramen-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Instant Ramen</li>
            <li>For toppings</li>
            <li>Egg, sesame, chinese cabbage, green onion</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook ramen as following the instructions</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='ramen-front-pic' />
      <img className='food-pic' src={picture3} alt='ramen-back-pic' />
    </div>
  )
}

export default KurumeHotomekiRamen;
