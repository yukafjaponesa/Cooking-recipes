import React from 'react';
import picture1 from './20210411katsudon.jpg';

function KatsuDon() {
  return (
    <div>
      <h1>Katsu-Don 卵とじかつ丼</h1>
      <h3>Sun 11.04.2021</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='katsudon-pic' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Pork rib</li>
            <li>Onion</li>
            <li>Egg</li>
            <li>Soy sauce - 1 tbsp</li>
            <li>Sugar - 1 tsp</li>
            <li>Dashi / Mentsuyu</li>
            <li>Flour</li>
            <li>Egg</li>
            <li>Breadcrumbs</li>
            <li>Rice</li>
            <li>Mitsuba / Green onion</li>
            <li>Pepper & salt</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Pound the meat to thin and big and put salt & pepper</li>
          <li>Thin sliced onion</li>
          <li>Cook rice</li>
          <li>Dip the meat in flour ☞ egg　☞ breadcrumbs and then fry it in oil </li>
          <li>Put the meat in a plate</li>
          <li>Put sauce in a same pan and onion. Cook until onion becomes clear</li>
          <li>Cut the pork cullet into 2cm length</li>
          <li>Puth back the cullet in the pan and beaten egg</li>
          <li>Put a lid and steamed for 30 seconds</li>
          <li>Put rice and pork cullet and Mitsuba on top</li>
        </ol>
      </div>

    </div>
  )
}

export default KatsuDon;
