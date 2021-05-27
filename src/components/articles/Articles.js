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
import Soba from '../articlelist/20210414wedSoba/Soba';
import Bibimpap from '../articlelist/20210418sunBibimpap/Bibimpap';
import CabbageRoll from '../articlelist/20210425sunCabbageRoll/CabbageRoll';
import CheeseDakGalbi from '../articlelist/20210426monCheeseDakGalbi/CheeseDakGalbi';
import GreenCurry from '../articlelist/20210429thuGreenCurry/GreenCurry';
import Bratkartoffeln from '../articlelist/20210510monBratkartoffeln/Bratkartoffeln';
import MediterraneanDish from '../articlelist/20210512wedMediterraneanDish/MediterraneanDish';
import ThaiHolyBasil from '../articlelist/20210514friThaiHolyBasil/ThaiHolyBasil';
import ThreeColorRiceBowl from '../articlelist/20210516sunThreeColorRiceBowl/ThreeColorRiceBowl';
import YogurtKeemaCurry from '../articlelist/20210517monYogurtKeemaCurry/YogurtKeemaCurry';
import JapaneseBreaky from '../articlelist/20210519wedJapaneseBreaky/JapaneseBreaky';
import RiceballAndEggroll from '../articlelist/20210521friRiceballAndEggroll/RiceballAndEggroll';
import Ramen from '../articlelist/20210521friRamen/Ramen';
import SpicyCrispyChicken from '../articlelist/20210527thuSpicyCrispyChicken/SpicyCrispyChicken';


const Articles = ({dishes}) => {
  return (
    <Router>
      <div>
        <ul className='articles-list'>
        {dishes.map(dish => {
          return(
            <div key={dish.title}>
                 <Link to={'/'+dish.title}>
                   <li>{dish.date} - {dish.description}</li>
                 </Link>
             </div>
            )
          })}
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
          <Route path='/soba'>
            <Soba />
          </Route>
          <Route path='/bibimpap'>
            <Bibimpap />
          </Route>
          <Route path='/cabbageroll'>
            <CabbageRoll />
          </Route>
          <Route path='/cheesedakgalbi'>
            <CheeseDakGalbi />
          </Route>
          <Route path='/greencurry'>
            <GreenCurry />
          </Route>
          <Route path='/bratkartoffeln'>
            <Bratkartoffeln />
          </Route>
          <Route path='/mediterraneandish'>
            <MediterraneanDish />
          </Route>
          <Route path='/thaiholybasil'>
            <ThaiHolyBasil />
          </Route>
          <Route path='/threecolorricebowl'>
            <ThreeColorRiceBowl />
          </Route>
          <Route path='/yogurtkeemacurry'>
            <YogurtKeemaCurry />
          </Route>
          <Route path='/japanesebreaky'>
            <JapaneseBreaky />
          </Route>
          <Route path='/riceballandeggroll'>
            <RiceballAndEggroll />
          </Route>
          <Route path='/ramen'>
            <Ramen />
          </Route>
          <Route path='/spicycrispychicken'>
            <SpicyCrispyChicken />
          </Route>
        </Switch>
      </div>
    </Router>

  )
};

export default Articles;
