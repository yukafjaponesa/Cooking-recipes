import React from 'react';
import picture1 from './20220218kimchicheesefriedrice.jpg';
import picture2 from './20220218kimchicheeseinpan.jpg';

function KimchiCheeseFriedRice() {
  return (
    <div>
      <h1>Kimchi Cheese Fried Rice キムチーズチャーハン</h1>
      <h3>Fri 18.02.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='kimchi-cheese-fried-rice' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Kimchi 100g</li>
            <li>Graind meat 100g</li>
            <li>Rice 300g</li>
            <li>Konsome 1 tsp</li>
            <li>Sesame oil</li>
            <li>Chinese chives,Spring onion, sesame, cheese</li>
            <li>***For seaweed soup***</li>
            <li>Seaweed 2g</li>
            <li>Sliced onion 1/2</li>
            <li>Water 400ml</li>
            <li>Konsome 2 tsp</li>
            <li>Sesame oil, sesame 1 tsp/ea</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add sesame oil in a pan and cook meat</li>
          <li>Add kimchi and chinese chives</li>
          <li>Add rice and konsome</li>
          <li>Add cheese around fried rice</li>
          <li>Top with spring onion and sesame</li>
          <li>For seaweed soup</li>
          <br />
          <li>For seaweed soup</li>
          <li>Add ingredients in a pan and cook</li>
          <li>Cover with sesame and sesame oil</li>
        </ol>
      </div>
    </div>
  )
}

export default KimchiCheeseFriedRice;
