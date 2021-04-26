import React from 'react';
import picture1 from './20210426CheeseDakGalbi.jpg';

function CheeseDakGalbi() {
  return (
    <div>
      <h1>Cheese Dak Galbi ~ Korean ~ チーズタッカルビ</h1>
      <h3>Mon 26.04.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='cheesedakgalbi-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Boneless chicken legs 400g</li>
            <li>For Gochujang(Korean chili miso paste)</li>
            <li>Miso paste 1 tbsp</li>
            <li>Soy sauce, sugar, chili 1tsp/ea</li>
            <li>Onion</li>
            <li>Cabbage</li>
            <li>Carrot</li>
            <li>Soy sauce 2 tbsp</li>
            <li>Sugar 1 tbsp</li>
            <li>Garlic & ginger</li>
            <li>Seseme oil</li>
            <li>Pizza cheese</li>
            <li>Rice</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook rice</li>
          <li>Marinate chicken leg with sauce and soy sauce & sugar as listed</li>
          <li>Chop vegs</li>
          <li>Put seseme oil in a pan and stir vegs</li>
          <li>Put chicken leg and stir to the brown color</li>
          <li>Put a lid and steam until chicken is cooked</li>
          <li>Make a space in the middle of the pan and put cheese</li>
          <li>Melt cheese with low heat</li>
        </ol>
      </div>
    </div>
  )
}

export default CheeseDakGalbi;
