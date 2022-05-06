import React from 'react';
import picture1 from './20220504porkleekrice.jpg';

function PorkLeekRice() {
  return (
    <div>
      <h1>Pork Leek Rice 豚バラネギ塩炊き込みご飯</h1>
      <h3>Wed 04.05.2022</h3>
      <h4>For 4 servings</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='pork-leek-rice' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Rice 2 cups</li>
            <li>Pork 150g</li>
            <li>Leek 1</li>
            <li>Water</li>
            <li>White sesame</li>
            <li>Sake 1 tbsp</li>
            <li>Salt 1 tsp</li>
            <li>Soy sauce 1 tsp</li>
            <li>Dashi powder 1 tsp</li>
            <li>Sesame oil 1 tbsp</li>
            <li>Black pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add rice in a rice cooker</li>
          <li>Add water a bit leas than 2 cups line</li>
          <li>Add chopped pork and leek(left a bit of green part)</li>
          <li>Add dashi, sake, salt and soy sauce and start cooking</li>
          <li>Add green leek and sesame oil(option: black pepper)</li>
        </ol>
      </div>
    </div>
  )
}

export default PorkLeekRice;
