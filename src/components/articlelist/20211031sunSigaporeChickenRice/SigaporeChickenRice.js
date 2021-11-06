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
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Make holes with a fork. Add ginger, garlic and salt to chicken</li>
          <li>Wash rice and put in rice cooker</li>
          <li>Add chicekn soup powder, sake and soy sauce in it and add water to the 2 cups</li>
          <li>Add chicken and green onion and start cooking</li>
          <img className='food-pic' src={picture2} alt='rice-cooker-pic' />
          <li>Make sauces</li>
          <li>Serve with salad or tomato and cucumeber</li>
        </ol>
        <ul>
          <li>***For sesame sauce***</li>
          <li>Vinegar 2 tbsp</li>
          <li>Soy sauce 2 tbsp</li>
          <li>Sugar & sesame oil 1 tsp/ea</li>
          <li>Chopped white onion</li>
          <br />
          <li>***For ginger sauce***</li>
          <li>Grained ginger 25g</li>
          <li>Sesame oil 1 tsp</li>
          <li>Salt</li>
          <li>or</li>
          <li>Grained ginger, lemon juice 1 tbsp/ea</li>
          <li>Soy sauce or fish sauce(ナンプラー) 1 tsp</li>
          <br />
          <li>***For sweet chili sauce***</li>
          <li>Chopped chili</li>
          <li>Lemon juice, sugar & tomate pure 1 tsp/ea</li>
          <li>Salt</li>
          <li>or</li>
          <li>Chilli 1 - 3</li>
          <li>Garlic 2 pieces</li>
          <li>Salt 1/2 tsp</li>
          <li>Honey, water 50ml/ea</li>
          <li>Vinegar 100ml</li>
          <li>Put chilis in  pot and soak them in water</li>
          <li>After boiling, 15 min with low heat</li>
          <li>After that, chop chillis</li>
          <li>Grained garlic, vinegar and chili in pot with 50ml water simmer to a third</li>
          <li>or</li>
          <li>Ketchap 2 tbsp</li>
          <li>Tabasco</li>
          <li>Lemon juice</li>
          <br />
          <li>***Oyster sauce***</li>
          <li>Boiled chicken water 2 tsp</li>
          <li>Oyster sauce 1 tbsp</li>
          <li>Soy sauce 1 tsp</li>
          <li>sesame oil 1 tsp</li>
        </ul>
      </div>
    </div>
  )
}

export default SigaporeChickenRice;
