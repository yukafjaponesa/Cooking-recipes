import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Croquet from '../articlelist/20210316tueCroquet/Croquet';
import Gyoza from '../articlelist/20210312friGyoza/Gyoza';
import Bangbangji from '../articlelist/20210227satBangbangji/Bangbangji';
import Youlinji from '../articlelist/20210223tueYoulinji/Youlinji';
import PorkCabagge from '../articlelist/20210320satPorkCabagge/PorkCabagge';
import SalmonPoke from '../articlelist/20210323tueSalmonPoke/SalmonPoke';
import EasterLunch from '../articlelist/20210404sunEasterLunch/EasterLunch';
import TacoRice from '../articlelist/20210408thuTacoRice/TacoRice';
import KatsuDon from '../articlelist/20210411sunKatsuDon/KatsuDon';

function Articles() {
  return (
    <Router>
      <div>
        <ul className='articles-list'>
          <Link to='/youlinji'>
            <li>23.02.2021 - You lin ji 油淋鶏</li>
          </Link>
          <Link to='/bangbangji'>
            <li>27.02.2021 - Bang bang ji 棒棒鶏</li>
          </Link>
          <Link to='/gyoza'>
            <li>12.03.2021 - Gyoza 餃子</li>
          </Link>
          <Link to='/croquet'>
            <li>16.03.2021 - Croquet　コロッケ</li>
          </Link>
          <Link to='/porkcabagge'>
            <li>20.03.2021 - Pork Cabagge Rice Bowl 豚キャベツ丼</li>
          </Link>
          <Link to='/salmonpoke'>
            <li>23.03.2021 - Hawaiian Poke Bowl Salmon ポケ丼</li>
          </Link>
          <Link to='/easterlunch'>
            <li>04.04.2021 - Easter Lunch Rabbit Potato Salad イースターポテサラ</li>
          </Link>
          <Link to='/tacorice'>
            <li>04.08.2021 - Taco Rice タコライス</li>
          </Link>
          <Link to='/katsudon'>
            <li>04.11.2021 - Katsu-Don 卵とじかつ丼</li>
          </Link>
        </ul>

        <Switch>
          <Route path='/youlinji'>
            <Youlinji />
          </Route>
          <Route path='/bangbangji'>
            <Bangbangji />
          </Route>
          <Route path='/gyoza'>
            <Gyoza />
          </Route>
          <Route path='/croquet'>
            <Croquet />
          </Route>
          <Route path='/porkcabagge'>
            <PorkCabagge />
          </Route>
          <Route path='/salmonpoke'>
            <SalmonPoke />
          </Route>
          <Route path='/easterlunch'>
            <EasterLunch />
          </Route>
          <Route path='/tacorice'>
            <TacoRice />
          </Route>
          <Route path='/katsudon'>
            <KatsuDon />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default Articles;
