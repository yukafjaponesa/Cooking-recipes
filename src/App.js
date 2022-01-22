import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import HomePics from './components/HomePics/HomePics';
import Articles from './components/articles/Articles';
import Searchbar from './components/SearchBox/SearchBar';
import React, {useState} from 'react';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const lists = [
    {'title': 'youlinji', 'date': '23.02.2021', 'description': 'You lin ji 油淋鶏'},
    {'title': 'bangbangji', 'date': '27.02.2021', 'description': 'Bang bang ji 棒棒鶏'},
    {'title': 'gyoza', 'date': '12.03.2021', 'description': 'Gyoza 餃子'},
    {'title': 'croquet', 'date': '16.03.2021', 'description': 'Croquet　コロッケ'},
    {'title': 'porkcabagge', 'date': '20.03.2021', 'description': 'Pork Cabagge Rice Bowl 豚キャベツ丼'},
    {'title': 'salmonpoke', 'date': '23.03.2021', 'description': 'Hawaiian Poke Bowl Salmon ポケ丼'},
    {'title': 'easterlunch', 'date': '04.04.2021', 'description': 'Easter Lunch Rabbit Potato Salad'},
    {'title': 'tacorice', 'date': '08.04.2021', 'description': 'Taco Rice タコライス'},
    {'title': 'katsudon', 'date': '11.04.2021', 'description': 'Katsu-Don 卵とじかつ丼'},
    {'title': 'soba', 'date': '14.04.2021', 'description': 'Soba 茶そば'},
    {'title': 'bibimpap', 'date': '18.04.2021', 'description': 'Korean Bibimpap ビビンバ'},
    {'title': 'cabbageroll', 'date': '25.04.2021', 'description': 'Cabbage Roll ロールキャベツ'},
    {'title': 'cheesedakgalbi', 'date': '26.04.2021', 'description': 'Cheese Dak Galbi チーズタッカルビ'},
    {'title': 'greencurry', 'date': '29.04.2021', 'description': 'Thai Green Curry タイグリーンカレー'},
    {'title': 'bratkartoffeln', 'date': '10.05.2021', 'description': 'Bratkartoffeln ブラットカトフレン'},
    {'title': 'mediterraneandish', 'date': '12.05.2021', 'description': 'Mediterranean Dish 地中海風料理'},
    {'title': 'thaiholybasil', 'date': '14.05.2021', 'description': 'Thai Holy Basil with minced meat タイガパオライス'},
    {'title': 'threecolorricebowl', 'date': '16.05.2021', 'description': 'Three Color Rice Bowl 三色丼'},
    {'title': 'yogurtkeemacurry', 'date': '17.05.2021', 'description': 'Yogurt Keema Curry ヨーグルトキーマカレー'},
    {'title': 'japanesebreaky', 'date': '19.05.2021', 'description': 'Japanese Breaky 和朝食'},
    {'title': 'riceballandeggroll', 'date': '21.05.2021', 'description': 'Rice ball & Egg roll おにぎり&玉子焼き'},
    {'title': 'ramen', 'date': '21.05.2021', 'description': 'Ramen ラーメン'},
    {'title': 'spicycrispychicken', 'date': '27.05.2021', 'description': 'Spicy Crispy Chicken スパイシークリスピーチキン'},
    {'title': 'crepe', 'date': '28.05.2021', 'description': 'Crepe クレープ'},
    {'title': 'hakataramen', 'date': '29.05.2021', 'description': 'Hakata Tonkotsu Ramen 博多とんこつラーメン'},
    {'title': 'sushi', 'date': '29.05.2021', 'description': 'Sushi 寿司'},
    {'title': 'eggintomato', 'date': '31.05.2021', 'description': 'Egg in Tomato 卵入りベイクドトマト'},
    {'title': 'sweetsour', 'date': '31.05.2021', 'description': 'Sweet Sout 甘酢炒め'},
    {'title': 'gyozaandsoup', 'date': '02.06.2021', 'description': 'Gyoza And Soup 餃子スープ'},
    {'title': 'nagahamaramen', 'date': '04.06.2021', 'description': 'Nagahama Ramen 長浜ラーメン'},
    {'title': 'koreanchickenricebowl', 'date': '15.06.2021', 'description': 'Korean Chicken Rice Bowl 韓国風チキン丼'},
    {'title': 'bolognese', 'date': '18.06.2021', 'description': 'Bolognese ボロネーゼ'},
    {'title': 'hayashirice', 'date': '19.06.2021', 'description': 'Hashed Beef and Rice ハヤシライス'},
    {'title': 'teriyakichicken', 'date': '20.06.2021', 'description': 'Teriyaki Chicken 照り焼きチキン'},
    {'title': 'beefstew', 'date': '21.06.2021', 'description': 'Beef Stew ビーフシチュー'},
    {'title': 'baconcheeseroll', 'date': '22.06.2021', 'description': 'Bacon Cheese Roll ベーコンチーズロール'},
    {'title': 'yodaredori', 'date': '30.06.2021', 'description': 'YodareDori よだれどり'},
    {'title': 'bltsandwich', 'date': '05.07.2021', 'description': 'BLT Sandwich BLTサンド'},
    {'title': 'englishbreakfast', 'date': '06.07.2021', 'description': 'English Breakfast イングリッシュブレックファスト'},
    {'title': 'beefkimchiburger', 'date': '07.07.2021', 'description': 'Beef Kimchi Burger ビーフキムチバーガー'},
    {'title': 'tomatopasta', 'date': '14.07.2021', 'description': 'Tomato pastaトマトパスタ'},
    {'title': 'döner', 'date': '29.07.2021', 'description': 'Döner ケバブ'},
    {'title': 'meatdoria', 'date': '30.07.2021', 'description': 'Meat Doria ミートドリア'},
    {'title': 'breakysandwich', 'date': '31.07.2021', 'description': 'Breaky Sandwich 朝食サンド'},
    {'title': 'mincedmeatsteak', 'date': '31.07.2021', 'description': 'Minced Meat Steak ミンチ肉ステーキ'},
    {'title': 'chickentikka', 'date': '10.08.2021', 'description': 'Chicken Tikka Curry チキンテッカカレー'},
    {'title': 'radishsaladgarlic', 'date': '08.09.2021', 'description': 'Radish Salad ver.Garlic 大根サラダ　ごま油＆ガーリック'},
    {'title': 'radishsaladyakiniku', 'date': '09.09.2021', 'description': 'Radish Salad ver.Yakiniku 焼肉屋さんの大根サラダ'},
    {'title': 'syoyuramen', 'date': '10.09.2021', 'description': 'Syoyu Ramen 醤油ラーメン'},
    {'title': 'okonomiyaki', 'date': '11.09.2021', 'description': 'Okonomiyaki お好み焼き'},
    {'title': 'rollcabagge', 'date': '13.09.2021', 'description': 'Roll Cabagge & Macaroni Salad ロールキャベツとマカロニサラダ'},
    {'title': 'breaky', 'date': '14.09.2021', 'description': 'Breaky 朝食'},
    {'title': 'yakisoba', 'date': '15.09.2021', 'description': 'Yakisoba 焼きそば'},
    {'title': 'potatosalad', 'date': '15.09.2021', 'description': 'Potato Salad ポテサラ'},
    {'title': 'tunacabaggemayosalad', 'date': '16.09.2021', 'description': 'Tuna Cabagge Mayo Salad ツナマヨサラダ'},
    {'title': 'chickenkatsu', 'date': '17.09.2021', 'description': 'ChickenKatsu チキンカツ'},
    {'title': 'cabbagegomadaresalad', 'date': '18.09.2021', 'description': 'Cabbage Goma Dare Salad ゴマダレキャベツサラダ'},
    {'title': 'poacedeggbreaky', 'date': '19.09.2021', 'description': 'Poaced Egg Breaky ポーチドエッグ'},
    {'title': 'tunacucumbersalad', 'date': '19.09.2021', 'description': 'Tuna Cucumber Salad ツナキュウリ-青じそ-'},
    {'title': 'chickeneggplantsweetsour', 'date': '20.09.2021', 'description': 'Chicken Eggplant Sweet Sour 鶏ももとナスの甘酢だれ'},
    {'title': 'caprese', 'date': '21.09.2021', 'description': 'Caprese カプレーゼ'},
    {'title': 'chickenlemon', 'date': '21.09.2021', 'description': 'Chicken Lemon 鶏もものねぎ塩レモン'},
    {'title': 'chickenmizoregake', 'date': '23.09.2021', 'description': 'Chicken Mizoregake ささみの大根みぞれがけ'},
    {'title': 'tomatopastapaste', 'date': '27.09.2021', 'description': 'Tomato Pasta Paste トマトパスタ'},
    {'title': 'quiche', 'date': '28.09.2021', 'description': 'Quiche キッシュ'},
    {'title': 'chickeneggplantstirfry', 'date': '03.10.2021', 'description': 'Chicken Eggplant Stir-Fried 鶏肉とナスのさっぱり炒め'},
    {'title': 'chinesecabaggecarrotsalad', 'date': '04.10.2021', 'description': 'Chinese Cabagge Carrot Salad 白菜と人参のサラダ'},
    {'title': 'sutadon', 'date': '23.10.2021', 'description': 'Suta-don 伝説のすた丼屋'},
    {'title': 'bakedpumpkincheesecake', 'date': '25.10.2021', 'description': 'Baked Pumpkin Cheese Cake かぼちゃのベイクドチーズケーキ'},
    {'title': 'pumpkingratan', 'date': '28.10.2021', 'description': 'Pumpkin　Gratan かぼちゃグラタン'},
    {'title': 'sweetpotatocakewithoutegg', 'date': '30.10.2021', 'description': 'Sweet Potato Cake さつまいもケーキ 卵なし'},
    {'title': 'sigaporechickenrice', 'date': '31.10.2021', 'description': 'Sigapore Chicken Rice シンガポールチキンライス'},
    {'title': 'sweetpotatocake', 'date': '01.11.2021', 'description': 'Sweet Potato Cake さつまいもケーキ'},
    {'title': 'carrotcake', 'date': '09.11.2021', 'description': 'Carrot Cake キャロットケーキ'},
    {'title': 'bauerntopf', 'date': '09.11.2021', 'description': 'Bauerntopf 農家のスープ'},
    {'title': 'basilandrucolapesto', 'date': '10.11.2021', 'description': 'Basil and Rucola Pesto バジルとルッコラのペストパスタ'},
    {'title': 'curryrice', 'date': '11.11.2021', 'description': 'Curry Rice カレーライス'},
    {'title': 'curryudon', 'date': '12.11.2021', 'description': 'Curry Udon(Noodel) カレーうどん'},
    {'title': 'ricottaandnuts', 'date': '12.11.2021', 'description': 'Ricotta and Nuts リコッタチーズとナッツのペストパスタ'},
    {'title': 'chocobananachiffoncake', 'date': '15.11.2021', 'description': 'Choco Banana Chiffon Cake チョコバナナシフォンケーキ'},
    {'title': 'locomoco', 'date': '16.11.2021', 'description': 'Loco Moco ロコモコ丼'},
    {'title': 'tiramisu', 'date': '20.11.2021', 'description': 'Tiramisu ティラミス'},
    {'title': 'sweetpotatopoundcake', 'date': '22.11.2021', 'description': 'Sweetpotato Pound Cake さつまいもパウンドケーキ'},
    {'title': 'kurumehotomekiramen', 'date': '25.11.2021', 'description': 'Kurume Hotomeki Ramen 久留米ほとめきラーメン'},
    {'title': 'takikomirice', 'date': '26.11.2021', 'description': 'Takikomi Rice 炊き込みご飯'},
    {'title': 'miracoliclassic', 'date': '26.11.2021', 'description': 'Miracoli Classic トマトソースパスタ'},
    {'title': 'nonbakedpumpkincake', 'date': '26.11.2021', 'description': 'Non Baked Pumpkin Cake 焼かないかぼちゃケーキ'},
    {'title': 'chickencucumbersalad', 'date': '27.11.2021', 'description': '2 sorts Chicken Cucumber Salad 2種の鶏ときゅうりサラダ'},
    {'title': 'pumpkinsoup', 'date': '29.11.2021', 'description': 'Pumpkin Soup かぼちゃスープ'},
    {'title': 'sweetpotatobuttercake', 'date': '02.12.2021', 'description': 'Sweetpotato Butter Cake さつまいもバターケーキ'},
    {'title': 'kumamotomokkosuramen', 'date': '03.12.2021', 'description': 'Kumamoto Mokkosu Ramen 熊本もっこすラーメン'},
    {'title': 'smokedsalmonsushicake', 'date': '06.12.2021', 'description': 'Smoked Salmon Sushi Cake サーモン押し寿司'},
    {'title': 'sweetpotatocheesecake', 'date': '07.12.2021', 'description': 'Sweetpotato Cheese Cake スイートポテトチーズケーキ'},
    {'title': 'chickeneggplantnegichiliOil', 'date': '10.12.2021', 'description': 'Chicken Eggplant Negi Chili Oil 鶏もも肉となすのねぎラー油炒め'},
    {'title': 'chickennamban', 'date': '11.12.2021', 'description': 'Chicken Namban & Spiicy Broccoli チキン南蛮 & 辛旨ブロッコリー'},
    {'title': 'cheesecaketartnooven', 'date': '11.12.2021', 'description': 'Cheese Cake Tart No Oven 卵焼き器でチーズケーキタルト'},
    {'title': 'creamyspicycurryandchickenavonamru', 'date': '14.12.2021', 'description': 'Creamy-Spicy Curry & Chicken Avo Namru クリーミースパイシーカレー & チキンアボナムル'},
    {'title': 'sweetpotatocakeWithmicrowave', 'date': '14.12.2021', 'description': 'Sweet Potato Cake スイートポテトケーキ'},
    {'title': 'selfmisoramen', 'date': '15.12.2021', 'description': 'Self Miso Ramen セルフ味噌ラーメン'},
    {'title': 'teamuffin', 'date': '15.12.2021', 'description': 'Tea Muffin 紅茶マフィン'},
    {'title': 'ovenfish', 'date': '16.12.2021', 'description': 'Oven Fish 魚のオーブン焼き'},
    {'title': 'cheesecakelemontart', 'date': '17.12.2021', 'description': 'Cheese Cake Lemon Tart 卵焼き器でチーズケーキレモンタルト'},
    {'title': 'stuffedeggplantandbellpepper', 'date': '17.12.2021', 'description': 'Stuffed Eggplant And Bell Pepper ナスとピーマンの肉詰め'},
    {'title': 'miracoliherbs', 'date': '18.12.2021', 'description': 'Miracoli Herbs トマトパスタ'},
    {'title': 'friednoodles', 'date': '19.12.2021', 'description': 'Fried Noodles フライドヌードル'},
    {'title': 'sweetpotatomochiballs', 'date': '20.12.2021', 'description': 'Sweet Potato Mochi Balls さつまいものもちもちボール'},
    {'title': 'christmaswreath', 'date': '24.12.2021', 'description': 'Christmas Wreath コーンフレークでクリスマスリース'},
    {'title': 'christmaslunch', 'date': '24.12.2021', 'description': 'Christmas Lunch クリスマスランチ～ツナタマサラダ～'},
    {'title': 'christmasdinner', 'date': '24.12.2021', 'description': 'Christmas Dinner クリスマスディナー～鴨のオーブン焼き～'},
    {'title': 'christmastreecake', 'date': '25.12.2021', 'description': 'Christmas Tree Cake クリスマスツリーケーキ'},
    {'title': 'minitomatosanta', 'date': '25.12.2021', 'description': 'Mini Tomato Santa ミニトマトサンタ'},
    {'title': 'jambalaya', 'date': '26.12.2021', 'description': 'Jambalaya ジャンバラヤ'},
    {'title': 'kumamotoakakararamen', 'date': '27.12.2021', 'description': 'Kumamoto Akakara Ramen 熊本赤辛ラーメン'},
    {'title': 'appleteacake', 'date': '29.12.2021', 'description': 'Apple Tea Cake りんごと紅茶の炊飯器ケーキ'},
    {'title': 'cornflakescrispychickenandgazpacho', 'date': '30.12.2021', 'description': 'Corn Flakes Crispy Chicken And Gazpacho コーンフレークでクリスピーチキン＆ガスパチョ'},
    {'title': 'cornflakescroquet', 'date': '02.01.2022', 'description': 'Corn Flakes Croquet コーンフレークコロッケ'},
    {'title': 'Falafel', 'date': '03.01.2022', 'description': 'Falafel ファラフェル'},
    {'title': 'matchagâteauauchocolat', 'date': '03.01.2022', 'description': 'Matcha Gâteau Au Chocolat 抹茶ガトーショコラ'},
    {'title': 'yogurtcakeavosmoothie', 'date': '04.01.2022', 'description': 'Yogurt Cake Avo Smoothie ヨーグルトケーキ＆アボカドスムージー'},
    {'title': 'thaicurrymaggi', 'date': '04.01.2022', 'description': 'Thai Curry Maggi タイカレー　マギーソース'},
    {'title': 'crispysweetpotato', 'date': '06.01.2022', 'description': 'Crispy Sweet Potato カリカリポテト'},
    {'title': 'tomatopotagesoup', 'date': '06.01.2022', 'description': 'Tomato Potage Soup トマトポタージュ & りんごドレッシング'},
    {'title': 'eggplantmeatsauce', 'date': '07.01.2022', 'description': 'Eggplant Meat Sauce ナスのミートソース丼'},
    {'title': 'basquecheesecake', 'date': '07.01.2022', 'description': 'Basque Cheese Cake バスクチーズケーキ'},
    {'title': 'noodlesalad', 'date': '07.01.2022', 'description': 'Noodle Salad パスタサラダ'},
    {'title': 'drycurry', 'date': '08.01.2022', 'description': 'Dry Curry 焼きドライカレー'},
    {'title': 'additivefreeponzu', 'date': '08.01.2022', 'description': 'Additive Free Ponzu 無添加ポン酢'},
    {'title': 'spicysimmeredeggplant', 'date': '08.01.2022', 'description': 'Spicy Simmered Eggplant ピリ辛ナスの中華風おひたし'},
    {'title': 'bistecdepolloandcarrotpotage', 'date': '09.01.2022', 'description': 'Bistec De Pollo And Carrot Potage カリビアンチキンステーキ＆人参スープ'},
    {'title': 'spicysweetchiken', 'date': '09.01.2022', 'description': 'Spicy Sweet Chiken 甘辛チキン'},
    {'title': 'orangebavarois', 'date': '09.01.2022', 'description': 'Orange Bavarois 2層に分かれるオレンジババロア'},
    {'title': 'orangelemonadeandmangogingersmoothie', 'date': '09.01.2022', 'description': 'Orange Lemonade And Mango Ginger Smoothie オレンジレモネード & マンゴージンジャースムージー'},
    {'title': 'KumamonRamen', 'date': '10.01.2022', 'description': 'Kumamon Ramen くまもんラーメン'},
    {'title': 'ovenchickenmaggi', 'date': '10.01.2022', 'description': 'Oven Chicken Maggi チキンのオーブン焼き～マギーソース～'},
    {'title': 'nonfrieddaigakuimo', 'date': '13.01.2022', 'description': 'Non Fried Daigaku Imo 揚げない大学芋'},
    {'title': 'kinakocookie', 'date': '13.01.2022', 'description': 'Kinako Cookie きな粉クッキー'},
    {'title': 'tandoorichicken', 'date': '14.01.2022', 'description': 'Tandoori Chicken タンドリーチキン'},
    {'title': 'easymadeleine', 'date': '15.01.2022', 'description': 'Easy Madeleine 簡単マドレーヌ'},
    {'title': 'chickeneggplanttomatosauce', 'date': '15.01.2022', 'description': 'Chicken Eggplant Tomato Sauce 鶏ひき肉とナスのトマト煮'},
    {'title': 'dandansoup', 'date': '16.01.2022', 'description': 'Dandan Soup 坦々スープ'},
    {'title': 'kiwismoothieandkiwijelly', 'date': '17.01.2022', 'description': 'Kiwi Smoothie And Kiwi Jelly キウイ豆乳スムージー & キウイゼリー'},
    {'title': 'cheeseravioli', 'date': '17.01.2022', 'description': 'Cheese Ravioli チーズラビオリ'},
    {'title': 'banancakewithoutbutter', 'date': '19.01.2022', 'description': 'Banan Cake Without Butter バナナケーキ～バター不要～'},
    {'title': 'tofuwithstarchysauce', 'date': '19.01.2022', 'description': 'Tofu With Starchy Sauce　ひき肉ともやしのあんかけ豆腐'},
    {'title': 'mincedbeeffriedrice', 'date': '20.01.2022', 'description': 'Minced Beef Fried Rice 牛ひき肉の油めし'},
    {'title': 'mayopepperrice', 'date': '21.01.2022', 'description': 'Mayo Pepper Rice マヨペッパーライス'},
    {'title': 'meltingcheesecake', 'date': '22.01.2022', 'description': 'Melting Cheese Cake とろけるチーズケーキ'},
    {'title': 'spicysoupvergyoza', 'date': '22.01.2022', 'description': 'Spicy Soup ver. Gyoza 餃子風ピリ辛スープ'},
  ];

  const [dishes, setDishes] = useState(lists);

  return (
    <div>
      <Router>
        <div className="App">
          <div className='navbar'>
            <Header />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
            </Switch>
            <Link to='/' className='link-in-home'>
              Home
            </Link>
            <Link to='/profile' className='link-in-home'>
              Profile
            </Link>
            <Link to='/articles' className='link-in-home'>
              Articles
            </Link>
          </div>
          <Searchbar activeDishes={dishes} dishes={lists} setDishes={setDishes}/>

          <Switch>
            <Route exact path='/'>
              <HomePics />
            </Route>

            <Route path='/profile'>
              <Profile />
            </Route>

            <Route path='/articles'>
              <Articles dishes={dishes} />
            </Route>
          </Switch>

        </div>
      </Router>
      <ContactForm />
    </div>
  );
}

export default App;
