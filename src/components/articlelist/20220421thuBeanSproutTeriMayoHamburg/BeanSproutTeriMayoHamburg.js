import React from 'react';
import picture1 from './20220421beansproutterimayohamburg.jpg';

function BeanSproutTeriMayoHamburg() {
  return (
    <div>
      <h1>Bean Sprout Teri Mayo Hamburg 卵焼き器で！もやし照りマヨハンバーグ</h1>
      <h3>Thu 21.04.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='bean-sprout-terimayo' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Ground pork 200g</li>
            <li>Bean sprout 1/2bag</li>
            <li>Oil 1/2 tbsp</li>
            <li>Salt 1/4 tsp</li>
            <li>Pepper</li>
            <li>Beaten egg 1</li>
            <li>***For the sauce***</li>
            <li>Sake, mirin, soy sauce 1 tbsp/ea</li>
            <li>Sugar 1/2 tbsp</li>
            <li>Mayo</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add pork, bean sprout, salt, pepper and beaten egg in a plastic bag and mix</li>
          <li>Add oil in egg roll pan and stir meat pattie</li>
          <li>Add sauce ingredients</li>
        </ol>
      </div>
    </div>
  )
}

export default BeanSproutTeriMayoHamburg;
