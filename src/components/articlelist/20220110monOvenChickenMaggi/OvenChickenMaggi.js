import React from 'react';
import picture1 from './20220110ovenchicken.jpg';
import picture2 from './20220110ovenchickenprep.jpg';
import picture3 from './20220110ovenchickenmaggi1.jpg';
import picture4 from './20220110ovenchickenmaggi2.jpg';
import picture5 from './20220110ovenchickenbefore.jpg';
import picture6 from './20220110ovenchickenafter.jpg';

function OvenChickenMaggi() {
  return (
    <div>
      <h1>Oven Chicken Maggi チキンのオーブン焼き～マギーソース～</h1>
      <h3>Mon 10.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='oven-chicken' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 250g</li>
            <li>Sliced onion 1</li>
            <li>Chopped potato 3 small</li>
            <li>Mini tomatoes 200g</li>
            <li>Mush room 150g or 1 Zucchini</li>
            <li>Maggi sauce</li>
            <li>With carrot & tomato soup</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pre heat oven 200℃</li>
          <li>Chop vegs and chicken and add in a bowl to mix with maggi sauce</li>
          <img className='food-pic' src={picture3} alt='oven-chicken-maggi1' />
          <br />
          <img className='food-pic' src={picture4} alt='oven-chicken-maggi2' />
          <br />
          <img className='food-pic' src={picture2} alt='oven-chicken-prep' />
          <br />
          <li>Put in ovenproof dish</li>
          <img className='food-pic' src={picture5} alt='oven-chicken-before' />
          <br />
          <li>Bake with 170℃ for 30min</li>
          <img className='food-pic' src={picture6} alt='oven-chicken-after' />
        </ol>
      </div>
    </div>
  )
}

export default OvenChickenMaggi;
