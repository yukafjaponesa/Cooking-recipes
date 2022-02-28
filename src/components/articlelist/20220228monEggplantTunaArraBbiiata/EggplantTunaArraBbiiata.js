import React from 'react';
import picture1 from './20220228eggplanttunaarrabbiata.jpg';
import picture2 from './20220228arrabbiatamaggi.jpg';

function EggplantTunaArraBbiiata() {
  return (
    <div>
      <h1>Eggplant Tuna Arra Bbiiata ナスとツナのアラビアータ</h1>
      <h3>Mon 28.02.2022</h3>
      <h4>For 1 portion</h4>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='eggplant-tuna-arra-bbiata' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Eggplant 1</li>
            <li>Tuna 50g</li>
            <li>Spaghetti 100g</li>
            <li>Water 1 L</li>
            <li>Salt 2 tsp</li>
            <li>***Sauce***</li>
            <li>Garlic 1 piece</li>
            <li>Chili 2 tsp</li>
            <li>Tomato can 200g</li>
            <li>Konsome 1 tsp</li>
            <li>Olive oil 1.5 tbsp</li>
            <li>Paserly</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Cut eggplant in 1 cm slice</li>
          <li>Add oil in a pan and cook eggplant first</li>
          <li>Then add tuna and maggi sauce</li>
          <li>Mix with spaghetti</li>
          <img className='food-pic' src={picture2} alt='arra-bbiata-maggi' />
          <br />
          <li>***To make sauce by yourself***</li>
          <li>Chop garlic</li>
          <li>Add olive oil, garlic and chili in a pan</li>
          <li>Add tuna</li>
          <li>When eggplant is soften, add tomato can and konsome</li>
        </ol>
      </div>
    </div>
  )
}

export default EggplantTunaArraBbiiata;
