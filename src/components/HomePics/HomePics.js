import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import picture1 from './Pics/20210223youlinji.jpg';
import picture2 from './Pics/20210227bangbangji.jpg';
import picture3 from './Pics/20210312gyoza.jpg';
import picture4 from './Pics/20210312gyozapizza.jpg';
import picture5 from './Pics/20210316croquet.jpg';
import picture6 from './Pics/20210320porkcabagge.jpg';
import picture7 from './Pics/20210323salmonpoke.jpg';
import Youlinji from '../articlelist/20210223tueYoulinji/Youlinji';

function HomePics() {
  // let imgObj;
  // let animate;
  //
  // function init() {
  //   imgObj = document.getElementById('animate-pics');
  //   imgObj.style.position = 'relative';
  //   imgObj.style.left = '0px';
  // }

  // const handleClick = () => {
  //   // imgObj.style.left = parseInt(imgObj.style.left) - 2 + 'px';
  //
  //   if(parseInt(imgObj.style.position) > 375) {
  //     imgObj.style.left = parseInt(imgObj.style.left) - 2 + 'px';
  //   }
  //   if(parseInt(imgObj.style.position) < 25) {
  //     imgObj.style.left = parseInt(imgObj.style.left) + 2 + 'px';
  //   }
  //   animate = setTimeout(handleClick,20)
  // }
  //
  // window.onload = init;


  return(
    <div className='animate-pic-div'>
      <Router>
        <div id='animate-pics'>
          <img className='anime-food-pic' src={picture1} alt='youlinji-pic' />
          <img className='anime-food-pic' src={picture2} alt='bangbangji-pic' />
          <img className='anime-food-pic' src={picture3} alt='gyoza-pic' />
        </div>

        <Switch>
          <Route path='/youlinji'>
            <Youlinji />
          </Route>
        </Switch>
      </Router>

      {/*
        <div>
          <input type='button' value='play'/>
        </div>
        */}

      <div id='animate-pics'>
        <img className='anime-food-pic' src={picture4} alt='gyoza-pizza' />
        <img className='anime-food-pic' src={picture5} alt='croquet-pic' />
        <img className='anime-food-pic' src={picture6} alt='porkcabagge-pic' />
        <img className='anime-food-pic' src={picture7} alt='salmonpoke-pic' />
      </div>
    </div>
  )
}

export default HomePics;
