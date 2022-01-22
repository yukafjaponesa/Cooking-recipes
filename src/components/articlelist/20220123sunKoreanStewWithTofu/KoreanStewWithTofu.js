import React from 'react';
import picture1 from './20220123koreanstewwithtofu.jpg';

function KoreanStewWithTofu() {
  return (
    <div>
      <h1>Korean Stew With Tofu お豆腐チゲ風スープ</h1>
      <h3>Sun 23.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='korean-stew-wit-htofu' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Minced pork meat 130g</li>
            <li>Kimchi 50g</li>
            <li>☆Water 400ml</li>
            <li>☆Konsome, soy sauce 2 tsp/ea</li>
            <li>Tofu 1/2</li>
            <li>Potato starch 2 tsp & 4 tsp of water (mix)</li>
            <li>Sesame oil 2 tsp</li>
            <li>Green onion or chinese chieves</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Stir fri pork meat and add then kimchi</li>
          <li>Add ☆ to boil and then add potato starch</li>
          <li>Add tofu and sesame oil</li>
          <li>Add green onion on top</li>
        </ol>
      </div>
    </div>
  )
}

export default KoreanStewWithTofu;
