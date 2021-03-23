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
        </Switch>
      </div>
    </Router>
  )
};

export default Articles;
