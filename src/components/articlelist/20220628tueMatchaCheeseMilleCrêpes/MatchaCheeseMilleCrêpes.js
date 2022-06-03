import React from 'react';
import picture1 from './20220628matchcheesemillecrepes.jpg';
import picture2 from './20220628matchadough.jpg';
import picture3 from './20220628crepe.jpg';
import picture4 from './20220628siftmatcha.jpg';
import picture5 from './20220628cakecut.jpg';

function MatchaCheeseMilleCrêpes() {
  return (
    <div>
      <h1>Matcha Cheese Mille Crêpes 抹茶のチーズミルクレープ</h1>
      <h3>Tue 28.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='matcha-cheese-mille-crepes' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Egg 2</li>
            <li>Sugar 30g</li>
            <li>Flour 90g</li>
            <li>Matcha 10g</li>
            <li>Milk 300cc</li>
            <li>Melted butter 20g</li>
            <li>heavy cream 200cc</li>
            <li>Sugar 30g</li>
            <li>Cream cheese 50g</li>
            <li>Mascarpone cheese 50g</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add eggs, sugar, flour and matcha in a bowl and mix</li>
          <li>Add milk 2 times separately and mix each time</li>
          <img className='food-pic' src={picture2} alt='matcha-dough' />
          <li>Add melted butter and mix</li>
          <li>Make crepes and rest in fridge for 30 min</li>
          <img className='food-pic' src={picture3} alt='crepe' />
          <li>Add heavy cream and sugar in a bowl and mix with a hand mixer</li>
          <li>Add cream cheese and mascarpone cheese in another bowl and mix with a hand mixer</li>
          <li>Add cheese in heavy cream 2 times and mix with a hand mixer each time</li>
          <li>Sift matcha powder on top of mille crepes</li>
          <img className='food-pic' src={picture4} alt='sift-matcha' />
          <br />
          <img className='food-pic' src={picture5} alt='cake-cut' />
        </ol>
      </div>
    </div>
  )
}

export default MatchaCheeseMilleCrêpes;
