import React from 'react';
import picture1 from './20220511cookiecreamicecream.jpg';
import picture2 from './20220511eggyorksugar.jpg';
import picture3 from './20220511eggyorksugarmilk.jpg';
import picture4 from './20220511heavycream.jpg';
import picture5 from './20220511meringue.jpg';
import picture6 from './20220511creameggyork.jpg';
import picture7 from './20220511beforefrozen.jpg';
import picture8 from './20220511cookiecovered.jpg';
import picture9 from './20220511cookiecoveredwrap.jpg';

function CookieCreamIceCake() {
  return (
    <div>
      <h1>Cookie Cream Ice Cake クッキー＆クリームアイスケーキ</h1>
      <h3>Wed 11.05.2022</h3>

      <div className='food-and-ingredients'>
        <img className='food-pic' src={picture1} alt='cookie-cream-ice-cake' />

        <div className='ingredients'>
          <h4 className='section-title'>Ingredients</h4>
          <ul className='ingredients-list'>
            <li>Milk pack 1(1 L)</li>
            <li>Egg york 1</li>
            <li>Sugar 30g</li>
            <li>Milk 30cc</li>
            <li>Vanille essence 3 drops</li>
            <li>Egg white 1</li>
            <li>Heavy cream 200cc</li>
            <li>Oreo cookie 50g & 3 pieces</li>
          </ul>
        </div>
      </div>

      <h4 className='section-title'>Process</h4>
      <div className='process'>
        <ol className='process-list'>
          <li>Add egg york and sugar in a pan and mix</li>
          <img className='food-pic' src={picture2} alt='eggyork-sugar' />
          <li>Add milk and mix and heat in low till lightly sticky. Add vanille. Cool down</li>
          <img className='food-pic' src={picture3} alt='eggyork-sugar-milk' />
          <li>Remove cream from oreo and crush</li>
          <li>Add egg white in a bowl and make meringue</li>
          <img className='food-pic' src={picture5} alt='meringue' />
          <li>Add heavy cream in another bowl and mix till bubbled(not with a handmixer)</li>
          <img className='food-pic' src={picture4} alt='heavy-cream' />
          <li>Strain egg york in heavy cream bowl and mix</li>
          <img className='food-pic' src={picture6} alt='cream-eggyork' />
          <li>Add meringue and mix. Crush oreo(3 pieces) and put in it.</li>
          <li>Add wrap in a milk pack and pour in it. Frozen for 3 hrs</li>
          <img className='food-pic' src={picture7} alt='before-frozen' />
          <li>Cover with crushed oreo</li>
          <img className='food-pic' src={picture8} alt='oreo-crushed' />
          <li>Wrap and 30 min in freezer</li>
          <img className='food-pic' src={picture9} alt='covered-wrap' />
        </ol>
      </div>
    </div>
  )
}

export default CookieCreamIceCake;
