import React from 'react';
import picture1 from './20220630noritamagyoza.jpg';

function NoriTamaGyoza() {
  return (
    <div>
      <h1>Nori Tama Gyoza のりたま餃子</h1>
      <h3>Thu 30.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='nori-tama-gyoza' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Yaki nori 2 sheets</li>
            <li>Egg york 2</li>
            <li>Sesame oil 1 tbsp</li>
            <li>☆Ground pork 200g</li>
            <li>☆Chinese chive 1/2</li>
            <li>☆Egg white 2</li>
            <li>☆Salt 1/3 tsp</li>
            <li>☆Oyster ssauce 2 tsp</li>
            <li>☆Gournd ginger & garlic 1/2 tsp/ea</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop chicnese chive. Cut yaki nori in 6 pieces(total 12 pieces)</li>
          <li>Put ☆ in a plastic bag and mix well</li>
          <li>Cut the corner and add on nori to roll</li>
          <li>Add sesame oil in a pan and stir</li>
          <li>Serve with egg york and dip in it</li>
        </ol>
      </div>
    </div>
  )
}

export default NoriTamaGyoza;
