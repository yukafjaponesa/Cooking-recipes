import React from 'react';
import picture1 from './20220125dandansoupwithtofu.jpg';

function DandanSoupWithTofu() {
  return (
    <div>
      <h1>Dandan Soup With Tofu お豆腐坦々スープ</h1>
      <h3>Tue 25.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='dandan-soup-with-tofu' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>☆Minced pork meat 150g</li>
            <li>☆Tobanjan 1 tsp(korean chili paste)</li>
            <li>☆Graind garlic 1/2 tsp</li>
            <li>Water 200ml</li>
            <li>Tofu 1 pack</li>
            <li>Konsome 1 tbsp</li>
            <li>Miso paste 1 - 2 tbsp</li>
            <li>Graind white sesame 2 tbsp</li>
            <li>Soy milk 200ml</li>
            <li>Green onion</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add ☆ in a pot and cook(option: with sesame oil)</li>
          <li>Add water and tofu to boil</li>
          <li>Add konsome, miso paste and sesame</li>
          <li>Lastly, add soy milk till warm(not boiled)</li>
          <li>Top with green onion</li>
        </ol>
      </div>
    </div>
  )
}

export default DandanSoupWithTofu;
