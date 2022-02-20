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
import RadishSaladGarlic from '../articlelist/20210908wedRadishSaladwithGarlic/RadishSaladwithGarlic';
import RadishSaladYakiniku from '../articlelist/20210909thuRadishSaladYakinuku/RadishSaladYakiniku';
import Syoyuramen from '../articlelist/20210910friSyoyuramen/Syoyuramen';
import Okonomiyaki from '../articlelist/20210911satOkonomiyaki/Okonomiyaki';
import RollCabagge from '../articlelist/20210913monRollCabagge/RollCabagge';
import Breaky from '../articlelist/20210914tueBreaky/Breaky';
import Yakisoba from '../articlelist/20210915wedYakisoba/Yakisoba';
import PotatoSalad from '../articlelist/20210915wedPotatoSalad/PotatoSalad';
import TunaCabaggeMayoSalad from '../articlelist/20210916thuTunaCabaggeMayoSalad/TunaCabaggeMayoSalad';
import ChickenKatsu from '../articlelist/20210917friChickenKatsu/ChickenKatsu';
import CabbageGomaDareSalad from '../articlelist/20210918satCabbageGomaDareSalad/CabbageGomaDareSalad';
import PoacedEggBreaky from '../articlelist/20210919sunPoacedEggBreaky/PoacedEggBreaky';
import TunaCucumberSalad from '../articlelist/20210919sunTunaCucumberSalad/TunaCucumberSalad';
import ChickenEggplantSweetSour from '../articlelist/20210920monChickenEggplantSweetSour/ChickenEggplantSweetSour';
import Caprese from '../articlelist/20210921tueCaprese/Caprese';
import ChickenLemon from '../articlelist/20210921tueChickenLemon/ChickenLemon';
import ChickenMizoregake from '../articlelist/20210923thuChickenMizoregake/ChickenMizoregake';
import TomatoPastaPaste from '../articlelist/20210927monTomatoPastaPaste/TomatoPastaPaste';
import Quiche from '../articlelist/20210928tueQuiche/Quiche';
import ChickenEggplantStirFry from '../articlelist/20211003sunChickenEggplantStirFry/ChickenEggplantStirFry';
import ChineseCabaggeCarrotSalad from '../articlelist/20211004monChineseCabaggeCarrotSalad/ChineseCabaggeCarrotSalad';
import Sutadon from '../articlelist/20211023satSutaDon/SutaDon';
import BakedPumpkinCheeseCake from '../articlelist/20211025monBakedPumpkinCheeseCake/BakedPumpkinCheeseCake';
import PumpkinGratan from '../articlelist/20211028thuPumpkinGratan/PumpkinGratan';
import SweetPotatoCakeWithoutEgg from '../articlelist/20211030satSweetPotatoCakeWithoutEgg/SweetPotatoCakeWithoutEgg';
import SigaporeChickenRice from '../articlelist/20211031sunSigaporeChickenRice/SigaporeChickenRice';
import SweetPotatoCake from '../articlelist/20211101monSweetPotatoCake/SweetPotatoCake';
import CarrotCake from '../articlelist/20211109CarrotCake/CarrotCake';
import BauernTopf from '../articlelist/20211109BauernTopf/BauernTopf';
import BasilandRucolaPesto from '../articlelist/20211110wedBasilandRucolaPesto/BasilandRucolaPesto';
import CurryRice from '../articlelist/20211111thuCurryRice/CurryRice';
import CurryUdon from '../articlelist/20211112friCurryUdon/CurryUdon';
import RicottaandNuts from '../articlelist/20211112friRicottaandNuts/RicottaandNuts';
import ChocoBananaChiffonCake from '../articlelist/20211115monChocoBananaChiffonCake/ChocoBananaChiffonCake';
import LocoMoco from '../articlelist/20211116tueLocoMoco/LocoMoco';
import Tiramisu from '../articlelist/20211120satTiramisu/Tiramisu';
import SweetpotatoPoundCake from '../articlelist/20211122monSweetpotatoPoundCake/SweetpotatoPoundCake';
import KurumeHotomekiRamen from '../articlelist/20211125thuKurumeHotomekiRamen/KurumeHotomekiRamen';
import TakikomiRice from '../articlelist/20211126friTakikomiRice/TakikomiRice';
import MiracoliClassic from '../articlelist/20211126friMiracoliClassic/MiracoliClassic';
import NonBakedPumpkinCake from '../articlelist/20211126friNonBakedPumpkinCake/NonBakedPumpkinCake';
import ChickenCucumberSalad from '../articlelist/20211127satChickenCucumberSalad/ChickenCucumberSalad';
import PumpkinSoup from '../articlelist/20211129monPumpkinSoup/PumpkinSoup';
import SweetpotatoButterCake from '../articlelist/20211202thuSweetpotatoButterCake/SweetpotatoButterCake';
import KumamotoMokkosuRamen from '../articlelist/20211204friKumamotoMokkosuRamen/KumamotoMokkosuRamen';
import SmokedSalmonSushiCake from '../articlelist/20211206monSmokedSalmonSushiCake/SmokedSalmonSushiCake';
import SweetpotatoCheeseCake from '../articlelist/20211207tueSweetpotatoCheeseCake/SweetpotatoCheeseCake';
import ChickenEggplantNegiChiliOil from '../articlelist/20211210friChickenEggplantNegiChiliOil/ChickenEggplantNegiChiliOil';
import ChickenNamban from '../articlelist/20211211satChickenNamban/ChickenNamban';
import CheeseCakeTartNoOven from '../articlelist/20211211satCheeseCakeTartNoOven/CheeseCakeTartNoOven';
import CreamySpicyCurryandChickenAvoNamru from '../articlelist/20211214tueCreamySpicyCurryandChickenAvoNamru/CreamySpicyCurryandChickenAvoNamru';
import SweetPotatoCakeWithMicrowave from '../articlelist/20211214tueSweetPotatoCake/SweetPotatoCakeWithMicrowave';
import SelfMisoRamen from '../articlelist/20211215wedSelfMisoRamen/SelfMisoRamen';
import TeaMuffin from '../articlelist/20211215wedTeaMuffin/TeaMuffin';
import OvenFish from '../articlelist/20211216thuOvenFish/OvenFish';
import CheeseCakeLemonTart from '../articlelist/20211217friCheeseCakeLemonTart/CheeseCakeLemonTart';
import StuffedEggplantAndBellPepper from '../articlelist/20211217friStuffedEggplantAndBellPepper/StuffedEggplantAndBellPepper';
import MiracoliHerbs from '../articlelist/20211218satMiracoliHerbs/MiracoliHerbs';
import FriedNoodles from '../articlelist/20211219sunGebratenenudeln/Gebratenenudeln';
import SweetpotatoMochiBalls from '../articlelist/20211220monSweetpotatoMochiBalls/SweetpotatoMochiBalls';
import ChristmasWreath from '../articlelist/20211224friChristmasWreath/ChristmasWreath';
import ChristmasLunch from '../articlelist/20211224friChristmasLunchTunaEggSalad/ChristmasLunchTunaEggSalad';
import ChristmasDinner from '../articlelist/20211224friChristmasDinner/ChristmasDinner';
import ChristmasTreeCake from '../articlelist/20211225satChristmasTreeCake/ChristmasTreeCake';
import MiniTomatoSanta from '../articlelist/20211225satMiniTomatoSanta/MiniTomatoSanta';
import Jambalaya from '../articlelist/20211226sunJambalaya/Jambalaya';
import KumamotoAkakaraRamen from '../articlelist/20211227monKumamotoAkakaraRamen/KumamotoAkakaraRamen';
import AppleTeaCake from '../articlelist/20211229wedAppleTeaCake/AppleTeaCake';
import CornFlakesCrispyChickenAndGazpacho from '../articlelist/20211230thuCornFlakesCrispyChickenAndGazpacho/CornFlakesCrispyChickenAndGazpacho';
import CornFlakesCroquet from '../articlelist/20220102sunCornFlakesCroquet/CornFlakesCroquet';
import Falafel from '../articlelist/20220103monFalafel/Falafel';
import MatchaGâteauAuChocolat from '../articlelist/20220103monMatchaGâteauAuChocolat/MatchaGâteauAuChocolat';
import YogurtCakeAvoSmoothie from '../articlelist/20220104tueYogurtCakeAvoSmoothie/YogurtCakeAvoSmoothie';
import ThaiCurryMaggi from '../articlelist/20220104tueThaiCurryMaggi/ThaiCurryMaggi';
import CrispySweetPotato from '../articlelist/20220106thuCrispySweetPotato/CrispySweetPotato';
import TomatoPotageSoup from '../articlelist/20220106thuTomatoPotageSoup/TomatoPotageSoup';
import EggplantMeatSauce from '../articlelist/20220107friEggplantMeatSauce/EggplantMeatSauce';
import BasqueCheeseCake from '../articlelist/20220107friBasqueCheeseCake/BasqueCheeseCake';
import NoodleSalad from '../articlelist/20220107friNoodleSalad/NoodleSalad';
import DryCurry from '../articlelist/20220108satDryCurry/DryCurry';
import AdditiveFreePonzu from '../articlelist/20220108satAdditiveFreePonzu/AdditiveFreePonzu';
import SpicySimmeredEggplant from '../articlelist/20220108satSpicySimmeredEggplant/SpicySimmeredEggplant';
import BistecDePolloAndCarrotPotage from '../articlelist/20220109sunBistecDePolloAndCarrotPotage/BistecDePolloAndCarrotPotage';
import SpicySweetChiken from '../articlelist/20220109sunSpicySweetChiken/SpicySweetChiken';
import OrangeBavarois from '../articlelist/20220109sunOrangeBavarois/OrangeBavarois';
import OrangeLemonadeAndMangoGingerSmoothie from '../articlelist/20220109sunOrangeLemonadeAndMangoGingerSmoothie/OrangeLemonadeAndMangoGingerSmoothie';
import KumamonRamen from '../articlelist/20220110monKumamonRamen/KumamonRamen';
import OvenChickenMaggi from '../articlelist/20220110monOvenChickenMaggi/OvenChickenMaggi';
import NonFriedDaigakuImo from '../articlelist/20220113thuNonFriedDaigakuImo/NonFriedDaigakuImo';
import KinakoCookie from '../articlelist/20220113thuKinakoCookie/KinakoCookie';
import TandooriChicken from '../articlelist/20220114friTandooriChicken/TandooriChicken';
import EasyMadeleine from '../articlelist/20220115satEasyMadeleine/EasyMadeleine';
import ChickenEggplantTomatoSauce from '../articlelist/20220115satChickenEggplantTomatoSauce/ChickenEggplantTomatoSauce';
import DandanSoup from '../articlelist/20220116sunDandanSoup/DandanSoup';
import KiwiSmoothieAndKiwiJelly from '../articlelist/20220117monKiwiSmoothieAndKiwiJelly/KiwiSmoothieAndKiwiJelly';
import CheeseRavioli from '../articlelist/20220117monCheeseRavioli/CheeseRavioli';
import BananCakeWithoutButter from '../articlelist/20220119wedBananCakeWithoutButter/BananCakeWithoutButter';
import TofuWithStarchySauce from '../articlelist/20220119wedMincedMeatSproutTofuWithStarchySauce/MincedMeatSproutTofuWithStarchySauce';
import MincedBeefFriedRice from '../articlelist/20220120thuMincedBeefFriedRice/MincedBeefFriedRice';
import MayoPepperRice from '../articlelist/20220121friMayoPepperRice/MayoPepperRice';
import MeltingCheeseCake from '../articlelist/20220122satMeltingCheeseCake/MeltingCheeseCake';
import SpicySoupverGyoza from '../articlelist/20220122satSpicySoupverGyoza/SpicySoupverGyoza';
import KoreanStewWithTofu from '../articlelist/20220123sunKoreanStewWithTofu/KoreanStewWithTofu';
import HotAndSourSoupWithTofu from '../articlelist/20220124monHotAndSourSoupWithTofu/HotAndSourSoupWithTofu';
import DandanSoupWithTofu from '../articlelist/20220125tueDandanSoupWithTofu/DandanSoupWithTofu';
import SpicyChickenRiceBowl from '../articlelist/20220126wedSpicyChickenRiceBowl/SpicyChickenRiceBowl';
import Gnocchi from '../articlelist/20220127thuGnocchi/Gnocchi';
import HoneyLemonCheesecream from '../articlelist/20220127thuHoneyLemonCheesecream/HoneyLemonCheesecream';
import EggplantBaconTomatoCreamCurry from '../articlelist/20220128friEggplantBaconTomatoCreamCurry/EggplantBaconTomatoCreamCurry';
import SweetpotatoMontBlanc from '../articlelist/20220128friSweetpotatoMontBlanc/SweetpotatoMontBlanc';
import SpinachiTortelloni from '../articlelist/20220129satSpinachiTortelloni/SpinachiTortelloni';
import ChiaseedPudding from '../articlelist/20220130sunChiaseedPudding/ChiaseedPudding';
import CousCousTomatoSauceAndSalad from '../articlelist/20220131monCousCousTomatoSauceAndSalad/CousCousTomatoSauceAndSalad';
import SnowBall from '../articlelist/20220131monSnowBall/SnowBall';
import CoconutsMilkCurry from '../articlelist/20220201tueCoconutsMilkCurry/CoconutsMilkCurry';
import MarblePatternCheeseCake from '../articlelist/20220201tueMarblePatternCheeseCake/MarblePatternCheeseCake';
import BruleeDomeIceCream from '../articlelist/20220207monBruleeDomeIceCream/BruleeDomeIceCream';
import EasyMatchaCookie from '../articlelist/20220208tueEasyMatchaCookie/EasyMatchaCookie';
import WhiteChocoMarshmallowCookie from '../articlelist/20220209wedWhiteChocoMarshmallowCookie/WhiteChocoMarshmallowCookie';
import MatchaTiramisuIceCake from '../articlelist/20220214monMatchaTiramisuIceCake/MatchaTiramisuIceCake';
import WokNoodle from '../articlelist/20220214monWokNoodle/WokNoodle';
import MarshmallowMousse from '../articlelist/20220215tueMarshmallowMousse/MarshmallowMousse';
import NoodleWithSalmon from '../articlelist/20220215tueNoodleWithSalmon/NoodleWithSalmon';
import Bananacake3Ingredients from '../articlelist/20220216wedBananacake3Ingredients/Bananacake3Ingredients';
import PannaCotta from '../articlelist/20220217thuPannaCotta/PannaCotta';
import KimchiCheeseFriedRice from '../articlelist/20220218friKimchiCheeseFriedRice/KimchiCheeseFriedRice';
import SaltyButterSweetPotato from '../articlelist/20220218friSaltyButterSweetPotato/SaltyButterSweetPotato';

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
          <Route path='/radishsaladgarlic'>
            <RadishSaladGarlic />
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
          <Route path='/rollcabagge'>
            <RollCabagge />
          </Route>
          <Route path='/breaky'>
            <Breaky />
          </Route>
          <Route path='/yakisoba'>
            <Yakisoba />
          </Route>
          <Route path='/potatosalad'>
            <PotatoSalad />
          </Route>
          <Route path='/tunacabaggemayosalad'>
            <TunaCabaggeMayoSalad />
          </Route>
          <Route path='/chickenkatsu'>
            <ChickenKatsu />
          </Route>
          <Route path='/cabbagegomadaresalad'>
            <CabbageGomaDareSalad />
          </Route>
          <Route path='/poacedeggbreaky'>
            <PoacedEggBreaky />
          </Route>
          <Route path='/tunacucumbersalad'>
            <TunaCucumberSalad />
          </Route>
          <Route path='/chickeneggplantsweetsour'>
            <ChickenEggplantSweetSour />
          </Route>
          <Route path='/caprese'>
            <Caprese />
          </Route>
          <Route path='/chickenlemon'>
            <ChickenLemon />
          </Route>
          <Route path='/chickenmizoregake'>
            <ChickenMizoregake />
          </Route>
          <Route path='/tomatopastapaste'>
            <TomatoPastaPaste />
          </Route>
          <Route path='/quiche'>
            <Quiche />
          </Route>
          <Route path='/chickeneggplantstirfry'>
            <ChickenEggplantStirFry />
          </Route>
          <Route path='/chinesecabaggecarrotsalad'>
            <ChineseCabaggeCarrotSalad />
          </Route>
          <Route path='/sutadon'>
            <Sutadon />
          </Route>
          <Route path='/bakedpumpkincheesecake'>
            <BakedPumpkinCheeseCake />
          </Route>
          <Route path='/pumpkingratan'>
            <PumpkinGratan />
          </Route>
          <Route path='/sweetpotatocakewithoutegg'>
            <SweetPotatoCakeWithoutEgg />
          </Route>
          <Route path='/sigaporechickenrice'>
            <SigaporeChickenRice />
          </Route>
          <Route path='/sweetpotatocake'>
            <SweetPotatoCake />
          </Route>
          <Route path='/carrotcake'>
            <CarrotCake />
          </Route>
          <Route path='/bauerntopf'>
            <BauernTopf />
          </Route>
          <Route path='/basilandrucolapesto'>
            <BasilandRucolaPesto />
          </Route>
          <Route path='/curryrice'>
            <CurryRice />
          </Route>
          <Route path='/curryudon'>
            <CurryUdon />
          </Route>
          <Route path='/ricottaandnuts'>
            <RicottaandNuts />
          </Route>
          <Route path='/chocobananachiffoncake'>
            <ChocoBananaChiffonCake />
          </Route>
          <Route path='/locomoco'>
            <LocoMoco />
          </Route>
          <Route path='/tiramisu'>
            <Tiramisu />
          </Route>
          <Route path='/sweetpotatopoundcake'>
            <SweetpotatoPoundCake />
          </Route>
          <Route path='/kurumehotomekiramen'>
            <KurumeHotomekiRamen />
          </Route>
          <Route path='/takikomirice'>
            <TakikomiRice />
          </Route>
          <Route path='/miracoliclassic'>
            <MiracoliClassic />
          </Route>
          <Route path='/nonbakedpumpkincake'>
            <NonBakedPumpkinCake />
          </Route>
          <Route path='/chickencucumbersalad'>
            <ChickenCucumberSalad />
          </Route>
          <Route path='/pumpkinsoup'>
            <PumpkinSoup />
          </Route>
          <Route path='/sweetpotatobuttercake'>
            <SweetpotatoButterCake />
          </Route>
          <Route path='/kumamotomokkosuramen'>
            <KumamotoMokkosuRamen />
          </Route>
          <Route path='/smokedsalmonsushicake'>
            <SmokedSalmonSushiCake />
          </Route>
          <Route path='/sweetpotatocheesecake'>
            <SweetpotatoCheeseCake />
          </Route>
          <Route path='/chickeneggplantnegichiliOil'>
            <ChickenEggplantNegiChiliOil />
          </Route>
          <Route path='/chickennamban'>
            <ChickenNamban />
          </Route>
          <Route path='/cheesecaketartnooven'>
            <CheeseCakeTartNoOven />
          </Route>
          <Route path='/creamyspicycurryandchickenavonamru'>
            <CreamySpicyCurryandChickenAvoNamru />
          </Route>
          <Route path='/sweetpotatocakeWithmicrowave'>
            <SweetPotatoCakeWithMicrowave />
          </Route>
          <Route path='/selfmisoramen'>
            <SelfMisoRamen />
          </Route>
          <Route path='/teamuffin'>
            <TeaMuffin />
          </Route>
          <Route path='/ovenfish'>
            <OvenFish />
          </Route>
          <Route path='/cheesecakelemontart'>
            <CheeseCakeLemonTart />
          </Route>
          <Route path='/stuffedeggplantandbellpepper'>
            <StuffedEggplantAndBellPepper />
          </Route>
          <Route path='/miracoliherbs'>
            <MiracoliHerbs />
          </Route>
          <Route path='/friednoodles'>
            <FriedNoodles />
          </Route>
          <Route path='/sweetpotatomochiballs'>
            <SweetpotatoMochiBalls />
          </Route>
          <Route path='/christmaswreath'>
            <ChristmasWreath />
          </Route>
          <Route path='/christmaslunch'>
            <ChristmasLunch />
          </Route>
          <Route path='/christmasdinner'>
            <ChristmasDinner />
          </Route>
          <Route path='/christmastreecake'>
            <ChristmasTreeCake />
          </Route>
          <Route path='/minitomatosanta'>
            <MiniTomatoSanta />
          </Route>
          <Route path='/jambalaya'>
            <Jambalaya />
          </Route>
          <Route path='/kumamotoakakararamen'>
            <KumamotoAkakaraRamen />
          </Route>
          <Route path='/appleteacake'>
            <AppleTeaCake />
          </Route>
          <Route path='/cornflakescrispychickenandgazpacho'>
            <CornFlakesCrispyChickenAndGazpacho />
          </Route>
          <Route path='/cornflakescroquet'>
            <CornFlakesCroquet />
          </Route>
          <Route path='/falafel'>
            <Falafel />
          </Route>
          <Route path='/matchagâteauauchocolat'>
            <MatchaGâteauAuChocolat />
          </Route>
          <Route path='/yogurtcakeavosmoothie'>
            <YogurtCakeAvoSmoothie />
          </Route>
          <Route path='/thaicurrymaggi'>
            <ThaiCurryMaggi />
          </Route>
          <Route path='/crispysweetpotato'>
            <CrispySweetPotato />
          </Route>
          <Route path='/tomatopotagesoup'>
            <TomatoPotageSoup />
          </Route>
          <Route path='/eggplantmeatsauce'>
            <EggplantMeatSauce />
          </Route>
          <Route path='/basquecheesecake'>
            <BasqueCheeseCake />
          </Route>
          <Route path='/noodlesalad'>
            <NoodleSalad />
          </Route>
          <Route path='/drycurry'>
            <DryCurry />
          </Route>
          <Route path='/additivefreeponzu'>
            <AdditiveFreePonzu />
          </Route>
          <Route path='/spicysimmeredeggplant'>
            <SpicySimmeredEggplant />
          </Route>
          <Route path='/bistecdepolloandcarrotpotage'>
            <BistecDePolloAndCarrotPotage />
          </Route>
          <Route path='/spicysweetchiken'>
            <SpicySweetChiken />
          </Route>
          <Route path='/orangebavarois'>
            <OrangeBavarois />
          </Route>
          <Route path='/orangelemonadeandmangogingersmoothie'>
            <OrangeLemonadeAndMangoGingerSmoothie />
          </Route>
          <Route path='/kumamonramen'>
            <KumamonRamen />
          </Route>
          <Route path='/ovenchickenmaggi'>
            <OvenChickenMaggi />
          </Route>
          <Route path='/nonfrieddaigakuimo'>
            <NonFriedDaigakuImo />
          </Route>
          <Route path='/kinakocookie'>
            <KinakoCookie />
          </Route>
          <Route path='/tandoorichicken'>
            <TandooriChicken />
          </Route>
          <Route path='/easymadeleine'>
            <EasyMadeleine />
          </Route>
          <Route path='/chickeneggplanttomatosauce'>
            <ChickenEggplantTomatoSauce />
          </Route>
          <Route path='/dandansoup'>
            <DandanSoup />
          </Route>
          <Route path='/kiwismoothieandkiwijelly'>
            <KiwiSmoothieAndKiwiJelly />
          </Route>
          <Route path='/cheeseravioli'>
            <CheeseRavioli />
          </Route>
          <Route path='/banancakewithoutbutter'>
            <BananCakeWithoutButter />
          </Route>
          <Route path='/tofuwithstarchysauce'>
            <TofuWithStarchySauce />
          </Route>
          <Route path='/mincedbeeffriedrice'>
            <MincedBeefFriedRice />
          </Route>
          <Route path='/mayopepperrice'>
            <MayoPepperRice />
          </Route>
          <Route path='/meltingcheesecake'>
            <MeltingCheeseCake />
          </Route>
          <Route path='/spicysoupvergyoza'>
            <SpicySoupverGyoza />
          </Route>
          <Route path='/koreanstewwithtofu'>
            <KoreanStewWithTofu />
          </Route>
          <Route path='/hotandsoursoupwithtofu'>
            <HotAndSourSoupWithTofu />
          </Route>
          <Route path='/dandansoupwithtofu'>
            <DandanSoupWithTofu />
          </Route>
          <Route path='/spicychickenricebowl'>
            <SpicyChickenRiceBowl />
          </Route>
          <Route path='/gnocchi'>
            <Gnocchi />
          </Route>
          <Route path='/honeylemoncheesecream'>
            <HoneyLemonCheesecream />
          </Route>
          <Route path='/eggplantbacontomatocreamcurry'>
            <EggplantBaconTomatoCreamCurry />
          </Route>
          <Route path='/sweetpotatomontblanc'>
            <SweetpotatoMontBlanc />
          </Route>
          <Route path='/spinachitortelloni'>
            <SpinachiTortelloni />
          </Route>
          <Route path='/chiaseedpudding'>
            <ChiaseedPudding />
          </Route>
          <Route path='/couscoustomatosauceandsalad'>
            <CousCousTomatoSauceAndSalad />
          </Route>
          <Route path='/snowball'>
            <SnowBall />
          </Route>
          <Route path='/coconutsmilkcurry'>
            <CoconutsMilkCurry />
          </Route>
          <Route path='/marblepatterncheesecake'>
            <MarblePatternCheeseCake />
          </Route>
          <Route path='/bruleedomeicecream'>
            <BruleeDomeIceCream />
          </Route>
          <Route path='/easymatchacookie'>
            <EasyMatchaCookie />
          </Route>
          <Route path='/whitechocomarshmallowcookie'>
            <WhiteChocoMarshmallowCookie />
          </Route>
          <Route path='/matchatiramisuicecake'>
            <MatchaTiramisuIceCake />
          </Route>
          <Route path='/woknoodle'>
            <WokNoodle />
          </Route>
          <Route path='/marshmallowmousse'>
            <MarshmallowMousse />
          </Route>
          <Route path='/noodlewithsalmon'>
            <NoodleWithSalmon />
          </Route>
          <Route path='/bananacake3ingredients'>
            <Bananacake3Ingredients />
          </Route>
          <Route path='/pannacotta'>
            <PannaCotta />
          </Route>
          <Route path='/kimchicheesefriedrice'>
            <KimchiCheeseFriedRice />
          </Route>
          <Route path='/saltybuttersweetpotato'>
            <SaltyButterSweetPotato />
          </Route>
        </Switch>
      </div>
    </Router>

  )
};

export default Articles;
