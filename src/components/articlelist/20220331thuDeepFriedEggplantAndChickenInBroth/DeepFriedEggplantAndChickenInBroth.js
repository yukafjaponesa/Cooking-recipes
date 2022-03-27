import React from 'react';
import picture1 from './20220331deepfriedeggplantchickeninbroth.jpg';
import picture2 from './20220330eggplantchickeninbroth.jpg';

function DeepFriedEggplantAndChickenInBroth() {
  return (
    <div>
      <h1>Deep Fried Eggplant And Chicken In Broth</h1>
      <h1>ナスと鶏肉の揚げびたし & クリーミーアボカド</h1>
      <h3>Thu 31.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='deep-fried-eggplant-chicken' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Water 50ml</li>
            <li>Mentsuyu 50ml</li>
            <li>Graind ginger 1/2 tsp</li>
            <li>Eggplant 3 small </li>
            <li>Chicken 200g</li>
            <li>Potato starch 2 tbsp</li>
            <li>Chopped spring onion</li>
            <li>***For creamy avocado***</li>
            <li>Avocado 2</li>
            <li>Mentsuyu 3 tbsp</li>
            <li>Sesame, sesame oil 1 tbsp/ea</li>
            <li>Graind garlic 1 tsp</li>
            <li>Tuna can 70g</li>
            <li>Seaweed</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut eggplant in half vertically</li>
          <li>Sift potato starch on chicken</li>
          <li>Deep fry eggplant first and then chicken</li>
          <li>Mix sauce and 600w 2 min microwave oven</li>
          <li>Add eggplant and chicken in sauce and rest in fridge 30 min</li>
          <br />
          <li>***For creamy avocado***</li>
          <li>Chop avocados</li>
          <li>Mix with all</li>
        </ol>
      </div>
      <img className='food-pic' src={picture2} alt='in-broth' />
    </div>
  )
}

export default DeepFriedEggplantAndChickenInBroth;
