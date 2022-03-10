import React from 'react';
import picture1 from './20220308sweetpotatomochi.jpg';

function SweetPotatoMochi2tastes() {
  return (
    <div>
      <h1>Butter sweet potato mochi & heart shape chocolate sweet potato mochi</h1>
      <h1>バター芋餅＆ハートのチョコ芋餅</h1>
      <h3>Tue 08.03.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='sweet-potato-mochi' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>***For butter sweet potato mochi***</li>
            <li>Sweet potato 200g</li>
            <li>Butter 30g</li>
            <li>Potato starch 5 tbsp</li>
            <li>Sugar 2 tbsp</li>
            <li>Milk 3 tbsp</li>
            <li>Mirin 3 tbsp, soy sauce 1 tbsp, sugar 2 tbsp</li>
            <br />
            <li>***For heart shape chocolate mochi***</li>
            <li>Sweet potato 200g</li>
            <li>Chocolate 200g</li>
            <li>Potato starch 5 tbsp</li>
            <li>Milk 4 tbsp</li>
            <li>Sugar 2 tbsp</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>***For butter sweet potato mochi***</li>
          <li>Peel potato skin and steam</li>
          <li>Add butter and smash with a fork while it is hot</li>
          <li>Add potato starch and sugar and mix</li>
          <li>Add milk and mix</li>
          <li>Devide 12 pieces and stir with oil</li>
          <li>Remove from the pan and add sauce and put bakc mochi</li>
          <br />
          <li>***For heart shape chocolate mochi***</li>
          <li>Peel potato skin and steam</li>
          <li>Chop 1 chocolate sheet in small pieces and mix with potato</li>
          <li>Add potato starch, sugar and milk and mix well</li>
          <li>Cut the rest of chocolate in 12 pieces</li>
          <li>Make heart shape and put chocolate piece in it</li>
          <li>Stir fry with oil</li>
        </ol>
      </div>
    </div>
  )
}

export default SweetPotatoMochi2tastes;
