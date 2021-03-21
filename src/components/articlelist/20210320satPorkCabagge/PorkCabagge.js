import React from 'react';
import picture1 from './20210320porkcabagge.jpg';


function PorkCabagge() {
  return(
    <div>
      <h1>Pork Cabagge Rice Bowl</h1>
      <h3>Sat 20.03.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='porkcabagge-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pork rib or belly, thin sliced 400g</li>
            <li>Cabagge</li>
            <li>Sake or water - 2 tbsp</li>
            <li>Ponzu - 3 tbsp</li>
            <li>if no Ponzu, Soy sauce - 2 tbsp & Vinegar - 1 tbsp & Lemon juice 1 tsp</li>
            <li>Green onion</li>
            <li>Chinese radish</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop cabagge and put on a pan</li>
          <li>Cut pork into a bite-size and put on the cabagge</li>
          <li>Put Sake and lid and steam.</li>
          <li>Chop green onion into small pieces and mix with sauces</li>
          <li>Schred chicnese radish and mix with green onion</li>
          <li>Put rice in a bowl and pork cabagge with sauce</li>
        </ol>
      </div>
    </div>
  )
};

export default PorkCabagge;
