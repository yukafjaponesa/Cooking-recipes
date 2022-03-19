import React from 'react';
import picture1 from './20220318birthdaydinner.jpg';
import picture2 from './20220318bouquetsalad.jpg';
import picture3 from './20220318carpaccio.jpg';
import picture4 from './20220318tomatochickenpaella.jpg';

function BirthdayDinner202203() {
  return (
    <div>
      <h1>Birthday Dinner</h1>
      <h1>誕生日メニュー～カルパッチョ、ブーケサラダ、トマトチキンパエリア～</h1>
      <h3>Fri 18.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='birthday-dinner' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Ingreidients and recieps below</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>***Carpaccio***</li>
          <li>White sashimi fish or smoked salmon</li>
          <li>Chopped vegs - yellow & red paprika, cucumber, red onion</li>
          <li>Dill 2 tbsp</li>
          <li>☆Olive oil 3 tbsp</li>
          <li>☆Vinegar 2tbsp</li>
          <li>☆Mustard 1 tsp</li>
          <li>☆Salt & pepper & graind garlic a bit</li>
          <br />
          <li>Mix ☆ with vegs</li>
          <img className='food-pic' src={picture2} alt='carpaccio' />
          <br />
          <li>***Bouquet sald***</li>
          <li>Lettuce</li>
          <li>Smoked salmon(I used Jamon)</li>
          <li>Boiled egg 1</li>
          <li>Tomato, red onion, cucumber</li>
          <br />
          <li>Roll smoked salmon to make bouquet</li>
          <img className='food-pic' src={picture3} alt='bouquet-salad' />
          <br />
          <li>***Tomato chicken paella***</li>
          <li>Sliced onion 100g</li>
          <li>Sliced white mushroom 5 stick</li>
          <li>Chopped garlic 1</li>
          <li>Chicken 150g</li>
          <li>Olive oil 1 tbsp</li>
          <li>Rice 1 cup</li>
          <li>Water 150ml</li>
          <li>Tomato can 1 (400g)</li>
          <li>Consome 2 tsp</li>
          <li>Salt & pepper, paserly</li>
          <br />
          <li>Add oil in a pan and cook garlic and onion</li>
          <li>Add chicken and mushroom</li>
          <li>Add rice, water and other ingredients</li>
          <li>Cook until rice is ready - low heat 30 min</li>r
          <img className='food-pic' src={picture4} alt='tomato-chicken-paella' />
        </ol>
      </div>
    </div>
  )
}

export default BirthdayDinner202203;
