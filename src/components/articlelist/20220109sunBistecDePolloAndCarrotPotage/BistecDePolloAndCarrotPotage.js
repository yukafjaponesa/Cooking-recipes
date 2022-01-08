import React from 'react';
import picture1 from './20220109chickensteakandcarrotpotage.jpg';
import picture2 from './20220109chicken1.jpg';
import picture3 from './20220109orangejuice.jpg';
import picture4 from './20220109chickeninorange.jpg';
import picture5 from './20220109choppedonion.jpg';
import picture6 from './20220109cookedonion.jpg';

function BistecDePolloAndCarrotPotage() {
  return (
    <div>
      <h1>Bistec De Pollo And Carrot Potage</h1>
      <h1>カリビアンチキンステーキ＆人参スープ</h1>
      <h3>Sun 09.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chicken-steak' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken breast filet 4</li>
            <li>Orange juice 1.25 cups</li>
            <li>Lime juice 1/2 cups</li>
            <li>4 cloves garlic finely chopped</li>
            <li>Ground cumin,Dried oregano, Ground coriander,Garlic powder 1 tsp</li>
            <li>Salt 2 tsp</li>
            <li>Black pepper 1/2 tsp</li>
            <li>Oil 2 tbsp</li>
            <li>Small yellow onion 3</li>
            <li>Steamed jasmine rice for serving</li>
            <li>Stewed black beans for serving</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Stretch chicken</li>
          <img className='food-pic' src={picture2} alt='chicken' />
          <br />
          <li>In a bowl, put 1 cup of orange juice and other herbs and garlic and salt & pepper</li>
          <img className='food-pic' src={picture3} alt='orange-juice' />
          <br />
          <li>Rest in fridge for 4 - 6 hours</li>
          <img className='food-pic' src={picture4} alt='chicken-in-orange' />
          <br />
          <li>Chop onions</li>
          <img className='food-pic' src={picture5} alt='chopped-onion' />
          <br />
          <li>Add oil in a pan and stir fri steak til browned</li>
          <li>In the same pan, add the rest of orange juice to clean it</li>
          <li>And then add onion to cooke</li>
          <img className='food-pic' src={picture6} alt='cooked-onion' />
        </ol>
      </div>
    </div>
  )
}

export default BistecDePolloAndCarrotPotage;
