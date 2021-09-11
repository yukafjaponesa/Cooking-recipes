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
import Crepe from '../articlelist/20210528friCrepe/Crepe';
import HakataRamen from '../articlelist/20210529satHakataRamen/HakataRamen';
import Sushi from '../articlelist/20210529satSushi/Sushi';
import EgginTomato from '../articlelist/20210531monEgginTomato/EgginTomato';
import SweetSour from '../articlelist/20210531monSweetSour/SweetSour';
import GyozaAndSoup from '../articlelist/20210602wedGyozaAndSoup/GyozaAndSoup';
import NagahamaRamen from '../articlelist/20210604friNagahamaRamen/NagahamaRamen';
import KoreanChickenRiceBowl from '../articlelist/20210615tueKoreanChickenRiceBowl/KoreanChickenRiceBowl';
import Bolognese from '../articlelist/20210618friBolognese/Bolognese';
import HayashiRice from '../articlelist/20210619satHayashiRice/HayashiRice';
import TeriyakiChicken from '../articlelist/20210620sunTeriyakiChicken/TeriyakiChicken';
import BeefStew from '../articlelist/20210621monBeefStew/BeefStew';
import BaconCheeseRoll from '../articlelist/20210622tueBaconCheeseRoll/BaconCheeseRoll';
import YodareDori from '../articlelist/20210630wedYodareDori/YodareDori';
import BLTSandwich from '../articlelist/20210705monBLTSandwich/BLTSandwich';
import EnglishBreakfast from '../articlelist/20210706tueEnglishBreakfast/EnglishBreakfast';
import BeefKimchiBurger from '../articlelist/20210707wedBeefKimchiBurger/BeefKimchiBurger';
import TomatoPasta from '../articlelist/20210714wedTomatoPasta/TomatoPasta';
import Döner from '../articlelist/20210729thuDöner/Döner';
import MeatDoria from '../articlelist/20210730friMeatDoria/MeatDoria';
import BreakySandwich from '../articlelist/20210731satBreakySandwich/BreakySandwich';
import MincedMeatSteak from '../articlelist/20210731satMincedMeatSteak/MincedMeatSteak';
import ChickenTikka from '../articlelist/20210810tueChickenTikka/ChickenTikka';
import RadishSaladYakiniku from '../articlelist/20210909thuRadishSaladYakinuku/RadishSaladYakiniku';
import Syoyuramen from '../articlelist/20210910friSyoyuramen/Syoyuramen';
import Okonomiyaki from '../articlelist/20210911satOkonomiyaki/Okonomiyaki';

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
          <Route path='/crepe'>
            <Crepe />
          </Route>
          <Route path='/hakataramen'>
            <HakataRamen />
          </Route>
          <Route path='/sushi'>
            <Sushi />
          </Route>
          <Route path='/eggintomato'>
            <EgginTomato />
          </Route>
          <Route path='/sweetsour'>
            <SweetSour />
          </Route>
          <Route path='/gyozaandsoup'>
            <GyozaAndSoup />
          </Route>
          <Route path='/nagahamaramen'>
            <NagahamaRamen />
          </Route>
          <Route path='/koreanchickenricebowl'>
            <KoreanChickenRiceBowl />
          </Route>
          <Route path='/bolognese'>
            <Bolognese />
          </Route>
          <Route path='/hayashirice'>
            <HayashiRice />
          </Route>
          <Route path='/teriyakichicken'>
            <TeriyakiChicken />
          </Route>
          <Route path='/beefstew'>
            <BeefStew />
          </Route>
          <Route path='/baconcheeseroll'>
            <BaconCheeseRoll />
          </Route>
          <Route path='/yodaredori'>
            <YodareDori />
          </Route>
          <Route path='/bltsandwich'>
            <BLTSandwich />
          </Route>
          <Route path='/englishbreakfast'>
            <EnglishBreakfast />
          </Route>
          <Route path='/tomatopasta'>
            <TomatoPasta />
          </Route>
          <Route path='/beefkimchiburger'>
            <BeefKimchiBurger />
          </Route>
          <Route path='/döner'>
            <Döner />
          </Route>
          <Route path='/döner'>
            <Döner />
          </Route>
          <Route path='/meatdoria'>
            <MeatDoria />
          </Route>
          <Route path='/breakysandwich'>
            <BreakySandwich />
          </Route>
          <Route path='/mincedmeatsteak'>
            <MincedMeatSteak />
          </Route>
          <Route path='/chickentikka'>
            <ChickenTikka />
          </Route>
          <Route path='/radishsaladyakiniku'>
            <RadishSaladYakiniku />
          </Route>
          <Route path='/syoyuramen'>
            <Syoyuramen />
          </Route>
          <Route path='/okonomiyaki'>
            <Okonomiyaki />
          </Route>
        </Switch>
      </div>
    </Router>

  )
};

export default Articles;
