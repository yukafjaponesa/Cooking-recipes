import React from 'react';
import picture1 from './20211031sigaporechickenrice.jpg';
import picture2 from './20211031ricecooker.jpg';

function SigaporeChickenRice() {
  return (
    <div>
      <h1>Sigapore Chicken Rice シンガポールチキンライス</h1>
      <h3>Sun 31.10.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='singapore-chickenrice-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 400g</li>
            <li>Rice 2 cups</li>
            <li>Chicken soup powder 1 tbsp</li>
            <li>Sake 1 tbsp</li>
            <li>Soy sauce 1 tsp</li>
            <li>Graind ginger & garic</li>
            <li>Green onion</li>
            <li>Salt</li>
            <li>***For sesame sauce***</li>
            <li>Vinegar 2 tbsp</li>
            <li>Soy sauce 2 tbsp</li>
            <li>Sugar & sesame oil 1 tsp/ea</li>
            <li>Chopped white onion</li>
            <li>***For sweet chili sauce***</li>
            <li>Chopped chili</li>
            <li>Lemon juice, sugar & tomate pure 1 tsp/ea</li>
            <li>Salt</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Make holes with fork. Add ginger, garlic and salt to chicken</li>
          <li>Wash rice and put in rice cooker</li>
          <li>Add chicekn soup powder, sake and soy sauce in it and add water to the 2 cups</li>
          <li>Add chicken and green onion and start cooking</li>
          <img className='food-pic' src={picture2} alt='rice-cooker-pic' />
          <li>Make sauces</li>
          <li>Serve with salad or tomato and cucumeber</li>
        </ol>
      </div>
    </div>
  )
}

export default SigaporeChickenRice;
