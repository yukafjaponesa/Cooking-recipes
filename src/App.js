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
    {'title': 'koreanstewwithtofu', 'date': '23.01.2022', 'description': 'Korean Stew With Tofu お豆腐チゲ風スープ'},
    {'title': 'hotandsoursoupwithtofu', 'date': '24.01.2022', 'description': 'Hot And Sour Soup With Tofu　お豆腐酸辣湯スープ'},
    {'title': 'dandansoupwithtofu', 'date': '25.01.2022', 'description': 'Dandan Soup With Tofu お豆腐坦々スープ'},
    {'title': 'spicychickenricebowl', 'date': '26.01.2022', 'description': 'Spicy Chicken Rice Bowl 鶏ひき肉のピリ辛親子丼'},
    {'title': 'gnocchi', 'date': '27.01.2022', 'description': 'Gnocchi ニョッキ'},
    {'title': 'honeylemoncheesecream', 'date': '27.01.2022', 'description': 'Honey Lemon Cheese Cream はちみつレモンのレアチーズ'},
    {'title': 'eggplantbacontomatocreamcurry', 'date': '28.01.2022', 'description': 'Eggplant Bacon Tomato Cream Curry ナスとベーコンのトマトクリームカレー'},
    {'title': 'sweetpotatomontblanc', 'date': '28.01.2022', 'description': 'Sweet Potato Mont Blanc さつまいもモンブラン'},
    {'title': 'spinachitortelloni', 'date': '29.01.2022', 'description': 'Spinachi Tortelloni トルテローニ'},
    {'title': 'chiaseedpudding', 'date': '30.01.2022', 'description': 'Chiaseed Pudding チアプディング'},
    {'title': 'couscoustomatosauceandsalad', 'date': '31.01.2022', 'description': 'CousCous Tomato Sauce And Salad 鶏肉と野菜のトマト煮～クスクス添え～ & クスクスサラダ'},
    {'title': 'snowball', 'date': '31.01.2022', 'description': 'Snow Ball サクサクスノーボール'},
    {'title': 'coconutsmilkcurry', 'date': '01.02.2022', 'description': 'Coconuts Milk Curry ココナッツミルクカレー'},
    {'title': 'marblepatterncheesecake', 'date': '01.02.2022', 'description': 'Marble Pattern Cheese Cake マーブルチーズケーキ'},
    {'title': 'bruleedomeicecream', 'date': '07.02.2022', 'description': 'Brulee Dome Ice Cream ブリュレドームアイス'},
    {'title': 'easymatchacookie', 'date': '08.02.2022', 'description': 'Easy Matcha Cookie 袋1つで抹茶クッキー'},
    {'title': 'whitechocomarshmallowcookie', 'date': '09.02.2022', 'description': 'White Choco Marshmallow Cookie ホワイトチョコマシュクッキー'},
    {'title': 'matchatiramisuicecake', 'date': '14.02.2022', 'description': 'Matcha Tiramisu Ice Cake 抹茶ティラミスアイスケーキ'},
    {'title': 'woknoodle', 'date': '14.02.2022', 'description': 'Wok Noodle ワック'},
    {'title': 'marshmallowmousse', 'date': '15.02.2022', 'description': 'Marshmallow Mousse マシュマロムース'},
    {'title': 'noodlewithsalmon', 'date': '15.02.2022', 'description': 'Noodle With Salmon サーモンヌードル'},
    {'title': 'bananacake3ingredients', 'date': '16.02.2022', 'description': 'Banana Cake 3 Ingredients 材料3つでバナナケーキ'},
    {'title': 'pannacotta', 'date': '17.02.2022', 'description': 'Panna Cotta パンナコッタ'},
    {'title': 'kimchicheesefriedrice', 'date': '18.02.2022', 'description': 'Kimchi Cheese Fried Rice キムチーズチャーハン'},
    {'title': 'saltybuttersweetpotato', 'date': '18.02.2022', 'description': 'Salty Butter Sweet Potato 塩バター大学芋'},
    {'title': 'oreocheesecake', 'date': '20.02.2022', 'description': 'Oreo Cheese Cake オレオチーズケーキ'},
    {'title': 'almondmilkseafoodcurry', 'date': '21.02.2022', 'description': 'Almond Milk Seafood Curry アーモンドミルクのシーフードカレー'},
    {'title': 'cheesecake3ingredients', 'date': '21.02.2022', 'description': 'Cheese Cake 3 Ingredients 材料3つでチーズケーキ'},
    {'title': 'garlicvegpasta', 'date': '22.02.2022', 'description': 'Garlic Veg Pasta ガーリック野菜パスタ'},
    {'title': 'nonBakedmarblecheesecake', 'date': '23.02.2022', 'description': 'Non Baked Marble Cheese Cake マーブルチーズケーキ'},
    {'title': 'spaghettibolognese', 'date': '23.02.2022', 'description': 'Spaghetti Bolognese ボロネーゼパスタ'},
    {'title': 'cheesecaketastewithyogurt', 'date': '24.02.2022', 'description': 'Cheese Cake Taste With Yogurt ヨーグルトで簡単！チーズケーキ風'},
    {'title': 'stirfryvegandsausageswithcurrycheese', 'date': '25.02.2022', 'description': 'Stir Fry Veg And Sausages With Curry Cheese 野菜炒め＆ソーセージのカレーチーズがけ'},
    {'title': 'matchachocotart', 'date': '26.02.2022', 'description': 'Matcha Choco Tart 抹茶チョコタルト'},
    {'title': 'ovensalmonandcabbagewithspringonionsauce', 'date': '26.02.2022', 'description': 'Oven Salmon And Cabbage With Springonion Sauce オーブン焼きサーモン & ねぎだれキャベツ'},
    {'title': 'sweetsourmayochicken', 'date': '27.02.2022', 'description': 'Sweet Sour Mayo Chicken 甘酢マヨだれチキン'},
    {'title': 'chickeneggplantsweetchili', 'date': '28.02.2022', 'description': 'Chicken Eggplant Sweet Chili　ナスとチキンの甘辛照り照り炒め'},
    {'title': 'eggplanttunaarrabbiiata', 'date': '28.02.2022', 'description': 'Eggplant Tuna Arra Bbiiata ナスとツナのアラビアータ'},
    {'title': 'bakedcheessecake', 'date': '01.03.2022', 'description': 'Baked Cheesse Cake 卵焼き器でベイクドチーズケーキ'},
    {'title': 'champignonsynrham', 'date': '02.03.2022', 'description': 'Champignons In Rham きのこのクリームソース'},
    {'title': 'cucumbersalads', 'date': '03.03.2022', 'description': 'Cucumber Salads きゅうりサラダ2種'},
    {'title': 'kassler', 'date': '03.03.2022', 'description': 'Kassler mit Bohnen カスラー'},
    {'title': 'boiledlettuce', 'date': '04.03.2022', 'description': 'Boiled Lettuce レタスのおひたし'},
    {'title': 'sweetpotatotart', 'date': '04.03.2022', 'description': 'Sweet Potato Tart 大学芋タルト'},
    {'title': 'tofucaprese', 'date': '05.03.2022', 'description': 'Tofu Caprese 豆腐カプレーゼ'},
    {'title': 'toscana', 'date': '05.03.2022', 'description': 'Toscana トスカーナ'},
    {'title': 'garlictomatopastaandchickencabbagesalad', 'date': '06.03.2022', 'description': 'Garlic Tomato Pasta And Chicken Cabbage Salad ガーリックトマトパスタ & ささみとキャベツのあっさりネギ和え'},
    {'title': 'butterchickencurry', 'date': '07.03.2022', 'description': 'Butter Chicken Curry 市販のルーでバターチキンカレー'},
    {'title': 'sweetpotatomochi2tastes', 'date': '08.03.2022', 'description': 'Butter sweet potato mochi & heart shape chocolate sweet potato mochi バター芋餅＆ハートのチョコ芋餅'},
    {'title': 'simplekeemacurry', 'date': '08.03.2022', 'description': 'Simple Keema Curry シンプルキーマカレー'},
    {'title': 'kimpa', 'date': '09.03.2022', 'description': 'Kimpa キンパ'},
    {'title': 'tunasalads4kinds1', 'date': '10.03.2022', 'description': 'Tuna Salads 4 kinds 1 人参とツナのめんつゆ和え & ごぼうとツナのサラダ'},
    {'title': 'tunasalads4kinds2', 'date': '10.03.2022', 'description': 'Tuna Salads 4 kinds 2 塩昆布ツナキャベツ & ツナキュウリキャベツ'},
    {'title': 'broccoligratin', 'date': '11.03.2022', 'description': 'Broccoli Gratin ブロッコリーグラタン'},
    {'title': 'meatandmushroomgratin', 'date': '12.03.2022', 'description': 'Meat And Mushroom Gratin ひき肉ときのこのグラタン'},
    {'title': 'tunasalad4kinds3', 'date': '13.03.2022', 'description': 'Tuna Salad 4 kinds 3 ツナサラダ'},
    {'title': 'chickenbroccolimacaronigratin', 'date': '14.03.2022', 'description': 'Chicken Broccoli Macaroni Gratin 鶏肉とブロッコリーのマカロニグラタン'},
    {'title': 'croquemonsieur', 'date': '15.03.2022', 'description': 'Croque Monsieur クロックムッシュ'},
    {'title': 'bacongingertoast', 'date': '16.03.2022', 'description': 'Bacon Ginger Toast ベーコンで生姜焼きトースト'},
    {'title': 'koreanchillednoodles', 'date': '16.03.2022', 'description': 'Korean Chilled Noodles 韓国冷麺風さっぱりそうめん'},
    {'title': 'eggavotoast', 'date': '17.03.2022', 'description': 'Egg Avo Toast とろーり卵のアボカドトースト'},
    {'title': 'friedpotatoeswithmayosauce', 'date': '17.03.2022', 'description': 'Fried Potatoes With Mayo Sauce ポテフラとマヨソース'},
    {'title': 'salmonspinachpotatogratin', 'date': '17.03.2022', 'description': 'Salmon Spinach Potato Gratin 鮭とほうれん草のポタとグラタン'},
    {'title': 'birthdaycake202203', 'date': '18.03.2022', 'description': 'Birthday Cake ～strawberry sponge cake～ 苺のショートケーキ'},
    {'title': 'birthdaydinner202203', 'date': '18.03.2022', 'description': 'Birthday Dinner 誕生日メニュー～カルパッチョ、ブーケサラダ、トマトチキンパエリア～'},
    {'title': 'koreanstylemeltycheesefrenchtoast', 'date': '19.03.2022', 'description': 'Korean Style Melty Cheese French Toast 韓国風とろーりチーズのフレンチトースト'},
    {'title': 'sesamesoymilksoumen', 'date': '19.03.2022', 'description': 'Sesame Soy Milk Soumen ごま豆乳そうめん Hot / Cold'},
    {'title': 'brillatoscana', 'date': '20.03.2022', 'description': 'Brilla Toscana バリラトスカーナソース'},
    {'title': 'meltyfrenchtoast', 'date': '20.03.2022', 'description': 'Melty French Toast とろとろフレンチトースト'},
    {'title': 'taiwanesemixedudon', 'date': '20.03.2022', 'description': 'Taiwanese Mixed Udon 台湾混ぜうどん'},
    {'title': 'salmonmeunièrelemonbutterwithpommes2', 'date': '21.03.2022', 'description': 'Salmon Meunière Lemon Butter With Pommes2 鮭ときのこのムニエル～レモンバターソース～　ポテトフライ付き'},
    {'title': 'toastsausageroll', 'date': '21.03.2022', 'description': 'Toast Sausage Roll トーストでソーセージロール'},
    {'title': 'yummyspicybellowcucumber', 'date': '21.03.2022', 'description': 'Yummy Spicy Bellow Cucumber ジャバラきゅうりのウマ辛漬け'},
    {'title': 'cucumberbaconrollwithmayo', 'date': '22.03.2022', 'description': 'Cucumber Bacon Roll With Mayo きゅうりのベーコン巻きマヨ炒め'},
    {'title': 'meatpastawithwholeonion', 'date': '22.03.2022', 'description': 'Meat Pasta With Whole Onion 丸ごと玉ねぎのワンパンミートパスタ'},
    {'title': 'pizzatoast', 'date': '22.03.2022', 'description': 'Pizza Toast ピザトースト'},
    {'title': 'cucumbershiokombuokaka', 'date': '23.03.2022', 'description': 'Cucumber Shio Kombu Okaka きゅうりの塩昆布おかか漬け'},
    {'title': 'honeycheese1bitefrenchtoast', 'date': '23.03.2022', 'description': 'Honey Cheese 1 bite French Toast はちみつとチーズの1口フレンチトースト'},
    {'title': 'porkmeatballsandlettucesaltysoup', 'date': '23.03.2022', 'description': 'Pork Meat Balls And Lettuce Salty Soup 豚団子とレタスの旨塩スープ'},
    {'title': 'nattocheesesweetsoursauce', 'date': '24.03.2022', 'description': 'Natto Cheese Sweet Sour Sauce 甘酢ねぎだれの納豆チーズ焼き'},
    {'title': 'onigiriwithsesameoilandsalt', 'date': '24.03.2022', 'description': 'Onigiri With Sesame Oil And Salt ごま油とお塩のやみつきおにぎり'},
    {'title': 'spinachchickencreampasta', 'date': '24.03.2022', 'description': 'Spinach Chicken Cream Pasta ほうれん草とチキンのクリームパスタ'},
    {'title': 'eggporridge', 'date': '25.03.2022', 'description': 'Egg Porridge たばご雑炊'},
    {'title': 'florentins', 'date': '25.03.2022', 'description': 'Florentins 卵焼き器でフロランタン'},
    {'title': 'spaghettigratin', 'date': '25.03.2022', 'description': 'Spaghetti Gratin スパゲッティグラタン'},
    {'title': 'baconeggcup', 'date': '26.03.2022', 'description': 'Bacon Egg Cup ベーコンエッグカップ'},
    {'title': 'cheeseinonigirimeatroll', 'date': '27.03.2022', 'description': 'Cheese In Onigiri Meat Roll チーズイン肉巻きおにぎりの照り煮'},
    {'title': 'garlicbuttersoysaucesalmonmeunière', 'date': '27.03.2022', 'description': 'Garlic Butter Soy Sauce Salmon Meunière 鮭のガリバタ醤油ムニエル'},
    {'title': 'gingerporkrollonigiri', 'date': '28.03.2022', 'description': 'Ginger Pork Roll Onigiri 生姜焼き肉巻きおにぎり'},
    {'title': 'hotsournoodle', 'date': '28.03.2022', 'description': 'Hot Sour Noodle サンラータン'},
    {'title': 'saltyspringonionroll', 'date': '29.03.2022', 'description': 'Salty Spring Onion Roll ネギ塩肉巻きおにぎり'},
    {'title': 'tomatotunacapellini', 'date': '29.03.2022', 'description': 'Tomato Tuna Capellini トマトとつなのそうめんカッペリーニ風'},
    {'title': 'angrychicken', 'date': '30.03.2022', 'description': 'Angry Chicken アングリーチキン'},
    {'title': 'foldcheesekimpa', 'date': '30.03.2022', 'description': 'Fold Cheese Kimpa 折りたたみチーズキンパ'},
    {'title': 'sweetpotatopudding', 'date': '30.03.2022', 'description': 'Sweet Potato Pudding スイートポテトプリン'},
    {'title': 'deepfriedeggplantandchickeninbroth', 'date': '31.03.2022', 'description': 'Deep Fried Eggplant And Chicken In Broth ナスと鶏肉の揚げびたし & クリーミーアボカド'},
    {'title': 'seaweedmochi', 'date': '31.03.2022', 'description': 'Seaweed Mochi 磯辺チーズ餅'},
    {'title': 'baumkuchen', 'date': '01.04.2022', 'description': 'Baumkuchen バウムクーヘン'},
    {'title': 'chickensteakandtomatoseaweednamuru', 'date': '01.04.2022', 'description': 'Chicken Steak And Tomato Seaweed Namuru ささみステーキ & トマトとワカメのナムル'},
    {'title': 'tunapotatogalette', 'date': '01.04.2022', 'description': 'Tuna Potato Galette ツナポテトガレット'},
    {'title': 'coconutschickenwithwokvegs', 'date': '02.04.2022', 'description': 'Coconuts Chicken With Wok Vegs ココナッツチキンとアジア野菜'},
    {'title': 'koreanricebowlonsenegg', 'date': '02.04.2022', 'description': 'Korean Rice Bowl Onsen Egg 韓国風温玉丼'},
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
