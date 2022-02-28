import React from 'react';
import picture1 from './20220227sweetsourmayochicken.jpg';
import picture2 from './20220227sweetsourmayochickenprep1.jpg';
import picture3 from './20220227sweetsourmayochickenprep2.jpg';
import picture4 from './20220227sweetsourmayochickenprep3.jpg';

function SweetSourMayoChicken() {
  return (
    <div>
      <h1>Sweet Sour Mayo Chicken 甘酢マヨだれチキン</h1>
      <h3>Sun 27.02.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sweetsour-mayo-chicken' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 300g</li>
            <li>Potato starch 2 tbsp</li>
            <li>☆Sake 1 tbsp</li>
            <li>☆Salt & sugar 1/2 tsp/ea</li>
            <li>△Mayo 3 tbsp</li>
            <li>△Milk 1 tbsp</li>
            <li>△Graind garlic 1/2 tsp(3cm)</li>
            <li>Oil 2 tbsp</li>
            <li>〇Soy sauce 1 tbsp</li>
            <li>〇Sugar & vinegar 2 tbsp/ea</li>
            <li>Black pepper & paserly</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut chicken in pieces and add in a plastic bag with ☆</li>
          <li>Then add potato starch</li>
          <img className='food-pic' src={picture2} alt='sweetsour-mayo-chicken-prep1' />
          <li>Mix △ to make mayo sauce</li>
          <img className='food-pic' src={picture3} alt='sweetsour-mayo-chicken-prep2' />
          <li>Add oil in a pan stir chicken</li>
          <li>Add 〇</li>
          <img className='food-pic' src={picture4} alt='sweetsour-mayo-chicken-prep3' />
          <li>I made rice and thin sliced cabbage on bottom of chicken</li>
          <li>Top with black pepper and paserly</li>
        </ol>
      </div>
    </div>
  )
}

export default SweetSourMayoChicken;
