import React from 'react';
import picture1 from './20220119starchsaucetofu.jpg';

function TofuWithStarchySauce() {
  return (
    <div>
      <h1>Tofu With Starchy Sauce ひき肉ともやしのあんかけ豆腐</h1>
      <h3>Wed 19.01.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='beef-abura-rice' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Tofu/Fried Tofu 2</li>
            <li>Sesame oil 2 tbsp</li>
            <li>Minced pork 200g</li>
            <li>Bean sprout 1 bag</li>
            <li>Mirin & sake 50ml/ea</li>
            <li>Soy sauce 30ml</li>
            <li>(水溶き片栗粉)Potato starch 2tbsp and water 2 tbsp mix together</li>
            <li>Green onion</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add oil in a pan and stir fry tofu lightly</li>
          <li>Cut in 4 pieces</li>
          <li>Add pork in the same pan and cook well</li>
          <li>Add bean sprout and cook till be soften</li>
          <li>Add soy sauce, mirin and sake and then add potato starch</li>
          <li>Top with green onion</li>
        </ol>
      </div>
    </div>
  )
}

export default TofuWithStarchySauce;
