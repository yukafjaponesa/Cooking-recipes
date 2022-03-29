import React from 'react';
import picture1 from './20220402coconutschickenwithwokvegs.jpg';

function CoconutsChickenWithWokVegs() {
  return (
    <div>
      <h1>Coconuts Chicken With Wok Vegs ココナッツチキンとアジア野菜</h1>
      <h3>Sat 02.04.2022</h3>
      <h4>For 4 servings</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='coconuts-chicken-with-wokvegs' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Mie noodle 200g</li>
            <li>Chicken 400g</li>
            <li>Coconuts flake 5 tbsp</li>
            <li>Breadcrumbles</li>
            <li>Egg 1 & coconutss milk 2 tbsp</li>
            <li>Flour 1 tbsp,Curry powder 1/2 tsp, Cayenne pepper 1/3 tsp, salt</li>
            <li>Vegs - red paprika, carrot, onion, spring onion, bmboo,chili</li>
            <li>Veg broth powder 1 tsp</li>
            <li>Soy sauce 4 tbsp</li>
            <li>Oyster sauce 2 tbsp</li>
            <li>Agave syrup 1 tsp</li>
            <li>Sesame oil 2 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook noodle</li>
          <li>Put flour → egg → breadcrumbles on chicken and lightly deep fry</li>
          <li>Cook vegs with sesame oil</li>
          <li>Add ingredients in vegs and mix well</li>
        </ol>
      </div>
    </div>
  )
}

export default CoconutsChickenWithWokVegs;
