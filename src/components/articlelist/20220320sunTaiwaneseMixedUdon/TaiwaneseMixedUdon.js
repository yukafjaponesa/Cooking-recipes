import React from 'react';
import picture1 from './20220320taiwanesemixedudon.jpg';

function TaiwaneseMixedUdon() {
  return (
    <div>
      <h1>Taiwanese Mixed Udon 台湾混ぜうどん</h1>
      <h3>Sun 20.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='taiwanese-mixed-udon' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Udon noddle 1</li>
            <li>Seaweed 1/2 sheet</li>
            <li>Spring onion, chinese chives  1/2 sticks/ea</li>
            <li>Graind pork 80g</li>
            <li>Bbq sauce 1 tbsp</li>
            <li>〇 or Yakiniku-sauce Soy sauce 2 tbsp, sugar & sake & mirin 1 tbsp/ea</li>
            <li>Graind ginger & garlic 1/2 tsp/ea</li>
            <li>〇Sesame oil & vinegar 1 tsp/ea, sesame a bit, Kotchujan 1 tsp</li>
            <li>Miso paste, graind garlic 1/2 tsp/ea</li>
            <li>☆Mentsuyu, sesame oil 1 tbsp/ea</li>
            <li>☆Soy sauce 2 tsp</li>
            <li>☆Graind garllic 1/2 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook udon noodle</li>
          <li>Cut seaweed, spring onion and chinese chives in small pieces</li>
          <li>Mix ☆(or 〇 the first 2 of them microwave oven 30 secs 600w) and udon noddle</li>
          <li>Make boiled egg(or if you like, raw egg york)</li>
          <li>Add oil in a pan and stir meat</li>
          <li>Add yakiniku-sauce to mix</li>
        </ol>
      </div>
    </div>
  )
}

export default TaiwaneseMixedUdon;
