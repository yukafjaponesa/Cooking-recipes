import React from 'react';
import picture1 from './20220226ovensalmon1.jpg';
import picture2 from './20220226ofenlachsmaggi1.jpg';
import picture3 from './20220226ofenlachsmaggi2.jpg';
import picture4 from './20220226ovensalmon2.jpg';

function OvenSalmonAndCabbageWithSpringonionSauce() {
  return (
    <div>
      <h1>Oven Salmon And Cabbage With Springonion Sauce</h1>
      <h1>オーブン焼きサーモン & ねぎだれキャベツ</h1>
      <h3>Sat 26.02.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='oven-salmon-cabbage' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***For oven salmon***</li>
            <li>Salmon filets 4(125g/ea)</li>
            <li>Mini tomato 250g</li>
            <li>Zucchini 2</li>
            <li>Water 8 tsp</li>
            <li>Oil 4 tsp</li>
            <br />
            <li>***For cabagge springonion sauce***</li>
            <li>Cabbage 250g</li>
            <li>Spring onion 1/2 (80g)</li>
            <li>Sesame oil 1tbsp</li>
            <li>Sugar 1 tsp</li>
            <li>Salt 1/3 tsp</li>
            <li>Konsome 1/2 tsp</li>
            <li>Vinegar 2 tbsp</li>
            <li>Pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>***For Oven Salmon***</li>
          <li>Pre heat oven 160℃</li>
          <li>Add maggi, water and oil in a bowl and mix well</li>
          <li>Put salmon in a plate and put 1 tsp of above on it</li>
          <li>Tomato cut in half, zucchini cut in half and then 1cm slie</li>
          <li>Add vegs in the bowl and mix well and then add into salmon</li>
          <li>Bake for 35min</li>
          <br />
          <li>***For Cabbage spring onion sauce***</li>
          <li>Cut cabagge in pieces and steam it to soften</li>
          <li>Chop spring onion and mix with other ingredients except sesame oil</li>
          <li>Pour the sauce and sesame oil on cabbage</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='oven-salmon-maggi1' />
      <br />
      <img className='food-pic' src={picture3} alt='oven-salmon-maggi2' />
      <br />
      <img className='food-pic' src={picture4} alt='oven-salmon-cabbage2' />
    </div>
  )
}

export default OvenSalmonAndCabbageWithSpringonionSauce;
