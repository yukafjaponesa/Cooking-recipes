import React from 'react';
import picture1 from './20210312gyoza.jpg';
import picture2 from './20210312gyozapizza.jpg';

function Gyoza() {
  return(
    <div>
      <h1>Gyoza</h1>
      <h3>Fri 12.03.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='gyoza-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients - 40 pieces</h4>
          <ul className='ingredients-list'>
            <li>Gyoza paper - usually it contains 50 pieces</li>
            <li>Copped meat - 500g beef or pork or mix</li>
            <li>Onion</li>
            <li>Cabagge or Chinese cabagge</li>
            <li>Soy sauce - 1 tbsp</li>
            <li>Chiken soup broth - 1 tsp</li>
            <li>Papper & salt</li>
            <li>Flour</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop vegs and mix with salt. Leave for 10 min and rins the water</li>
          <li>Knead meat and vegetables with salt & pepper & other sauces</li>
          <li>Put flour on a cutting board or plate so that Gyoza doesn't stick to it.</li>
          <li>Put water on the half of Gyoza paper edge</li>
          <li>Put meat in the middle of the paper and close</li>
          <li>Stir fri or steamed</li>
          <li>Eat with mix of soy sauce, vinegar and chili oil</li>
        </ol>

        <p>!Extra!</p>
        <p>Mini Pizza with Gyoza paper</p>
        <ol>
          <li>Put pizza sauce or ketchap on Gyoza paper</li>
          <li>Topping with corn, green bell pepper, onion, tomato, cheese etc</li>
          <li>Put in oven fo 10 minutes 200℃</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='gyoza-pizza' />
    </div>
  )
};

export default Gyoza;
