import React from 'react';
import picture1 from './20220108satadditivefreeponzu.jpg';

function AdditiveFreePonzu() {
  return (
    <div>
      <h1>Additive Free Ponzu 無添加ポン酢</h1>
      <h3>Sat 08.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='additive-free-ponzu' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***For 1 week to 10 days***</li>
            <li>Total appr. 200ml</li>
            <li>Citron juice as you like (lemon, lime, yuzu,　シークワーサー) 100ml</li>
            <li>Soy sauce 100ml</li>
            <li>Mirin 25ml</li>
            <li>Kombu & Katsuo bushi 3g/ea</li>
            <br />
            <li>***Fast ver.***</li>
            <li>Citron juice 100ml</li>
            <li>Soy sauce 100ml</li>
            <li>Mirin 20ml</li>
            <li>Shiro dashi(or mentsu yu) 10ml</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add all the ingredients in a tapper</li>
          <li>You can use it immedietely for the fast ver.</li>
          <li>Rest it for 1 week to 10 days for another</li>
          <li>After 1 week, it can preserve for 1 month in fridge</li>
        </ol>
      </div>
    </div>
  )
}

export default AdditiveFreePonzu;
