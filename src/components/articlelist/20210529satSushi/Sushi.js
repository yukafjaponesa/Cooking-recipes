import React from 'react';
import picture1 from './20210529sushi.jpg';
import picture2 from './20210529sushiprep.jpg';
import picture3 from './20210529sushimaki.jpg';

function Sushi() {
  return (
    <div>
      <h1>Sushi 寿司</h1>
      <h3>Sat 29.05.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sushi-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>2 cups of Rice (I use quinoa in it but not neccesary)</li>
            <li>For rice vinegar</li>
            <li>☆ Vinegar 4 tbsp, sugar 2 tbsp, salt 1 tsp</li>
            <li>Sushi Nori / Seaweed</li>
            <li>Smoked salmon (Unfortunately, I can't get sashimi fish where I am now)</li>
            <li>Cucumber</li>
            <li>Avocado</li>
            <li>Tuna</li>
            <li>Egg for egg roll</li>
            <li>Wasabi</li>
            <li>For Miso soup</li>
            <li>Miso pate</li>
            <li>seaweed or green onion or egg - your choice</li>
            <li>*** I can actually make rolls without Bamboo mat only with a rap ***</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>After cooking rice, put in a bowl and add ☆</li>
          <li>Put rice on Sushi Nori(seaweed) and your choice of vegs on top</li>
          <li>Make a roll sushi and serve with soy sauce and wasabi</li>
          <li>*** My foreign friends prefer eat with sesame deressing/teriyaki sauce in stead of soy sauce</li>
          <li>For Miso soup</li>
          <li>Put water and vegs in a pot and boil it</li>
          <li>After vegs are cooked, turn off the heat and wait for 10 min</li>
          <li>Then mix miso paste</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='sushiprep-pic' />
      <img className='food-pic' src={picture3} alt='sushimaki-pic' />
    </div>
  )
}

export default Sushi;
