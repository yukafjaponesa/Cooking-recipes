import React from 'react';
import picture1 from './20220401chickensteak.jpg';

function ChickenSteakAndTomatoSeaweedNamuru() {
  return (
    <div>
      <h1>Chicken Steak And Tomato Seaweed Namuru</h1>
      <h1>ささみステーキ & トマトとワカメのナムル</h1>
      <h3>Fri 01.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chicken-steak' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 4 sticks</li>
            <li>Flour</li>
            <li>Oster sauce 2 tbsp (or soy sauce 2 tbsp & honey 2 tsp)</li>
            <li>Soy sauce, mirin 1 tbsp/ea</li>
            <li>Sake 2 tbsp</li>
            <li>Black pepper, butter(10g)</li>
            <li>***Tomato seaweed namuru***</li>
            <li>Tomato 2 big</li>
            <li>Seaweed 3g</li>
            <li>Sesame oil 1 tbsp</li>
            <li>Vinegar 1/2 tbsp</li>
            <li>Salt 1/3 tsp</li>
            <li>Graind garlic 1/2 tsp</li>
            <li>Sesame 1 tsp</li>
            <li>Pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Spread chicken and sift flour</li>
          <li>Add oil in a pan and stir fri chicken both side</li>
          <li>Add sauce except butter and black pepper</li>
          <li>Add butter and black pepper at the last</li>
          <br />
          <li>Put seaweed in water and drain after soften</li>
          <li>Chop tomato and mix with all</li>
        </ol>
      </div>
    </div>
  )
}

export default ChickenSteakAndTomatoSeaweedNamuru;
