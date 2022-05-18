import React from 'react';
import picture1 from './20220602peasproutmeatricebowl.jpg';

function PeaSproutMeatRiceBowl() {
  return (
    <div>
      <h1>Pea Sprout Meat Rice Bowl 肉豆苗丼</h1>
      <h3>Thu 02.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='pea-sprout-meat-rice-bowl' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pea sprout 1/2 pack</li>
            <li>Ground pork 50g</li>
            <li>Salt & pepper</li>
            <li>Sesame oil 2 tsp</li>
            <li>White ground sesame 1/2 tsp</li>
            <li>Soy sauce, mirin 1 tbsp/ea</li>
            <li>Ground garlic 1/3 tsp</li>
            <li>Water 30ml</li>
            <li>Potato starch & water mix 1/2 tbsp/ea</li>
            <li>Egg 1</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Stir pea sprout with sesame oil</li>
          <li>Add sesame, garlic and salt & pepper and remove from the pan</li>
          <li>Cook pork and then add water, soy sauce mirin</li>
          <li>After coking, add potato starch & water</li>
          <li>Make onsen egg</li>
        </ol>
      </div>
    </div>
  )
}

export default PeaSproutMeatRiceBowl;
