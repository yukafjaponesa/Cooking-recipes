import React from 'react';
import picture1 from './20220421veganpastasalad1.jpg';
import picture2 from './20220421veganpastasalad2.jpg';
import picture3 from './20220421veganpastasalad3.jpg';

function VeganPastaSalad() {
  return (
    <div>
      <h1>Vegan Pasta Salad ビーガンパスタサラダ</h1>
      <h3>Thu 21.04.2022</h3>
      <h4>8 servings with creamy herb ranch dressing</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='vegan-pasta-salad1' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Rotini 16 oz</li>
            <li>Red bell pepper 2 cups</li>
            <li>Diced celery, cucumber, red onion, black olives 1 cup/ea</li>
            <li>Chickpea 1.5 cups</li>
            <li>Cherry tomatoes 2 cups</li>
            <li>Dill 1/2 cup</li>
            <li>Dressing:</li>
            <li>Plant based yogurt 1/2 cup</li>
            <li>Olive oil 1/3 cup</li>
            <li>Lemon juice 1 tbsp</li>
            <li>Salt, garlic powder, dried dill 1 tsp/ea</li>
            <li>Onion powder, pepper 1/4 tsp/ea</li>
            <li>Dried parsley, dijon mustard 1 tsp/ea</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook pasta and chop vegs</li>
          <li>Mix dressing ingredients in a bowl</li>
          <li>Strain pasta and run cold water over it</li>
          <li>Add into a large bowl with vegs and pour dressing on top and mix</li>
          <img className='food-pic' src={picture2} alt='vegan-past-salad2' />
          <br />
          <img className='food-pic' src={picture3} alt='vegan-past-salad3' />
        </ol>
      </div>
    </div>
  )
}

export default VeganPastaSalad;
