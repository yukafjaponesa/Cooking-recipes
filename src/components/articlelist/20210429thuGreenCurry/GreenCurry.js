import React from 'react';
import picture1 from './20210429greencurry.jpg';

function GreenCurry() {
  return (
    <div>
      <h1>Thai Green Curry タイグリーンカレー</h1>
      <h3>Thu 29.04.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='greencurry-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 400g</li>
            <li>Onion</li>
            <li>Carrot</li>
            <li>Mushroom</li>
            <li>Green bell pepper</li>
            <li>Paprika</li>
            <li>Ginger & garic</li>
            <li>Koriander & lemongrass</li>
            <li>Green curry paste 1 tbsp</li>
            <li>Soy sauce 1 tbsp</li>
            <li>Sugar 1 tbsp</li>
            <li>Chicken broth 1 tsp</li>
            <li>Coconuts milk 400g</li>
            <li>Water 300g</li>
            <li>Noodle or Rice</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop all vegs and chicken</li>
          <li>Stir vegs first then add chicken</li>
          <li>Add green curry paste</li>
          <li>Add coconuts milk and other sauces</li>
          <li>Cook rice or noodle</li>
        </ol>
      </div>
    </div>
  )
}

export default GreenCurry;
