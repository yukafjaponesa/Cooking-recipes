import React from 'react';
import picture1 from './20211227akakararamen.jpg';
import picture2 from './20211227akakararamenfront.jpg';
import picture3 from './20211227akakararamenback.jpg';
import picture4 from './20211227yannyomuegg.jpg';

function KumamotoAkakaraRamen() {
  return (
    <div>
      <h1>Kumamoto Akakara Ramen 熊本赤辛ラーメン</h1>
      <h3>Mon 27.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='akakara-ramen-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Ramen pack</li>
            <li>Water 500ml</li>
            <li>***For toppings***</li>
            <li>Vegs, green onion, sesame</li>
            <li>***Yan nyomu egg(Korean sweet spicy egg, over a night)***</li>
            <li>☆ For 6 eggs</li>
            <li>Kochujan(korean sweet spicy miso paste) 2 tbsp</li>
            <li>Grain garlic 1/2 tsp</li>
            <li>Ketchap, soy sauce 1 tbsp/ea</li>
            <li>Sugar 1/2 tbsp</li>
            <li>***For spicy graind meant***</li>
            <li>Use almost same ingredients with Yan nyomu egg</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Boil water and add noodle cook for 3 min</li>
          <li>Turn off the heat and add soup powder. Add oil right before eating</li>
          <li>***For Yan nyomu egg***</li>
          <li>Make boiled eggss, small ones 6 min 40 sec, big ones 7 min</li>
          <li>Mix all the ingredients and stay over a night</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='akakara-ramen-front-pic' />
      <br />
      <img className='food-pic' src={picture3} alt='akakara-ramen-back-pic' />
      <br />
      <img className='food-pic' src={picture4} alt='yannyomu-egg-pic' />
    </div>
  )
}

export default KumamotoAkakaraRamen;
