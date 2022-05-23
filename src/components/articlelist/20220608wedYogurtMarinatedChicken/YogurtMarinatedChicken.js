import React from 'react';
import picture1 from './20220608yogurtmarinatedchicken.jpg';

function YogurtMarinatedChicken() {
  return (
    <div>
      <h1>Yogurt Marinated Chicken ヨーグルトマリネチキン</h1>
      <h3>Wed 08.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='yogurt-marinated-chicken' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken breast 4 6 ounce(1 1/2 lbs.)</li>
            <li>Greek yogurt 1/3 cup</li>
            <li>Garlic 4 gloves minced</li>
            <li>Lemon juice 1 tbsp</li>
            <li>Paprika 2 tsp</li>
            <li>Garlic powder,salt 1 tsp/ea</li>
            <li>Onion powder, oregano, pepper 1/2 tsp/ea</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pat the chicken breast with a paper towel to remove excess moisture</li>
          <li>Pound the thicker end of the chicken to even out the sides for even cooking</li>
          <li>Add greek yogurt on top of the chicken and sesaon with the paprika, garlic,</li>
          <li>onion, oregano,salt and pepper</li>
          <li>Rub the chicken breasts with the oil and seasoning and coat well</li>
          <li>Allow the chicken to marinade for at least 30 min or up to 24 hrs</li>
          <li>Pre heat oven 180℃. Arrange a single layer of the chicken breasts with the smooth side down</li>
          <li>Bake for 15 - 20 min and rest fir 5 min</li>
        </ol>
      </div>
    </div>
  )
}

export default YogurtMarinatedChicken;
