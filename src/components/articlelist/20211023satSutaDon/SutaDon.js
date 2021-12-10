import React from 'react';
import picture1 from './20211023sutadon.jpg';

function Sutadon() {
  return (
    <div>
      <h1>Suta-don 伝説のすた丼屋</h1>
      <h3>Sat 23.10.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sutadon-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Thin sliced Pork</li>
            <li>Onion</li>
            <li>Green onion</li>
            <li>Egg york</li>
            <li>Soy sauce 2 tbsp</li>
            <li>Sake 3 tbsp</li>
            <li>Sugar & Mirin 1 tsp/ea</li>
            <li>Sesame oil 1 tbsp</li>
            <li>Graind garlic</li>
            <li>Potato starch</li>
            <li>Salt & pepper</li>
            <li>***For pumpkin salad***</li>
            <li>Pumpkin 1/4</li>
            <li>Mayonaise, Butter, Yoguhrt 1 tbsp/ea</li>
            <li>Nuts</li>
            <li>Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop green onion</li>
          <li>Cover pork with corn starch</li>
          <li>Cut onion and stir fry in a pan</li>
          <li>Add pork</li>
          <li>Add sauces</li>
          <li>***For pumpkin salad***</li>
          <li>Remove skin and steam</li>
          <li>Smash pumpkin and mix with all ingredients</li>
        </ol>
      </div>
    </div>
  )
}

export default Sutadon;
