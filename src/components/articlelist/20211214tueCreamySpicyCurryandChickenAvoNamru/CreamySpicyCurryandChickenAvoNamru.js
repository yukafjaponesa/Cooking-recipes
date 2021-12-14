import React from 'react';
import picture1 from './20211214maggicreamyspicycurryandchickenavonamru.jpg';
import picture2 from './20211214maggicreamyspicycurrysauce1.jpg';
import picture3 from './20211214maggicreamyspicycurrysauce2.jpg';

function CreamySpicyCurryandChickenAvoNamru() {
  return (
    <div>
      <h1>Creamy-Spicy Curry & Chicken Avo Namru</h1>
      <h1>クリーミースパイシーカレー & チキンアボナムル</h1>
      <h3>Tue 14.12.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='maggi-curry-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Maggi curry powder 1</li>
            <li>Water 300ml</li>
            <li>Heavy cream or milk 50ml</li>
            <li>Chicken 300g</li>
            <li>Onion, green onion, coriander</li>
            <li>***For Chicekn Avo Namru salad***</li>
            <li>Chicken 50g</li>
            <li>Avocado 1</li>
            <li>Korean seeweed</li>
            <li>Mentsuyu, sesame oil 1 tbsp/ea</li>
            <li>Vinegar 1 tsp</li>
            <li>Ground white sesame 2 tsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook rice</li>
          <li>Cut chicken in small pieces. Cut vegs too</li>
          <li>Add oil in a pan and cook chicken then add vegs</li>
          <li>Add water, powder and heavy cream</li>
          <li>Top with coriander</li>
          <li>***For Chicken Avocado Namru***</li>
          <li>After boiling chicekn, cut into small pieces</li>
          <li>CUt avocado and mix with all</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='maggi-pack1-pic' />
      <br />
      <img className='food-pic' src={picture3} alt='maggi-pack2-pic' />
    </div>
  )
}

export default CreamySpicyCurryandChickenAvoNamru;
