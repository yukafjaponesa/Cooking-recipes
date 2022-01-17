import React from 'react';
import picture1 from './20220117kiwismoothiejelly.jpg';

function KiwiSmoothieAndKiwiJelly() {
  return (
    <div>
      <h1>Kiwi Smoothie And Kiwi Jelly</h1>
      <h1>キウイ豆乳スムージー & キウイゼリー</h1>
      <h3>Mon 17.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='kiwi' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***Smoothie 1 portion***</li>
            <li>Kiwi 1</li>
            <li>Soy milk 150ml</li>
            <li>Yogurt 100g</li>
            <li>Honey 1.5 tasp</li>
            <li>For topping: kiwi 1, coconuts tips, honey 1/4 tsp</li>
            <br />
            <li>***Kiwi jelly 3 portion***</li>
            <li>Kiwi 2</li>
            <li>Water 300ml</li>
            <li>Sugar 35g</li>
            <li>Lemon juice 2 tbsp</li>
            <li>Gelatin powder 5g & Boiled water(80℃) 2 tbsp</li>
            <li>Mint</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>***Kiwi smoothie***</li>
          <li>Slice kiwi for topping and cut in half and put in glass</li>
          <li>Put honey on edge of galss and coat with coconuts tips</li>
          <li>Mix other ingredients in a mixer</li>
          <br />
          <li>***For kiwi jelly***</li>
          <li>Melt gelatine with boiled water</li>
          <li>Make 3 slices of kiwi</li>
          <li>Add the rest of kiwi in mixer and mix well</li>
          <li>Add water in a pot and boil it</li>
          <li>Add sugar and lemon juice</li>
          <li>KiAdd kiwi and heat well</li>
          <li>Add gelatine and mix well</li>
          <li>Pour in cups and rest in fridge for 3 hours</li>
        </ol>
      </div>
    </div>
  )
}

export default KiwiSmoothieAndKiwiJelly;
