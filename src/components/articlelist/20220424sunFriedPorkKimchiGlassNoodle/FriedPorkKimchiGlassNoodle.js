import React from 'react';
import picture1 from './20220424friedporkkimchiglassnoodle.jpg';

function FriedPorkKimchiGlassNoodle() {
  return (
    <div>
      <h1>Fried Pork Kimchi Glass Noodle 豚キムチ春雨</h1>
      <h3>Sun 24.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='pork-kimchi-glassnoodle' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Thin slice pork 150g</li>
            <li>Kimchi 150g</li>
            <li>Glass noodle 40g</li>
            <li>Chinese chive 50g</li>
            <li>Ground ginger, garlic 1 glove/ea</li>
            <li>Sesame oil 1 tbsp</li>
            <li>Sake 2 tbsp</li>
            <li>Soy sauce 1 tbsp</li>
            <li>Water 150ml</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut Chinese chive, pork and kimchi</li>
          <li>Add sesame oil in a pan and cook pork, ginger and garlic</li>
          <li>Add sake, soy sauce and water</li>
          <li>Add glass noodle and cook for 5 min</li>
          <li>Add kimchi and Chinese chive</li>
        </ol>
      </div>
    </div>
  )
}

export default FriedPorkKimchiGlassNoodle;
