import React from 'react';
import picture1 from './20220228chickeneggplantsweetchili.jpg';

function ChickenEggplantSweetChili() {
  return (
    <div>
      <h1>Chicken Eggplant Sweet Chili　ナスとチキンの甘辛照り照り炒め</h1>
      <h3>Mon 28.02.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chicken-eggplant-sweet-chili' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 300g & potato starch 1 tbsp</li>
            <li>Eggplant 200g & potato starch 1 tbsp</li>
            <li>Oil 4 tbsp</li>
            <li>Kochujan(korean chili miso paste) 1 tbsp</li>
            <li>Sake Sake 2 tbsp</li>
            <li>Honey, soy sauce, oyster sauce & tobanjan 1 tsp/ea</li>
            <li>Graind garlic 1/4 tsp</li>
            <li>White sesame 1 tbsp</li>
            <li>Spring onion</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut chiekn and eggplant in pieces and cover with potato starch</li>
          <li>Add oil in a pan and stir eggplant first and remove it</li>
          <li>Then stir chicken in same pan and remove it</li>
          <li>Add other ingredients to cook</li>
          <li>And add chicken and eggplant</li>
          <li>Add white sesame</li>
          <li>Top with spring onion</li>
        </ol>
      </div>
    </div>
  )
}

export default ChickenEggplantSweetChili;
