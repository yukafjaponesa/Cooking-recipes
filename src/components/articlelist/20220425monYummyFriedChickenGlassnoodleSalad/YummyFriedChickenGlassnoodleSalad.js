import React from 'react';
import picture1 from './20220425yummyfriedchickenglassnoodlesalad.jpg';

function YummyFriedChickenGlassnoodleSalad() {
  return (
    <div>
      <h1>Yummy Fried Chicken & Glassnoodle Salad & Tuna Mayo Onigiri</h1>
      <h1>やみつき唐揚げ & 春雨サラダ & ツナマヨおにぎり</h1>
      <h3>Mon 25.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='ohanami-bento' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>~Ohanami bento menu~</li>
            <li>Tuna mayo onigir</li>
            <li>Glass noodle salad</li>
            <li>Yummy fried chicken</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>***Glass noodle salad***</li>
          <li>Spinach or cucumber 80g</li>
          <li>Galas noodle 30g</li>
          <li>Carrot 1/4</li>
          <li>Ham 2 sheets</li>
          <li>White sesame 1 tsp</li>
          <li>Sugar 1/2 tbsp</li>
          <li>Vinegar 1 tbsp</li>
          <li>Soy sauce 1 1/2 tbsp</li>
          <li>Sesame oil 1 tbsp</li>
          <br />
          <li>Cut all in thin slice</li>
          <li>Boil glass noodle</li>
          <li>Mix with all</li>
          <br />
          <li>***yummy Fried Chicken***</li>
          <li>Chicken 600g</li>
          <li>Soy sauce 2 tbsp</li>
          <li>Sugar 1 tsp</li>
          <li>Ground ginger 1 tsp</li>
          <li>Ground garlic 1 tsp</li>
          <li>Mayo 1 tsp</li>
          <li>Potato starch 4 - 6 tbsp</li>
          <br />
          <li>Chop chicken and marinate for 30 min</li>
          <li>Sift potato starch and fry in oil</li>
        </ol>
      </div>
    </div>
  )
}

export default YummyFriedChickenGlassnoodleSalad;
