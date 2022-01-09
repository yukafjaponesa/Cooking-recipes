import React from 'react';
import picture1 from './20220109orangelemonademangogingersmoothie1.jpg';
import picture2 from './20220109orangelemonademangogingersmoothie2.jpg';
import picture3 from './20220109slicedoranges.jpg';

function OrangeLemonadeAndMangoGingerSmoothie() {
  return (
    <div>
      <h1>Orange Lemonade & Mango Ginger Smoothie</h1>
      <h1>オレンジレモネード & マンゴージンジャースムージー</h1>
      <h3>Sun 09.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='lemonade-smoothie1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***For Orange Lemonade***</li>
            <li>Mandarin 5(small oranges)</li>
            <li>Lemon juice 100ml</li>
            <li>Sugar 50g</li>
            <li>Honey 30g</li>
            <br />
            <li>***For Mango GInger Smoothie 4 portions***</li>
            <li>Mango 2</li>
            <li>Ginger 1 slice</li>
            <li>Lime 1</li>
            <li>Yoghurt 500g</li>
            <li>Orange juice 500ml</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>***For Orange Lemonade***</li>
          <li>In a bowl, put all and rest over a night</li>
          <img className='food-pic' src={picture3} alt='sliced-oranges' />
          <br />
          <li>Mix with sparkling water, water or hot water</li>
          <br />

          <li>***For Mango Ginger Smoothie***</li>
          <li>Slice mango. Graind ginger</li>
          <li>Add all in stand mixer</li>
          <li>Top with mits</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='lemonade-smoothie2' />
    </div>
  )
}

export default OrangeLemonadeAndMangoGingerSmoothie;
