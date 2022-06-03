import React from 'react';
import picture1 from './20220629strawberrymillecrepes.jpg';
import picture2 from './20220629cakecut.jpg';

function StrawberryMilleCrepesHomemadeCustard() {
  return (
    <div>
      <h1>Strawberry Mille Crepes Homemade Custard</h1>
      <h1>手作りカスタードで苺のミルクレープ</h1>
      <h3>Wed 29.06.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='strawberry-mille-crepes' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Unsalted butter 15g</li>
            <li>Flour 100g</li>
            <li>Sugar 2 tbsp</li>
            <li>Salt</li>
            <li>Beaten egg 2</li>
            <li>Milk 180cc</li>
            <li>Egg york 4</li>
            <li>Flour 25g</li>
            <li>Milk 350cc</li>
            <li>Sugar 65g</li>
            <li>Unsalted butter 25g</li>
            <li>Strawberry 200g + 6 pieces</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add four(100g), sugar(2tbsp), beaten eggs and salt in a bowl and mix</li>
          <li>Add milk(180cc) little by litte and mix each time</li>
          <li>Add melted butter(15g) in it and strain and rest in fridge for 30 min</li>
          <li>And then make crepes</li>
          <li>Add egg yorks in a bowl and mix with a hand mixer</li>
          <li>Add flour(25g) and mix with a mixer</li>
          <li>Add milk(350cc) and sugar(65g) in a pot and heat until short before boiling</li>
          <li>Add milkin egg york little by little and mix each time</li>
          <li>Strain in it and put in the pot again and heat it until short before boiling</li>
          <li>Remove from the stove and add unsalted butter(25g) and mix</li>
          <li>Place in a flat bat and cover tightly onto the surface with a wrap</li>
          <li>Rest in fridge for 30 min</li>
          <li>Chop 200g strawberries and mix with custard</li>
          <li>Slice 6 strawberries</li>
          <img className='food-pic' src={picture2} alt='cake-cut' />
        </ol>
      </div>
    </div>
  )
}

export default StrawberryMilleCrepesHomemadeCustard;
