import React from 'react';
import picture1 from './20220525sweetsourmayochicken.jpg';

function SweetSourMayoChickenNoMilk() {
  return (
    <div>
      <h1>Sweet Sour Mayo Chicken 甘酢マヨチキン</h1>
      <h3>Wed 25.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sweet-sour-mayo-chicken' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 400g</li>
            <li>☆Sake 2 tbsp</li>
            <li>☆Sugar 1 tsp</li>
            <li>☆Salt a bit</li>
            <li>Potato starch</li>
            <li>Soy sauce 2 1/2 tbsp</li>
            <li>Sugar, mirin 2 tbsp</li>
            <li>Sake, vinegar 1 tbsp</li>
            <li>Ground ginger & garlic 1 tsp/ea</li>
            <li>Oil</li>
            <li>Mayo, chopped spring onion</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut chicken and rest in ☆ for 5 min</li>
          <li>Sift potato starch on chicken</li>
          <li>Add oil in a pan and cook chicken for 5 miin and 4 min for the other side</li>
          <li>Mix sauces and pour onto chicken</li>
        </ol>
      </div>
    </div>
  )
}

export default SweetSourMayoChickenNoMilk;
