import React from 'react';
import picture1 from './20220709chickenzucchinisweetsour.jpg';

function ChickenZucchiniSweetSour() {
  return (
    <div>
      <h1>Chicken Zucchini Sweet Sour 鶏肉とズッキーニの甘酢炒め</h1>
      <h3>Sat 09.07.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='chicken-zucchini-sweet-sour' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Chicken 250g</li>
            <li>Zucchini 1/2</li>
            <li>Mini tomato 4</li>
            <li>Pepper & salt</li>
            <li>Potato starch</li>
            <li>Oil 1 tbsp</li>
            <li>Sake, sugar, vinegar 1 tbsp/ea</li>
            <li>Soy sauce 1/2 tbsp</li>
            <li>Ketchup, white sesame 1 tbsp/ea</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Chop chicken and sift potato starch, salt & pepper</li>
          <li>Slice zucchini, cut tomatoes in half</li>
          <li>Add oil in a pan and stir chicken</li>
          <li>Add zucchini and tomato and stir lightly</li>
          <li>Mix with sauces</li>
        </ol>
      </div>
    </div>
  )
}

export default ChickenZucchiniSweetSour;
