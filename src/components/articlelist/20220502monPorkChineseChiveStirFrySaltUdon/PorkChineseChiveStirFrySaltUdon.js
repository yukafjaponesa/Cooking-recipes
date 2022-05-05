import React from 'react';
import picture1 from './20220502stirfryudon.jpg';

function PorkChineseChiveStirFrySaltUdon() {
  return (
    <div>
      <h1>Pork Chinese Chive Stir Fry Salt Udon 豚バラとニラの塩焼うどん</h1>
      <h3>Mon 02.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='stur-fry-udon' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Udon noodle 1</li>
            <li>Chinese chive 1/3 buck</li>
            <li>Pork meat 70g(豚バラ)</li>
            <li>Sesame oil 1 tbsp</li>
            <li>Ground ginger 1/2 tsp</li>
            <li>Sake 1 tbsp</li>
            <li>Consomme 1 tsp</li>
            <li>Salt & pepper</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cook udon</li>
          <li>Add sesame oil and ginger in a pan</li>
          <li>Cook pork and chinese chive</li>
          <li>Add other ingredients and stir well</li>
        </ol>
      </div>
    </div>
  )
}

export default PorkChineseChiveStirFrySaltUdon;
