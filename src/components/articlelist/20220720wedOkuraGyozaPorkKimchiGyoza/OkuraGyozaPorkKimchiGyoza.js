import React from 'react';
import picture1 from './20220720gyoza2types.jpg';
import picture2 from './20220720okuragyoza.jpg';
import picture3 from './20220720porkkimchigyoza.jpg';

function OkuraGyozaPorkKimchiGyoza() {
  return (
    <div>
      <h1>Okura Gyoza Pork Kimchi Gyoza まるごとオクラ餃子＆豚キム大葉の棒餃子</h1>
      <h3>Wed 20.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='gyoza-2types' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***Okura gyoza***</li>
            <li>Gyoza paper 10</li>
            <li>Okura 10 sticks</li>
            <li>Chicnese chives 4 sticks</li>
            <li>Oil 1 tbsp</li>
            <li>Sesame oil 1/2 tbsp</li>
            <li>☆Ground pork 150g</li>
            <li>☆Salt & pepper</li>
            <li>☆Ground garlic 1/2 tsp</li>
            <li>☆Soy sauce, ground ginger 1 tsp/ea</li>
            <li>Vinegar, soy sauce 1 tbsp/ea</li>
            <li>Chili oil</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut off okura head and sift salt and scrub them and wash out</li>
          <li>Chop chinese chieves</li>
          <li>Add ☆ in a bowl and mix with hand and add chinese chives</li>
          <li>Add meat and okura on top of it and wrap with gyoza paper</li>
          <li>Add oil in a pan and stir</li>
          <li>Add 3 tbsp of water and put a lid to steam for 6 - 7 min with low heat</li>
          <li>Add sesame oil to crisp</li>
          <img className='food-pic' src={picture2} alt='okura-gyoza' />
          <br />
          <li>***For Pork kimchi gyoza***</li>
          <li>Gyoza paper 20</li>
          <li>Ground pork 200g</li>
          <li>Kimchi 100g</li>
          <li>Chinese chives 50g</li>
          <li>Perilla 10 sheets</li>
          <li>Salt & pepper</li>
          <li>Oil 1 tbsp</li>
          <li>Sake 1 tbsp</li>
          <li>Soy sauce, ground ginger 1 tsp/ea</li>
          <li>Potato starch 1 tbsp</li>
          <li>Sesame oil 1 tsp</li>
          <br />
          <li>Cut perilla in half vertically </li>
          <li>Chop chinese chives and kimchi</li>
          <li>Add pork, salt & pepper in a bowl and mix with hand</li>
          <li>Add other ingredients(except oil 1 tbsp) and kimchi and chinese chives and mix well</li>
          <li>Put perilla on gyoza paper and meat</li>
          <li>Add oil in a pan and stir and add water 3 tbsp and steam for 5 min with a lid</li>
          <img className='food-pic' src={picture3} alt='pork-kimchi-gyoza' />
        </ol>
      </div>
    </div>
  )
}

export default OkuraGyozaPorkKimchiGyoza;
