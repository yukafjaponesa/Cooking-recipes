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
import OreoCheeseCake from '../articlelist/20220220sunOreoCheeseCake/OreoCheeseCake';
import AlmondMilkSeafoodCurry from '../articlelist/20220221monAlmondMilkSeafoodCurry/AlmondMilkSeafoodCurry';
import CheeseCake3Ingredients from '../articlelist/20220221monCheeseCake3Ingredients/CheeseCake3Ingredients';
import GarlicVegPasta from '../articlelist/20220222tueGarlicVegPasta/GarlicVegPasta';
import NonBakedMarbleCheeseCake from '../articlelist/20220223wedNonBakedMarbleCheeseCake/NonBakedMarbleCheeseCake';
import SpaghettiBolognese from '../articlelist/20220223wedSpaghettiBolognese/SpaghettiBolognese';
import CheeseCakeTasteWithYogurt from '../articlelist/20220224thuCheeseCakeTasteWithYogurt/CheeseCakeTasteWithYogurt';
import StirFryVegAndSausageswithCurryCheese from '../articlelist/20220225friStirFryVegAndSausageswithCurryCheese/StirFryVegAndSausageswithCurryCheese';
import MatchaChocoTart from '../articlelist/20220226satMatchaChocoTart/MatchaChocoTart';
import OvenSalmonAndCabbageWithSpringonionSauce from '../articlelist/20220226satOvenSalmonAndCabbageWithSpringonionSauce/OvenSalmonAndCabbageWithSpringonionSauce';
import SweetSourMayoChicken from '../articlelist/20220227sunSweetSourMayoChicken/SweetSourMayoChicken';
import ChickenEggplantSweetChili from '../articlelist/20220228monChickenEggplantSweetChili/ChickenEggplantSweetChili';
import EggplantTunaArraBbiiata from '../articlelist/20220228monEggplantTunaArraBbiiata/EggplantTunaArraBbiiata';
import BakedCheesseCake from '../articlelist/20220301tueBakedCheesseCake/BakedCheesseCake';
import ChampignonsInRham from '../articlelist/20220302wedChampignonsInRham/ChampignonsInRham';
import CucumberSalads from '../articlelist/20220303thuCucumberSalads/CucumberSalads';
import Kassler from '../articlelist/20220303thuKassler/Kassler';
import BoiledLettuce from '../articlelist/20220304friBoiledLettuce/BoiledLettuce';
import SweetPotatoTart from '../articlelist/20220304friSweetPotatoTart/SweetPotatoTart';
import TofuCaprese from '../articlelist/20220305satTofuCaprese/TofuCaprese';
import Toscana from '../articlelist/20220305satToscana/Toscana';
import GarlicTomatoPastaAndChickenCabbageSalad from '../articlelist/20220306sunGarlicTomatoPastaAndChickenCabbageSalad/GarlicTomatoPastaAndChickenCabbageSalad';
import ButterChickenCurry from '../articlelist/20220307monButterChickenCurry/ButterChickenCurry';
import SweetPotatoMochi2tastes from '../articlelist/20220308tueSweetPotatoMochi2tastes/SweetPotatoMochi2tastes';
import SimpleKeemaCurry from '../articlelist/20220308tueSimpleKeemaCurry/SimpleKeemaCurry';
import Kimpa from '../articlelist/20220309wedKimpa/Kimpa';
import TunaSalads4kinds1 from '../articlelist/20220310thuTunaSalads4kinds1/TunaSalads4kinds1';
import TunaSalads4kinds2 from '../articlelist/20220310thuTunaSalads4kinds2/TunaSalads4kinds2';
import BroccoliGratin from '../articlelist/20220311friBroccoliGratin/BroccoliGratin';
import MeatAndMushroomGratin from '../articlelist/20220312satMeatAndMushroomGratin/MeatAndMushroomGratin';
import TunaSalad4kinds3 from '../articlelist/20220313sunTunaSalad4kinds3/TunaSalad4kinds3';
import ChickenBroccoliMacaroniGratin from '../articlelist/20220314monChickenBroccoliMacaroniGratin/ChickenBroccoliMacaroniGratin';
import CroqueMonsieur from '../articlelist/20220315tueCroqueMonsieur/CroqueMonsieur';
import BaconGingerToast from '../articlelist/20220316wedBaconGingerToast/BaconGingerToast';
import KoreanChilledNoodles from '../articlelist/20220316wedKoreanChilledNoodles/KoreanChilledNoodles';
import EggAvoToast from '../articlelist/20220317thuEggAvoToast/EggAvoToast';
import FriedPotatoesWithMayoSauce from '../articlelist/20220317thuFriedPotatoesWithMayoSauce/FriedPotatoesWithMayoSauce';
import SalmonSpinachPotatoGratin from '../articlelist/20220317thuSalmonSpinachPotatoGratin/SalmonSpinachPotatoGratin';
import BirthdayCake202203 from '../articlelist/20220318friBirthdayCake/BirthdayCake';
import BirthdayDinner202203 from '../articlelist/20220318friBirthdayDinner/BirthdayDinner';
import KoreanStyleMeltyCheeseFrenchToast from '../articlelist/20220319satKoreanStyleMeltyCheeseFrenchToast/KoreanStyleMeltyCheeseFrenchToast';
import SesameSoymilkSoumen from '../articlelist/20220319satSesameSoymilkSoumen/SesameSoymilkSoumen';
import BrillaToscana from '../articlelist/20220320sunBrillaToscana/BrillaToscana';
import MeltyFrenchToast from '../articlelist/20220320sunMeltyFrenchToast/MeltyFrenchToast';
import TaiwaneseMixedUdon from '../articlelist/20220320sunTaiwaneseMixedUdon/TaiwaneseMixedUdon';
import SalmonMeunièreLemonButterWithPommes2 from '../articlelist/20220321monSalmonMeunièreLemonButterWithPommes2/SalmonMeunièreLemonButterWithPommes2';
import ToastSausageRoll from '../articlelist/20220321monToastSausageRoll/ToastSausageRoll';
import YummySpicyBellowCucumber from '../articlelist/20220321monYummySpicyBellowCucumber/YummySpicyBellowCucumber';
import CucumberBaconRollWithMayo from '../articlelist/20220322tueCucumberBaconRollWithMayo/CucumberBaconRollWithMayo';
import MeatPastaWithWholeOnion from '../articlelist/20220322tueMeatPastaWithWholeOnion/MeatPastaWithWholeOnion';
import PizzaToast from '../articlelist/20220322tuePizzaToast/PizzaToast';
import CucumberShioKombuOkaka from '../articlelist/20220323wedCucumberShioKombuOkaka/CucumberShioKombuOkaka';
import HoneyCheese1biteFrenchToast from '../articlelist/20220323wedHoneyCheese1biteFrenchToast/HoneyCheese1biteFrenchToast';
import PorkMeatBallsAndLettuceSaltySoup from '../articlelist/20220323wedPorkMeatBallsAndLettuceSaltySoup/PorkMeatBallsAndLettuceSaltySoup';
import NattoCheeseSweetSourSauce from '../articlelist/20220324thuNattoCheeseSweetSourSauce/NattoCheeseSweetSourSauce';
import OnigiriWithSesameOilAndSalt from '../articlelist/20220324thuOnigiriWithSesameOilAndSalt/OnigiriWithSesameOilAndSalt';
import SpinachChickenCreamPasta from '../articlelist/20220324thuSpinachChickenCreamPasta/SpinachChickenCreamPasta';
import EggPorridge from '../articlelist/20220325friEggPorridge/EggPorridge';
import Florentins from '../articlelist/20220325friFlorentins/Florentins';
import SpaghettiGratin from '../articlelist/20220325friSpaghettiGratin/SpaghettiGratin';
import BaconEggCup from '../articlelist/20220326satBaconEggCup/BaconEggCup';
import OilSobaWithSpringOnion from '../articlelist/20220326satOilSobaWithSpringOnion/OilSobaWithSpringOnion';
import CheeseInOnigiriMeatRoll from '../articlelist/20220327sunCheeseInOnigiriMeatRoll/CheeseInOnigiriMeatRoll';
import GarlicButterSoysauceSalmonMeunière from '../articlelist/20220327sunGarlicButterSoysauceSalmonMeunière/GarlicButterSoysauceSalmonMeunière';
import GingerPorkRollOnigiri from '../articlelist/20220328monGingerPorkRollOnigiri/GingerPorkRollOnigiri';
import HotSourNoodle from '../articlelist/20220328monHotSourNoodle/HotSourNoodle';
import SaltySpringOnionRoll from '../articlelist/20220329tueSaltySpringOnionRoll/SaltySpringOnionRoll';
import TomatoTunaCapellini from '../articlelist/20220329tueTomatoTunaCapellini/TomatoTunaCapellini';
import AngryChicken from '../articlelist/20220330wedAngryChicken/AngryChicken';
import FoldCheeseKimpa from '../articlelist/20220330wedFoldCheeseKimpa/FoldCheeseKimpa';
import SweetPotatoPudding from '../articlelist/20220330wedSweetPotatoPudding/SweetPotatoPudding';
import DeepFriedEggplantAndChickenInBroth from '../articlelist/20220331thuDeepFriedEggplantAndChickenInBroth/DeepFriedEggplantAndChickenInBroth';
import SeaweedMochi from '../articlelist/20220331thuSeaweedMochi/SeaweedMochi';
import Baumkuchen from '../articlelist/20220401friBaumkuchen/Baumkuchen';
import ChickenSteakAndTomatoSeaweedNamuru from '../articlelist/20220401friChickenSteakAndTomatoSeaweedNamuru/ChickenSteakAndTomatoSeaweedNamuru';
import TunaPotatoGalette from '../articlelist/20220401friTunaPotatoGalette/TunaPotatoGalette';
import CheeseFrenchToast from '../articlelist/20220402satCheeseFrenchToast/CheeseFrenchToast';
import CoconutsChickenWithWokVegs from '../articlelist/20220402satCoconutsChickenWithWokVegs/CoconutsChickenWithWokVegs';
import KoreanRiceBowlOnsenEgg from '../articlelist/20220402satKoreanRiceBowlOnsenEgg/KoreanRiceBowlOnsenEgg';
import BananaBreadPudding from '../articlelist/20220403sunBananaBreadPudding/BananaBreadPudding';
import LemonRamenChickenBrothOnionPancakeKoreanChicken from '../articlelist/20220403sunLemonRamenChickenBrothOnionPancakeKoreanChicken/LemonRamenChickenBrothOnionPancakeKoreanChicken';
import BaconCheeseSteamedBun from '../articlelist/20220404monBaconCheeseSteamedBun/BaconCheeseSteamedBun';
import OilSobaSoumen from '../articlelist/20220404monOilSobaSoumen/OilSobaSoumen';
import SquareLemonCake from '../articlelist/20220404monSquareLemonCake/SquareLemonCake';
import CrispySpicyFriedChickenHerbFingerChickenYummyLettuceSaltySauce from '../articlelist/20220405tueCrispySpicyFriedChickenHerbFingerChickenYummyLettuceSaltySauce/CrispySpicyFriedChickenHerbFingerChickenYummyLettuceSaltySauce';
import MelonBread from '../articlelist/20220405tueMelonBread/MelonBread';
import SaltySoumenNoodle from '../articlelist/20220405tueSaltySoumenNoodle/SaltySoumenNoodle';
import CabbageSoup from '../articlelist/20220406wedCabbageSoup/CabbageSoup';
import MichelinStarPasta from '../articlelist/20220406wedMichelinStarPasta/MichelinStarPasta';
import PoundCakeWithToast from '../articlelist/20220406wedPoundCakeWithToast/PoundCakeWithToast';
import BellPepperGroundMeatNoodle from '../articlelist/20220407thuBellPepperGroundMeatNoodle/BellPepperGroundMeatNoodle';
import CheeseDogAndMushroomCreamSoup from '../articlelist/20220407thuCheeseDogAndMushroomCreamSoup/CheeseDogAndMushroomCreamSoup';
import SweetPotatoMontBlanc from '../articlelist/20220407thuSweetPotatoMontBlanc/SweetPotatoMontBlanc';
import BellPepperCupOmeletteRiceBaconPotatoRoll from '../articlelist/20220408friBellPepperCupOmeletteRiceBaconPotatoRoll/BellPepperCupOmeletteRiceBaconPotatoRoll';
import ChopSuey from '../articlelist/20220408friChopSuey/ChopSuey';
import MargheritaRoll from '../articlelist/20220408friMargheritaRoll/MargheritaRoll';
import CreamLentilSoup from '../articlelist/20220409satCreamLentilSoup/CreamLentilSoup';
import PorkShabushabuGratedRadishSoumen from '../articlelist/20220409satPorkShabushabuGratedRadishSoumen/PorkShabushabuGratedRadishSoumen';
import SmoaGateauChocolat from '../articlelist/20220409satSmoaGateauChocolat/SmoaGateauChocolat';
import KouignAmann from '../articlelist/20220410sunKouignAmann/KouignAmann';
import SouthGermanStyleStewedLentilsWithSpätzle from '../articlelist/20220410sunSouthGermanStyleStewedLentilsWithSpätzle/SouthGermanStyleStewedLentilsWithSpätzle';
import Crispy1BiteGyozaSeaweedSoupSoumenTonpeiyaki from '../articlelist/20220411monCrispy1BiteGyozaSeaweedSoupSoumenTonpeiyaki/Crispy1BiteGyozaSeaweedSoupSoumenTonpeiyaki';
import MarshmallowChocoToast from '../articlelist/20220411monMarshmallowChocoToast/MarshmallowChocoToast';
import BroccoliAndPorkWithMisoSesamePaste from '../articlelist/20220412tueBroccoliAndPorkWithMisoSesamePaste/BroccoliAndPorkWithMisoSesamePaste';
import HotplateOmeletteRice from '../articlelist/20220412tueHotplateOmeletteRice/HotplateOmeletteRice';
import IceCreamChocoMuffin from '../articlelist/20220412tueIceCreamChocoMuffin/IceCreamChocoMuffin';
import BroccoliCarbonara from '../articlelist/20220413wedBroccoliCarbonara/BroccoliCarbonara';
import KiwiScoopBiscuitCake from '../articlelist/20220413wedKiwiScoopBiscuitCake/KiwiScoopBiscuitCake';
import BruleePudding from '../articlelist/20220414thuBruleePudding/BruleePudding';
import DeepFriedSoumenWithStarchySauce from '../articlelist/20220414thuDeepFriedSoumenWithStarchySauce/DeepFriedSoumenWithStarchySauce';
import StarbucksScone from '../articlelist/20220415friStarbucksScone/StarbucksScone';
import EdekaLasagne from '../articlelist/20220415friEdekaLasagne/EdekaLasagne';
import CamembertCheeseTomatoPasta from '../articlelist/20220416satCamembertCheeseTomatoPasta/CamembertCheeseTomatoPasta';
import RawChocolateFinancier from '../articlelist/20220416satRawChocolateFinancier/RawChocolateFinancier';
import EasterLunch2022 from '../articlelist/20220417sunEasterLunch2022/EasterLunch2022';
import BeanSproutOmeletteGyoza from '../articlelist/20220418monBeanSproutOmeletteGyoza/BeanSproutOmeletteGyoza';
import GarlicMeatMisoSoumen from '../articlelist/20220418monGarlicMeatMisoSoumen/GarlicMeatMisoSoumen';
import GateauChocolat3ingredients from '../articlelist/20220418monGateauChocolat3ingredients/GateauChocolat3ingredients';
import CucumberAppleMintSmoothie from '../articlelist/20220419tueCucumberAppleMintSmoothie/CucumberAppleMintSmoothie';
import OvenMaccaroni from '../articlelist/20220419tueOvenMaccaroni/OvenMaccaroni';
import SeaweedRice from '../articlelist/20220419tueSeaweedRice/SeaweedRice';
import CrunchyPotatoCucumberSalad from '../articlelist/20220420wedCrunchyPotatoCucumberSalad/CrunchyPotatoCucumberSalad';
import StrawberryGingerRoot from '../articlelist/20220420wedStrawberryGingerRoot/StrawberryGingerRoot';
import BeanSproutTeriMayoHamburg from '../articlelist/20220421thuBeanSproutTeriMayoHamburg/BeanSproutTeriMayoHamburg';
import BluberryBananaSpinachSmoothie from '../articlelist/20220421thuBluberryBananaSpinachSmoothie/BluberryBananaSpinachSmoothie';
import VeganPastaSalad from '../articlelist/20220421thuVeganPastaSalad/VeganPastaSalad';
import EasterMeatlessLunch from '../articlelist/20220422friEasterMeatlessLunch/EasterMeatlessLunch';
import FondantChocolate from '../articlelist/20220423satFondantChocolate/FondantChocolate';
import FriedPorkWithKimchi from '../articlelist/20220423satFriedPorkWithKimchi/FriedPorkWithKimchi';
import TunaCarrotRice from '../articlelist/20220423satTunaCarrotRice/TunaCarrotRice';
import ChocoBananaIceCake from '../articlelist/20220424sunChocoBananaIceCake/ChocoBananaIceCake';
import FriedPorkKimchiGlassNoodle from '../articlelist/20220424sunFriedPorkKimchiGlassNoodle/FriedPorkKimchiGlassNoodle';
import KimcheeseKimpa from '../articlelist/20220424sunKimcheeseKimpa/KimcheeseKimpa';
import MatchaRawChocoCheeseIce from '../articlelist/20220425monMatchaRawChocoCheeseIce/MatchaRawChocoCheeseIce';
import YummyFriedChickenGlassnoodleSalad from '../articlelist/20220425monYummyFriedChickenGlassnoodleSalad/YummyFriedChickenGlassnoodleSalad';
import PuddingCheeseIceCake from '../articlelist/20220426tuePuddingCheeseIceCake/PuddingCheeseIceCake';
import SchnitzelWithAsparagus from '../articlelist/20220426tueSchnitzelWithAsparagus/SchnitzelWithAsparagus';
import LeekSaltPasta from '../articlelist/20220427wedLeekSaltPasta/LeekSaltPasta';
import TiramisuIceCake from '../articlelist/20220427wedTiramisuIceCake/TiramisuIceCake';
import SzechuanStirFry from '../articlelist/20220428thuSzechuanStirFry/SzechuanStirFry';
import BasilDressing from '../articlelist/20220429friBasilDressing/BasilDressing';
import RoastedShrimpVeggieSalad from '../articlelist/20220428thuRoastedShrimpVeggieSalad/RoastedShrimpVeggieSalad';
import EggplantPorkUdon from '../articlelist/20220429friEggplantPorkUdon/EggplantPorkUdon';
import SalmonAvoAsparagusGenoveseSauce from '../articlelist/20220430satSalmonAvoAsparagusGenoveseSauce/SalmonAvoAsparagusGenoveseSauce';
import BroiledEggplantRiceBowl from '../articlelist/20220501sunBroiledEggplantRiceBowl/BroiledEggplantRiceBowl';
import Laksa from '../articlelist/20220501sunLaksa/Laksa';
import PorkChineseChiveStirFrySaltUdon from '../articlelist/20220502monPorkChineseChiveStirFrySaltUdon/PorkChineseChiveStirFrySaltUdon';
import PotatoMeatGratin from '../articlelist/20220503tuePotatoMeatGratin/PotatoMeatGratin';
import PorkLeekRice from '../articlelist/20220504wedPorkLeekRice/PorkLeekRice';
import ChickenFajitaSalad from '../articlelist/20220505thuChickenFajitaSalad/ChickenFajitaSalad';
import CurryPilaf from '../articlelist/20220505thuCurryPilaf/CurryPilaf';
import MushroomGratinWhiteSauce from '../articlelist/20220506friMushroomGratinWhiteSauce/MushroomGratinWhiteSauce';
import Peperoncino from '../articlelist/20220507satPeperoncino/Peperoncino';
import BangbangjiSalad from '../articlelist/20220508sunBangbangjiSalad/BangbangjiSalad';
import KouShuiJiSalad from '../articlelist/20220509monKouShuiJiSalad/KouShuiJiSalad';
import CaesarSalad from '../articlelist/20220510tueCaesarSalad/CaesarSalad';
import CookieCreamIceCake from '../articlelist/20220511wedCookieCreamIceCake/CookieCreamIceCake';
import CheeseAndPizzaSausageStickAndChorizoDog from '../articlelist/20220512thuCheeseAndPizzaSausageStickAndChorizoDog/CheeseAndPizzaSausageStickAndChorizoDog';
import MeatBallsKnorr from '../articlelist/20220513friMeatBallsKnorr/MeatBallsKnorr';
import DanDanUdon from '../articlelist/20220514satDanDanUdon/DanDanUdon';
import KochoriSalad from '../articlelist/20220515sunKochoriSalad/KochoriSalad';
import PastaChipsSalsaMexicana from '../articlelist/20220516monPastaChipsSalsaMexicana/PastaChipsSalsaMexicana';
import SeafoodGratin from '../articlelist/20220517tueSeafoodGratin/SeafoodGratin';
import SnowBallCookie from '../articlelist/20220518wedSnowBallCookie/SnowBallCookie';
import SweetpotatoScone from '../articlelist/20220519thuSweetpotatoScone/SweetpotatoScone';
import EggplantDip from '../articlelist/20220520friEggplantDip/EggplantDip';
import NonBakedRawChocolateCake from '../articlelist/20220521satNonBakedRawChocolateCake/NonBakedRawChocolateCake';
import RollingConsommePotato from '../articlelist/20220522sunRollingConsommePotato/RollingConsommePotato';
import ChocoFinancier from '../articlelist/20220523monChocoFinancier/ChocoFinancier';
import KetchupTunaPasta from '../articlelist/20220524tueKetchupTunaPasta/KetchupTunaPasta';
import SweetSourMayoChickenNoMilk from '../articlelist/20220525wedSweetSourMayoChickenNoMilk/SweetSourMayoChickenNoMilk';
import TunaTomatoCreamPasta from '../articlelist/20220526thuTunaTomatoCreamPasta/TunaTomatoCreamPasta';
import FlowerMarshmallowCookie from '../articlelist/20220527friFlowerMarshmallowCookie/FlowerMarshmallowCookie';
import ButterChickenCurry2 from '../articlelist/20220528satButterChickenCurry2/ButterChickenCurry2';
import ChickenStewInTomatoSauce from '../articlelist/20220529sunChickenStewInTomatoSauce/ChickenStewInTomatoSauce';
import OrangeMangoCarrotSmoothie from '../articlelist/20220530monOrangeMangoCarrotSmoothie/OrangeMangoCarrotSmoothie';
import AvoToast from '../articlelist/20220531tueAvoToast/AvoToast';
import GarlicButterMentaiPasta from '../articlelist/20220601wedGarlicButterMentaiPasta/GarlicButterMentaiPasta';
import PeaSproutMeatRiceBowl from '../articlelist/20220602thuPeaSproutMeatRiceBowl/PeaSproutMeatRiceBowl';
import PorkLeekSaltyRiceBowl from '../articlelist/20220603friPorkLeekSaltyRiceBowl/PorkLeekSaltyRiceBowl';
import GabagoolSandwich from '../articlelist/20220604satGabagoolSandwich/GabagoolSandwich';
import PlainScone from '../articlelist/20220605sunPlainScone/PlainScone';
import TaiwaneseCastella from '../articlelist/20220607tueTaiwaneseCastella/TaiwaneseCastella';
import YogurtMarinatedChicken from '../articlelist/20220608wedYogurtMarinatedChicken/YogurtMarinatedChicken';
import ChickenParmSand from '../articlelist/20220609thuChickenParmSand/ChickenParmSand';
import LassiMilo from '../articlelist/20220610friLassiMilo/LassiMilo';
import NYCheeseCake from '../articlelist/20220611satNYCheeseCake/NYCheeseCake';
import ChickenCucumberGlassNoodleSalad from '../articlelist/20220612sunChickenCucumberGlassNoodleSalad/ChickenCucumberGlassNoodleSalad';
import SesameOilChickenCucumberSalad from '../articlelist/20220613monSesameOilChickenCucumberSalad/SesameOilChickenCucumberSalad';
import FriedCheeseChicken from '../articlelist/20220614tueFriedCheeseChicken/FriedCheeseChicken';
import TofuChickenNuggets from '../articlelist/20220615wedTofuChickenNuggets/TofuChickenNuggets';
import ChickenPiccata from '../articlelist/20220616thuChickenPiccata/ChickenPiccata';
import EggplantTomatoSauce from '../articlelist/20220617friEggplantTomatoSauce/EggplantTomatoSauce';
import BakedFetaPastaWithBasil from '../articlelist/20220618satBakedFetaPastaWithBasil/BakedFetaPastaWithBasil';
import RoastedGarlicAndRedPepperBainganBharta from '../articlelist/20220619sunRoastedGarlicAndRedPepperBainganBharta/RoastedGarlicAndRedPepperBainganBharta';
import RawChocolateTart from '../articlelist/20220620monRawChocolateTart/RawChocolateTart';
import RadishMeatStarch from '../articlelist/20220621tueRadishMeatStarch/RadishMeatStarch';
import ZucchiniToscana from '../articlelist/20220622wedZucchiniToscana/ZucchiniToscana';
import BananaPuddingCake from '../articlelist/20220623thuBananaPuddingCake/BananaPuddingCake';
import SaltButterChickenPotato from '../articlelist/20220624friSaltButterChickenPotato/SaltButterChickenPotato';
import StirChickenPotatoSaltLeek from '../articlelist/20220625satStirChickenPotatoSaltLeek/StirChickenPotatoSaltLeek';
import CrumbleBakedCheeseCake from '../articlelist/20220626sunCrumbleBakedCheeseCake/CrumbleBakedCheeseCake';
import ChickenGratedRadishWithPonzu from '../articlelist/20220627monChickenGratedRadishWithPonzu/ChickenGratedRadishWithPonzu';
import MatchaCheeseMilleCrêpes from '../articlelist/20220628tueMatchaCheeseMilleCrêpes/MatchaCheeseMilleCrêpes';
import StrawberryMilleCrepesHomemadeCustard from '../articlelist/20220629wedStrawberryMilleCrepesHomemadeCustard/StrawberryMilleCrepesHomemadeCustard';
import NoriTamaGyoza from '../articlelist/20220630thuNoriTamaGyoza/NoriTamaGyoza';
import MarinatedZucchiniTomatoTuna from '../articlelist/20220701friMarinatedZucchiniTomatoTuna/MarinatedZucchiniTomatoTuna';
import BoiledEggplant from '../articlelist/20220702satBoiledEggplant/BoiledEggplant';
import ChickenEggplantSweetSpicyGingerSoySauce from '../articlelist/20220703sunChickenEggplantSweetSpicyGingerSoySauce/ChickenEggplantSweetSpicyGingerSoySauce';
import CinnamonAppleCake from '../articlelist/20220704monCinnamonAppleCake/CinnamonAppleCake';
import StirPorkEggplantMisoPaste from '../articlelist/20220705tueStirPorkEggplantMisoPaste/StirPorkEggplantMisoPaste';
import EggplantPorkShabuShabu from '../articlelist/20220706wedEggplantPorkShabuShabu/EggplantPorkShabuShabu';
import ColdZucchiniSoup from '../articlelist/20220707thuColdZucchiniSoup/ColdZucchiniSoup';
import SweetSpicyLettuce from '../articlelist/20220708friSweetSpicyLettuce/SweetSpicyLettuce';
import ChickenZucchiniSweetSour from '../articlelist/20220709satChickenZucchiniSweetSour/ChickenZucchiniSweetSour';
import ChocolateBarCake from '../articlelist/20220710sunChocolateBarCake/ChocolateBarCake';
import CreamyWholeLeekPotatoSoupWithBacon from '../articlelist/20220711monCreamyWholeLeekPotatoSoupWithBacon/CreamyWholeLeekPotatoSoupWithBacon';
import PonzuPorkRiceBowl from '../articlelist/20220712tuePonzuPorkRiceBowl/PonzuPorkRiceBowl';
import TortillaBurgerSand from '../articlelist/20220713wedTortillaBurgerSand/TortillaBurgerSand';
import ZucchiniTomatoLayer from '../articlelist/20220714thuZucchiniTomatoLayer/ZucchiniTomatoLayer';
import SweetChiliChickenWrap from '../articlelist/20220715friSweetChiliChickenWrap/SweetChiliChickenWrap';
import SpinachWarp from '../articlelist/20220716satSpinachWarp/SpinachWarp';
import SpicyJjigaeUdon from '../articlelist/20220717sunSpicyJjigaeUdon/SpicyJjigaeUdon';
import TsukimiBoiledSpinach from '../articlelist/20220718monTsukimiBoiledSpinach/TsukimiBoiledSpinach';
import BreakfastTortilla from '../articlelist/20220719tueBreakfastTortilla/BreakfastTortilla';
import OkuraGyozaPorkKimchiGyoza from '../articlelist/20220720wedOkuraGyozaPorkKimchiGyoza/OkuraGyozaPorkKimchiGyoza';
import HomemadeGyozaPaper from '../articlelist/20220720wedHomemadeGyozaPaper/HomemadeGyozaPaper';
import CucumberTomatoTastyNamuru from '../articlelist/20220721thuCucumberTomatoTastyNamuru/CucumberTomatoTastyNamuru';
import CheeseSeaweedPotato from '../articlelist/20220722friCheeseSeaweedPotato/CheeseSeaweedPotato';
import StirTomatoChickenWithLeek from '../articlelist/20220723satStirTomatoChickenWithLeek/StirTomatoChickenWithLeek';
import ExpressWrap from '../articlelist/20220724sunExpressWrap/ExpressWrap';
import ZucchiniCaprese from '../articlelist/20220725monZucchiniCaprese/ZucchiniCaprese';
import MixedTunaSoba from '../articlelist/20220726tueMixedTunaSoba/MixedTunaSoba';
import ChocoMarshmallowPizza from '../articlelist/20220727wedChocoMarshmallowPizza/ChocoMarshmallowPizza';

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
          <Route path='/oreocheesecake'>
            <OreoCheeseCake />
          </Route>
          <Route path='/almondmilkseafoodcurry'>
            <AlmondMilkSeafoodCurry />
          </Route>
          <Route path='/cheesecake3ingredients'>
            <CheeseCake3Ingredients />
          </Route>
          <Route path='/garlicvegpasta'>
            <GarlicVegPasta />
          </Route>
          <Route path='/nonBakedmarblecheesecake'>
            <NonBakedMarbleCheeseCake />
          </Route>
          <Route path='/spaghettibolognese'>
            <SpaghettiBolognese />
          </Route>
          <Route path='/cheesecaketastewithyogurt'>
            <CheeseCakeTasteWithYogurt />
          </Route>
          <Route path='/stirfryvegandsausageswithcurrycheese'>
            <StirFryVegAndSausageswithCurryCheese />
          </Route>
          <Route path='/ovensalmonandcabbagewithspringonionsauce'>
            <OvenSalmonAndCabbageWithSpringonionSauce />
          </Route>
          <Route path='/matchachocotart'>
            <MatchaChocoTart />
          </Route>
          <Route path='/sweetsourmayochicken'>
            <SweetSourMayoChicken />
          </Route>
          <Route path='/chickeneggplantsweetchili'>
            <ChickenEggplantSweetChili />
          </Route>
          <Route path='/eggplanttunaarrabbiiata'>
            <EggplantTunaArraBbiiata />
          </Route>
          <Route path='/bakedcheessecake'>
            <BakedCheesseCake />
          </Route>
          <Route path='/champignonsynrham'>
            <ChampignonsInRham />
          </Route>
          <Route path='/cucumbersalads'>
            <CucumberSalads />
          </Route>
          <Route path='/kassler'>
            <Kassler />
          </Route>
          <Route path='/boiledlettuce'>
            <BoiledLettuce />
          </Route>
          <Route path='/sweetpotatotart'>
            <SweetPotatoTart />
          </Route>
          <Route path='/tofucaprese'>
            <TofuCaprese />
          </Route>
          <Route path='/toscana'>
            <Toscana />
          </Route>
          <Route path='/garlictomatopastaandchickencabbagesalad'>
            <GarlicTomatoPastaAndChickenCabbageSalad />
          </Route>
          <Route path='/butterchickencurry'>
            <ButterChickenCurry />
          </Route>
          <Route path='/sweetpotatomochi2tastes'>
            <SweetPotatoMochi2tastes />
          </Route>
          <Route path='/simplekeemacurry'>
            <SimpleKeemaCurry />
          </Route>
          <Route path='/kimpa'>
            <Kimpa />
          </Route>
          <Route path='/tunasalads4kinds1'>
            <TunaSalads4kinds1 />
          </Route>
          <Route path='/tunasalads4kinds2'>
            <TunaSalads4kinds2 />
          </Route>
          <Route path='/broccoligratin'>
            <BroccoliGratin />
          </Route>
          <Route path='/meatandmushroomgratin'>
            <MeatAndMushroomGratin />
          </Route>
          <Route path='/tunasalad4kinds3'>
            <TunaSalad4kinds3 />
          </Route>
          <Route path='/chickenbroccolimacaronigratin'>
            <ChickenBroccoliMacaroniGratin />
          </Route>
          <Route path='/croquemonsieur'>
            <CroqueMonsieur />
          </Route>
          <Route path='/bacongingertoast'>
            <BaconGingerToast />
          </Route>
          <Route path='/koreanchillednoodles'>
            <KoreanChilledNoodles />
          </Route>
          <Route path='/eggavotoast'>
            <EggAvoToast />
          </Route>
          <Route path='/friedpotatoeswithmayosauce'>
            <FriedPotatoesWithMayoSauce />
          </Route>
          <Route path='/salmonspinachpotatogratin'>
            <SalmonSpinachPotatoGratin />
          </Route>
          <Route path='/birthdaycake202203'>
            <BirthdayCake202203 />
          </Route>
          <Route path='/birthdaydinner202203'>
            <BirthdayDinner202203 />
          </Route>
          <Route path='/koreanstylemeltycheesefrenchtoast'>
            <KoreanStyleMeltyCheeseFrenchToast />
          </Route>
          <Route path='/sesamesoymilksoumen'>
            <SesameSoymilkSoumen />
          </Route>
          <Route path='/brillatoscana'>
            <BrillaToscana />
          </Route>
          <Route path='/meltyfrenchtoast'>
            <MeltyFrenchToast />
          </Route>
          <Route path='/taiwanesemixedudon'>
            <TaiwaneseMixedUdon />
          </Route>
          <Route path='/salmonmeunièrelemonbutterwithpommes2'>
            <SalmonMeunièreLemonButterWithPommes2 />
          </Route>
          <Route path='/toastsausageroll'>
            <ToastSausageRoll />
          </Route>
          <Route path='/yummyspicybellowcucumber'>
            <YummySpicyBellowCucumber />
          </Route>
          <Route path='/cucumberbaconrollwithmayo'>
            <CucumberBaconRollWithMayo />
          </Route>
          <Route path='/meatpastawithwholeonion'>
            <MeatPastaWithWholeOnion />
          </Route>
          <Route path='/pizzatoast'>
            <PizzaToast />
          </Route>
          <Route path='/cucumbershiokombuokaka'>
            <CucumberShioKombuOkaka />
          </Route>
          <Route path='/honeycheese1bitefrenchtoast'>
            <HoneyCheese1biteFrenchToast />
          </Route>
          <Route path='/porkmeatballsandlettucesaltysoup'>
            <PorkMeatBallsAndLettuceSaltySoup />
          </Route>
          <Route path='/nattocheesesweetsoursauce'>
            <NattoCheeseSweetSourSauce />
          </Route>
          <Route path='/onigiriwithsesameoilandsalt'>
            <OnigiriWithSesameOilAndSalt />
          </Route>
          <Route path='/spinachchickencreampasta'>
            <SpinachChickenCreamPasta />
          </Route>
          <Route path='/eggporridge'>
            <EggPorridge />
          </Route>
          <Route path='/florentins'>
            <Florentins />
          </Route>
          <Route path='/spaghettigratin'>
            <SpaghettiGratin />
          </Route>
          <Route path='/baconeggcup'>
            <BaconEggCup />
          </Route>
          <Route path='/oilsobawithspringonion'>
            <OilSobaWithSpringOnion />
          </Route>
          <Route path='/cheeseinonigirimeatroll'>
            <CheeseInOnigiriMeatRoll />
          </Route>
          <Route path='/garlicbuttersoysaucesalmonmeunière'>
            <GarlicButterSoysauceSalmonMeunière />
          </Route>
          <Route path='/gingerporkrollonigiri'>
            <GingerPorkRollOnigiri />
          </Route>
          <Route path='/hotsournoodle'>
            <HotSourNoodle />
          </Route>
          <Route path='/saltyspringonionroll'>
            <SaltySpringOnionRoll />
          </Route>
          <Route path='/tomatotunacapellini'>
            <TomatoTunaCapellini />
          </Route>
          <Route path='/angrychicken'>
            <AngryChicken />
          </Route>
          <Route path='/foldcheesekimpa'>
            <FoldCheeseKimpa />
          </Route>
          <Route path='/sweetpotatopudding'>
            <SweetPotatoPudding />
          </Route>
          <Route path='/deepfriedeggplantandchickeninbroth'>
            <DeepFriedEggplantAndChickenInBroth />
          </Route>
          <Route path='/seaweedmochi'>
            <SeaweedMochi />
          </Route>
          <Route path='/baumkuchen'>
            <Baumkuchen />
          </Route>
          <Route path='/chickensteakandtomatoseaweednamuru'>
            <ChickenSteakAndTomatoSeaweedNamuru />
          </Route>
          <Route path='/tunapotatogalette'>
            <TunaPotatoGalette />
          </Route>
          <Route path='/cheesefrenchtoast'>
            <CheeseFrenchToast />
          </Route>
          <Route path='/coconutschickenwithwokvegs'>
            <CoconutsChickenWithWokVegs />
          </Route>
          <Route path='/koreanricebowlonsenegg'>
            <KoreanRiceBowlOnsenEgg />
          </Route>
          <Route path='/bananabreadpudding'>
            <BananaBreadPudding />
          </Route>
          <Route path='/lemonramenchickenbrothonionpancakekoreanchicken'>
            <LemonRamenChickenBrothOnionPancakeKoreanChicken />
          </Route>
          <Route path='/baconcheesesteamedbun'>
            <BaconCheeseSteamedBun />
          </Route>
          <Route path='/oilsobasoumen'>
            <OilSobaSoumen />
          </Route>
          <Route path='/squarelemoncake'>
            <SquareLemonCake />
          </Route>
          <Route path='/crispyspicyfriedchickenherbfingerchickenyummylettucesaltysauce'>
            <CrispySpicyFriedChickenHerbFingerChickenYummyLettuceSaltySauce />
          </Route>
          <Route path='/melonbread'>
            <MelonBread />
          </Route>
          <Route path='/saltysoumennoodle'>
            <SaltySoumenNoodle />
          </Route>
          <Route path='/cabbagesoup'>
            <CabbageSoup />
          </Route>
          <Route path='/michelinstarpasta'>
            <MichelinStarPasta />
          </Route>
          <Route path='/poundcakewithtoast'>
            <PoundCakeWithToast />
          </Route>
          <Route path='/bellpeppergroundmeatnoodle'>
            <BellPepperGroundMeatNoodle />
          </Route>
          <Route path='/cheesedogandmushroomcreamsoup'>
            <CheeseDogAndMushroomCreamSoup />
          </Route>
          <Route path='/sweetpotatomontblanc'>
            <SweetPotatoMontBlanc />
          </Route>
          <Route path='/bellpeppercupomelettericebaconpotatoroll'>
            <BellPepperCupOmeletteRiceBaconPotatoRoll />
          </Route>
          <Route path='/chopsuey'>
            <ChopSuey />
          </Route>
          <Route path='/margheritaroll'>
            <MargheritaRoll />
          </Route>
          <Route path='/creamlentilsoup'>
            <CreamLentilSoup />
          </Route>
          <Route path='/porkshabushabugratedradishsoumen'>
            <PorkShabushabuGratedRadishSoumen />
          </Route>
          <Route path='/smoagateauchocolat'>
            <SmoaGateauChocolat />
          </Route>
          <Route path='/kouignamann'>
            <KouignAmann />
          </Route>
          <Route path='/southgermanstylestewedlentilsWithspätzle'>
            <SouthGermanStyleStewedLentilsWithSpätzle />
          </Route>
          <Route path='/crispy1bitegyozaseaweedsoupsoumentonpeiyaki'>
            <Crispy1BiteGyozaSeaweedSoupSoumenTonpeiyaki />
          </Route>
          <Route path='/marshmallowchocotoast'>
            <MarshmallowChocoToast />
          </Route>
          <Route path='/broccoliandporkwithmisosesamepaste'>
            <BroccoliAndPorkWithMisoSesamePaste />
          </Route>
          <Route path='/hotplateomeletterice'>
            <HotplateOmeletteRice />
          </Route>
          <Route path='/icecreamchocomuffin'>
            <IceCreamChocoMuffin />
          </Route>
          <Route path='/broccolicarbonara'>
            <BroccoliCarbonara />
          </Route>
          <Route path='/kiwiscoopbiscuitcake'>
            <KiwiScoopBiscuitCake />
          </Route>
          <Route path='/bruleepudding'>
            <BruleePudding />
          </Route>
          <Route path='/deepfriedsoumenwithstarchysauce'>
            <DeepFriedSoumenWithStarchySauce />
          </Route>
          <Route path='/starbucksscone'>
            <StarbucksScone />
          </Route>
          <Route path='/edekalasagne'>
            <EdekaLasagne />
          </Route>
          <Route path='/camembertcheesetomatopasta'>
            <CamembertCheeseTomatoPasta />
          </Route>
          <Route path='/rawchocolatefinancier'>
            <RawChocolateFinancier />
          </Route>
          <Route path='/easterlunch2022'>
            <EasterLunch2022 />
          </Route>
          <Route path='/beansproutomelettegyoza'>
            <BeanSproutOmeletteGyoza />
          </Route>
          <Route path='/garlicmeatmisosoumen'>
            <GarlicMeatMisoSoumen />
          </Route>
          <Route path='/gateauchocolat3ingredients'>
            <GateauChocolat3ingredients />
          </Route>
          <Route path='/cucumberapplemintsmoothie'>
            <CucumberAppleMintSmoothie />
          </Route>
          <Route path='/ovenmaccaroni'>
            <OvenMaccaroni />
          </Route>
          <Route path='/seaweedrice'>
            <SeaweedRice />
          </Route>
          <Route path='/crunchypotatocucumberSalad'>
            <CrunchyPotatoCucumberSalad />
          </Route>
          <Route path='/strawberrygingerroot'>
            <StrawberryGingerRoot />
          </Route>
          <Route path='/beansproutterimayohamburg'>
            <BeanSproutTeriMayoHamburg />
          </Route>
          <Route path='/bluberrybananaspinachsmoothie'>
            <BluberryBananaSpinachSmoothie />
          </Route>
          <Route path='/veganaastasalad'>
            <VeganPastaSalad />
          </Route>
          <Route path='/eastermeatlesslunch'>
            <EasterMeatlessLunch />
          </Route>
          <Route path='/fondantchocolate'>
            <FondantChocolate />
          </Route>
          <Route path='/friedporkwithkimchi'>
            <FriedPorkWithKimchi />
          </Route>
          <Route path='/tunacarrotrice'>
            <TunaCarrotRice />
          </Route>
          <Route path='/chocobananaicecake'>
            <ChocoBananaIceCake />
          </Route>
          <Route path='/friedporkkimchiglassnoodle'>
            <FriedPorkKimchiGlassNoodle />
          </Route>
          <Route path='/kimcheesekimpa'>
            <KimcheeseKimpa />
          </Route>
          <Route path='/matcharawchococheeseice'>
            <MatchaRawChocoCheeseIce />
          </Route>
          <Route path='/yummyfriedchickenglassnoodlesalad'>
            <YummyFriedChickenGlassnoodleSalad />
          </Route>
          <Route path='/puddingcheeseicecake'>
            <PuddingCheeseIceCake />
          </Route>
          <Route path='/schnitzelwithasparagus'>
            <SchnitzelWithAsparagus />
          </Route>
          <Route path='/leeksaltpasta'>
            <LeekSaltPasta />
          </Route>
          <Route path='/tiramisuicecake'>
            <TiramisuIceCake />
          </Route>
          <Route path='/szechuanstirfry'>
            <SzechuanStirFry />
          </Route>
          <Route path='/basildressing'>
            <BasilDressing />
          </Route>
          <Route path='/roastedshrimpveggiesalad'>
            <RoastedShrimpVeggieSalad />
          </Route>
          <Route path='/eggplantporkudon'>
            <EggplantPorkUdon />
          </Route>
          <Route path='/salmonavoasparagusgenovessauce'>
            <SalmonAvoAsparagusGenoveseSauce />
          </Route>
          <Route path='/broiledeggplantricebowl'>
            <BroiledEggplantRiceBowl />
          </Route>
          <Route path='/laksa'>
            <Laksa />
          </Route>
          <Route path='/porkchinesechivestirfrysaltudon'>
            <PorkChineseChiveStirFrySaltUdon />
          </Route>
          <Route path='/potatoeatgratin'>
            <PotatoMeatGratin />
          </Route>
          <Route path='/porkleekrice'>
            <PorkLeekRice />
          </Route>
          <Route path='/chickenfajitasalad'>
            <ChickenFajitaSalad />
          </Route>
          <Route path='/currypilaf'>
            <CurryPilaf />
          </Route>
          <Route path='/mushroomgratinwhitesauce'>
            <MushroomGratinWhiteSauce />
          </Route>
          <Route path='/peperoncino'>
            <Peperoncino />
          </Route>
          <Route path='/bangbangjisalad'>
            <BangbangjiSalad />
          </Route>
          <Route path='/koushuijisalad'>
            <KouShuiJiSalad />
          </Route>
          <Route path='/caesarsalad'>
            <CaesarSalad />
          </Route>
          <Route path='/cookiecreamcicecake'>
            <CookieCreamIceCake />
          </Route>
          <Route path='/cheeseandpizzasausagestickandchorizodog'>
            <CheeseAndPizzaSausageStickAndChorizoDog />
          </Route>
          <Route path='/meatballsknorr'>
            <MeatBallsKnorr />
          </Route>
          <Route path='/dandanudon'>
            <DanDanUdon />
          </Route>
          <Route path='/kochorisalad'>
            <KochoriSalad />
          </Route>
          <Route path='/pastachipssalsamexicana'>
            <PastaChipsSalsaMexicana />
          </Route>
          <Route path='/seafoodgratin'>
            <SeafoodGratin />
          </Route>
          <Route path='/snowballcookie'>
            <SnowBallCookie />
          </Route>
          <Route path='/sweetpotatoscone'>
            <SweetpotatoScone />
          </Route>
          <Route path='/eggplantdip'>
            <EggplantDip />
          </Route>
          <Route path='/nonbakedrawchocolatecake'>
            <NonBakedRawChocolateCake />
          </Route>
          <Route path='/rollingconsommepotato'>
            <RollingConsommePotato />
          </Route>
          <Route path='/chocofinancier'>
            <ChocoFinancier />
          </Route>
          <Route path='/ketchuptunapasta'>
            <KetchupTunaPasta />
          </Route>
          <Route path='/sweetsourmayochickennomilk'>
            <SweetSourMayoChickenNoMilk />
          </Route>
          <Route path='/tunatomatocreampasta'>
            <TunaTomatoCreamPasta />
          </Route>
          <Route path='/flowermarshmallowcookie'>
            <FlowerMarshmallowCookie />
          </Route>
          <Route path='/butterchickencurry2'>
            <ButterChickenCurry2 />
          </Route>
          <Route path='/chickenstewintomatosauce'>
            <ChickenStewInTomatoSauce />
          </Route>
          <Route path='/orangemangocarrotsmoothie'>
            <OrangeMangoCarrotSmoothie />
          </Route>
          <Route path='/avotoast'>
            <AvoToast />
          </Route>
          <Route path='/garlicbuttermentaipasta'>
            <GarlicButterMentaiPasta />
          </Route>
          <Route path='/peasproutmeatricebowl'>
            <PeaSproutMeatRiceBowl />
          </Route>
          <Route path='/porkleeksaltyricebowl'>
            <PorkLeekSaltyRiceBowl />
          </Route>
          <Route path='/gabagoolsandwich'>
            <GabagoolSandwich />
          </Route>
          <Route path='/plainscone'>
            <PlainScone />
          </Route>
          <Route path='/taiwanesecastella'>
            <TaiwaneseCastella />
          </Route>
          <Route path='/yogurtmarinatedchicken'>
            <YogurtMarinatedChicken />
          </Route>
          <Route path='/chickenparmsand'>
            <ChickenParmSand />
          </Route>
          <Route path='/lassimilo'>
            <LassiMilo />
          </Route>
          <Route path='/nycheesecake'>
            <NYCheeseCake />
          </Route>
          <Route path='/chickencucumberglassnoodlesalad'>
            <ChickenCucumberGlassNoodleSalad />
          </Route>
          <Route path='/sesameoilchickencucumbersalad'>
            <SesameOilChickenCucumberSalad />
          </Route>
          <Route path='/friedcheesechicken'>
            <FriedCheeseChicken />
          </Route>
          <Route path='/tofuchickennuggets'>
            <TofuChickenNuggets />
          </Route>
          <Route path='/chickenpiccata'>
            <ChickenPiccata />
          </Route>
          <Route path='/eggplanttomatosauce'>
            <EggplantTomatoSauce />
          </Route>
          <Route path='/bakedfetapastawithbasil'>
            <BakedFetaPastaWithBasil />
          </Route>
          <Route path='/roastedgarlicandredpepperbainganbharta'>
            <RoastedGarlicAndRedPepperBainganBharta />
          </Route>
          <Route path='/rawchocolatetart'>
            <RawChocolateTart />
          </Route>
          <Route path='/radishmeatstarch'>
            <RadishMeatStarch />
          </Route>
          <Route path='/zucchinitoscana'>
            <ZucchiniToscana />
          </Route>
          <Route path='/bananapuddingcake'>
            <BananaPuddingCake />
          </Route>
          <Route path='/saltbutterchickenpotato'>
            <SaltButterChickenPotato />
          </Route>
          <Route path='/stirchickenpotatosaltleek'>
            <StirChickenPotatoSaltLeek />
          </Route>
          <Route path='/crumblebakedcheesecake'>
            <CrumbleBakedCheeseCake />
          </Route>
          <Route path='/chickengratedradishwithponzu'>
            <ChickenGratedRadishWithPonzu />
          </Route>
          <Route path='/matchacheesemillecrêpes'>
            <MatchaCheeseMilleCrêpes />
          </Route>
          <Route path='/strawberrymillecrepeshomemadecustard'>
            <StrawberryMilleCrepesHomemadeCustard />
          </Route>
          <Route path='/noritamagyoza'>
            <NoriTamaGyoza />
          </Route>
          <Route path='/marinatedzucchinitomatotuna'>
            <MarinatedZucchiniTomatoTuna />
          </Route>
          <Route path='/boiledeggplant'>
            <BoiledEggplant />
          </Route>
          <Route path='/chickeneggplantsweetspicygingersoysauce'>
            <ChickenEggplantSweetSpicyGingerSoySauce />
          </Route>
          <Route path='/cinnamonapplecake'>
            <CinnamonAppleCake />
          </Route>
          <Route path='/stirporkeggplantmisopaste'>
            <StirPorkEggplantMisoPaste />
          </Route>
          <Route path='/eggplantporkshabushabu'>
            <EggplantPorkShabuShabu />
          </Route>
          <Route path='/coldzucchinisoup'>
            <ColdZucchiniSoup />
          </Route>
          <Route path='/sweetspicylettuce'>
            <SweetSpicyLettuce />
          </Route>
          <Route path='/chickenzucchinisweetsour'>
            <ChickenZucchiniSweetSour />
          </Route>
          <Route path='/chocolatebarcake'>
            <ChocolateBarCake />
          </Route>
          <Route path='/creamywholeleekpotatosoupwithbacon'>
            <CreamyWholeLeekPotatoSoupWithBacon />
          </Route>
          <Route path='/ponzuporkricebowl'>
            <PonzuPorkRiceBowl />
          </Route>
          <Route path='/tortillaburgersand'>
            <TortillaBurgerSand />
          </Route>
          <Route path='/zucchinitomatolayer'>
            <ZucchiniTomatoLayer />
          </Route>
          <Route path='/sweetchilichickenwrap'>
            <SweetChiliChickenWrap />
          </Route>
          <Route path='/spinachwarp'>
            <SpinachWarp />
          </Route>
          <Route path='/spicyjjigaeudon'>
            <SpicyJjigaeUdon />
          </Route>
          <Route path='/tsukimiboiledspinach'>
            <TsukimiBoiledSpinach />
          </Route>
          <Route path='/breakfasttortilla'>
            <BreakfastTortilla />
          </Route>
          <Route path='/okuragyozaporkkimchigyoza'>
            <OkuraGyozaPorkKimchiGyoza />
          </Route>
          <Route path='/homemadegyozapaper'>
            <HomemadeGyozaPaper />
          </Route>
          <Route path='/cucumbertomatotastynamuru'>
            <CucumberTomatoTastyNamuru />
          </Route>
          <Route path='/cheeseseaweedpotato'>
            <CheeseSeaweedPotato />
          </Route>
          <Route path='/stirtomatochickenwithleek'>
            <StirTomatoChickenWithLeek />
          </Route>
          <Route path='/expresswrap'>
            <ExpressWrap />
          </Route>
          <Route path='/zucchinicaprese'>
            <ZucchiniCaprese />
          </Route>
          <Route path='/mixedtunasoba'>
            <MixedTunaSoba />
          </Route>
          <Route path='/chocomarshmallowpizza'>
            <ChocoMarshmallowPizza />
          </Route>
        </Switch>
      </div>
    </Router>

  )
};

export default Articles;
