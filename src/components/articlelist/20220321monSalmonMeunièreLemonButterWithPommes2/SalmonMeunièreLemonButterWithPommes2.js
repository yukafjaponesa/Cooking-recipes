import React from 'react';
import picture1 from './20220321salmonmunierelemonbutter.jpg';

function SalmonMeunièreLemonButterWithPommes2() {
  return (
    <div>
      <h1>Salmon Meunière Lemon Butter With Pommes2</h1>
      <h1>鮭ときのこのムニエル～レモンバターソース～　ポテトフライ付き</h1>
      <h3>Mon 21.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='salmon-muniere-lemon-butter' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Salmon 2 pieces</li>
            <li>Flour 2 tbsp</li>
            <li>Salt & pepper</li>
            <li>Mushroom(shimeji)</li>
            <li>Lemon juice 30ml</li>
            <li>Butter 20g & black pepper</li>
            <li>Olive oil 1 tbsp</li>
            <li>Salt, thyme</li>
            <br />
            <li>***For fried potatoes***</li>
            <li>Yellow potatoes 7 - 8</li>
            <li>Oil 3- 4 tbsp</li>
            <li>Salt & pepper</li>
            <li>Paserly and graind garlic</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut mushroom</li>
          <li>Add salt & pepper and flour to salmon filets</li>
          <li>Add olive oil in a pan and stir salmon with skin side</li>
          <li>Flip salmon and put on edge and add mushroom in the pan to cook</li>
          <li>Remove them and add butter and black pepper and lemon juice (add salt)</li>
          <li>Put lemon sauce aside</li>
          <br />
          <li>***For fried potato***</li>
          <li>Cut potatoes in wedge</li>
          <li>Add them in a bowl and mix with salt, pepper and oil</li>
          <li>Pre heat oven 200℃</li>
          <li>Bake for 20min</li>
          <li>For coating, mix paserly and garlic in a bowl and add baked potatoes</li>
          <li>Tip: if raw garlic is not your jam(or you wana make it for kids)</li>
          <li>saute the grlic in a bit of oil or butter unitil golden before tossing it</li>
          <li>with the potatoes and herbs</li>
        </ol>
      </div>
    </div>
  )
}

export default SalmonMeunièreLemonButterWithPommes2;
