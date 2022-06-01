import React from 'react';
import picture1 from './20220627chickenponzu.jpg';

function ChickenGratedRadishWithPonzu() {
  return (
    <div>
      <h1>Chicken Grated Radish With Ponzu</h1>
      <h1>チキンのおろしポン酢</h1>
      <h3>Mon 27.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chicken-ponzu' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 250g(鶏もも)</li>
            <li>Japanese radish 150g(5cm)</li>
            <li>Salt & pepper</li>
            <li>Potato starch 1 tbsp</li>
            <li>Mirin 1 tbsp</li>
            <li>Ponzu-soy sauce 2 tbsp</li>
            <li>Oil 1 tbsp</li>
            <li>Chopped spring onion</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Sift potato starch on chicken and salt & pepper</li>
          <li>Grated radish</li>
          <li>Add oil in a pan and stir chicken both side and remove</li>
          <li>Add mirin and ponzu in it and to heat and then add radish to cook for a short time</li>
          <li>Pour radish onto chicken</li>
        </ol>
      </div>
    </div>
  )
}

export default ChickenGratedRadishWithPonzu;
