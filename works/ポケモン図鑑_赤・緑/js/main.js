const pokemonData = [
    { id: "001", name: "フシギダネ", category:"たねポケモン", type:"くさ　どく", height: "0.7m", weight: "6.9kg", description: "うまれたときから　せなかに<br>しょくぶつの　タネが　あって<br>すこしづつおおきく　そだつ。" },
　　{ id: "002", name: "フシギソウ", category:"たねポケモン", type:"くさ　どく", height: "1.0m", weight: "13.0kg", description: "つぼみが　せなかに　ついていて<br>ようぶんを　きゅうしゅうしていくと<br>おおきな　はなが　さくという。" },
　　{ id: "003", name: "フシギバナ", category:"たねポケモン", type:"くさ　どく", height: "2.0m", weight: "100.0kg", description: "はなから　うっとりする　かおりが<br>ただよい　たたかうものの<br>きもちをなだめてしまう。" },
    { id: "004", name: "ヒトカゲ", category:"とかげポケモン", type:"ほのお", height: "0.6m", weight: "8.5kg", description: "うまれたときから　しっぽに　ほのおが<br>ともっている。ほのおが　きえたとき<br>その　いのちは　おわって　しまう。" },
    { id: "005", name: "リザード", category:"かえんポケモン", type:"ほのお", height: "1.1m", weight: "19.0kg", description: "シッポを　ふりまわして　あいてを<br>なぎたおし　するどい　ツメで<br>ズタズタに　ひきさいてしまう。" },
    { id: "006", name: "リザードン", category:"かえんポケモン", type:"ほのお　ひこう", height: "1.7m", weight: "90.5kg", description: "ちじょう　１４００メートル　まで<br>ハネを　つかって　とぶことができる。<br>こうねつの　ほのおを　はく。" },
    { id: "007", name: "ゼニガメ", category:"かめのこポケモン", type:"みず", height: "0.5m", weight: "9.0kg", description: "ながい　くびを　こうらのなかに<br>ひっこめるとき　いきおいよく<br>みずでっぽうを　はっしゃする。" },
    { id: "008", name: "カメール", category:"かめポケモン", type:"みず", height: "1.0m", weight: "22.5kg", description: "ペットとして　にんきが　たかい。<br>また　けで　おおわれた　しっぽは<br>ながいきする　シンボルだ。" },
    { id: "009", name: "カメックス", category:"こうらポケモン", type:"みず", height: "1.6m", weight: "85.5kg", description: "からだが　おもたく　のしかかって<br>あいてを　きぜつさせる。<br>ピンチの　ときは　カラに　かくれる。" },
    { id: "010", name: "キャタピー", category:"いもむしポケモン", type:"むし", height: "0.3m", weight: "2.9kg", description: "みどりの　ひふに　おおわれている。<br>だっぴして　せいちょうすると<br>いとを　かけて　サナギに　かわる。" },
    { id: "011", name: "トランセル", category:"さなぎポケモン", type:"むし", height: "0.7m", weight: "9.9kg", description: "かたい　カラに　つつまれているが<br>なかみは　やわらかいので<br>つよい　こうげきには　たえられない。" },
    { id: "012", name: "バタフリー", category:"ちょうちょポケモン", type:"ひこう　むし", height: "1.1m", weight: "32.0kg", description: "ハネは　みずを　はじく　りんぷんに<br>まもられている。あめの　ひでも<br>そらを　とぶことが　できる。" },
    { id: "013", name: "ビードル", category:"けむしポケモン", type:"どく　むし", height: "0.3m", weight: "3.2kg", description: "もりや　くさちに　おおく　せいそく。<br>あたまの　さきに　５センチぐらいの<br>ちいさく　するどい　どくばりをもつ。" },
    { id: "014", name: "コクーン", category:"さなぎポケモン", type:"どく　むし", height: "0.6m", weight: "10.0kg", description: "おとなの　からだを　つくるための<br>いちじてきな　じょうたい。<br>じぶんでは　ほとんど　うごけない。" },
    { id: "015", name: "スピアー", category:"どくばちポケモン", type:"どく　むし", height: "1.0m", weight: "29.5kg", description: "しゅうだんで　あらわれることもある。<br>もうスピードで　とびまわり<br>おしりの　どくばりで　さしまくる。" },
    { id: "016", name: "ポッポ", category:"ことりポケモン", type:"ひこう　ノーマル", height: "0.3m", weight: "1.8kg", description: "たたかいは　すきではない。<br>くさむらの　なかに　かくれて<br>ちいさい　むしなどを　とらえる。" },
    { id: "017", name: "ピジョン", category:"とりポケモン", type:"ひこう　ノーマル", height: "1.1m", weight: "30.0kg", description: "あしの　ツメが　はったつしている。<br>エサの　タマタマを　つかんで<br>１００キロさきの　す　まで　はこぶ。" },
    { id: "018", name: "ピジョット", category:"とりポケモン", type:"ひこう　ノーマル", height: "1.5m", weight: "39.5kg", description: "うつくしい　ハネを　ひろげて<br>あいてを　いかくする。<br>マッハ２で　そらを　とびまわる。" },
    { id: "019", name: "コラッタ", category:"ねずみポケモン", type:"ノーマル", height: "0.3m", weight: "3.5kg", description: "キバは　ながくて　するどい。<br>いっしょう　のびつづけるので<br>かたい　モノを　かじって　けずる。" },
    { id: "020", name: "ラッタ", category:"ねずみポケモン", type:"ノーマル", height: "0.7m", weight: "18.5kg", description: "うしろあしの　ゆびは　３ぼんで<br>ちいさな　みずかきが　ついている。<br>かわを　およいで　わたる。" },
    { id: "021", name: "オニスズメ", category:"ことりポケモン", type:"ひこう　ノーマル", height: "0.3m", weight: "2.0kg", description: "いそがしく　あちこちを　とびまわる。<br>たいりょくは　すくないが<br>オウムがえしを　つかうと　てごわい。" },
    { id: "022", name: "オニドリル", category:"くちばしポケモン", type:"ひこう　ノーマル", height: "1.2m", weight: "38.0kg", description: "おおきな　つばさで　おおぞらを<br>とびつづけることが　できる。<br>１にち　おりなくても　だいじょうぶ。" },
    { id: "023", name: "アーボ", category:"へびポケモン", type:"どく", height: "2.0m", weight: "6.9kg", description: "くさちなどに　おおく　せいそくする。<br>したを　チロチロ　させて　まわりの<br>きけんを　かんじとる。" },
    { id: "024", name: "アーボック", category:"コブラポケモン", type:"どく", height: "3.5m", weight: "65.0kg", description: "おなかの　もようが　こわいかおに<br>みえる。よわいてきは　そのもようを<br>みただけで　にげだしてしまう。" },
    { id: "025", name: "ピカチュウ", category:"ねずみポケモン", type:"でんき", height: "0.4m", weight: "6.0kg", description: "ほっぺたの　りょうがわに<br>ちいさい　でんきぶくろを　もつ。<br>ピンチのときに　ほうでんする。" },
    { id: "026", name: "ライチュウ", category:"ねずみポケモン", type:"でんき", height: "0.8m", weight: "30.0kg", description: "でんげきは　１０まんボルトに<br>たっすることもあり　ヘタにさわると<br>インドぞうでも　きぜつする。" },
    { id: "027", name: "サンド", category:"ねずみポケモン", type:"じめん", height: "0.6m", weight: "12.0kg", description: "じめんに　あなを　ほって　すむ。<br>じぶんに　きけんが　せまると<br>まるくなって　みを　まもる。" },
    { id: "028", name: "サンドパン", category:"ねずみポケモン", type:"じめん", height: "1.0m", weight: "29.5kg", description: "すばしっこく　はしり　まわり<br>せなかの　ハリと　するどい　ツメの<br>こうげきが　とくい。" },
    { id: "029", name: "ニドラン♀", category:"どくばりポケモン", type:"どく", height: "0.4m", weight: "7.0kg", description: "ちいさくても　どくばりの　いりょくは<br>きょうれつで　ちゅういが　ひつよう。<br>メスのほうが　つのが　ちいさい。" },
    { id: "030", name: "ニドリーナ", category:"どくばりポケモン", type:"どく", height: "0.8m", weight: "20.0kg", description: "メスなので　せいかくは　おんこう。<br>くちから　だす　ちょうおんぱは<br>あいてを　まどわす　ちからがある。" },
    { id: "031", name: "ニドクイン", category:"ドリルポケモン", type:"どく　じめん", height: "1.3m", weight: "60.0kg", description: "かたくて　はりのような　ウロコが<br>からだを　おおっている。<br>こうふんすると　はりが　さかだつ。" },
    { id: "032", name: "ニドラン♂", category:"どくばりポケモン", type:"どく", height: "0.5m", weight: "9.0kg", description: "みみが　おおきく　とおくの　おとを<br>きくとき　はばたくように　うごく。<br>おこると　どくばりを　だす。" },
    { id: "033", name: "ニドリーノ", category:"どくばりポケモン", type:"どく", height: "0.9m", weight: "19.5kg", description: "おこりやすい　せいかく。<br>はったつした　ツノを　ふりまわして<br>ダイヤモンドも　くしざしに　する。" },
    { id: "034", name: "ニドキング", category:"ドリルポケモン", type:"どく　じめん", height: "1.4m", weight: "62.0kg", description: "いしのように　かたい　ひふと<br>ながく　のびた　ツノが　とくちょう。<br>ツノには　どくもあるので　ちゅうい。" },
    { id: "035", name: "ピッピ", category:"ようせいポケモン", type:"ノーマル", height: "0.6m", weight: "7.5kg", description: "あいくるしい　すがたから<br>ペットように　にんきが　ある。<br>ただし　なかなか　みつけられない。" },
    { id: "036", name: "ピクシー", category:"ようせいポケモン", type:"ノーマル", height: "1.3m", weight: "40.0kg", description: "みみが　よくて　１キロ　はなれた<br>ところで　おとした　はりのおとを<br>みごとに　ききわけられる。" },
    { id: "037", name: "ロコン", category:"きつねポケモン", type:"ほのお", height: "0.6m", weight: "9.9kg", description: "こどもだが　６ほんの　しっぽが<br>うつくしい。せいちょうすると<br>さらに　しっぽが　ふえる。" },
    { id: "038", name: "キュウコン", category:"きつねポケモン", type:"ほのお", height: "1.1m", weight: "19.9kg", description: "おうごんに　かがやく　たいもうと<br>９ほんの　ながい　しっぽを　もつ。<br>１０００ねんは　いきると　いわれる。" },
    { id: "039", name: "プリン", category:"ふうせんポケモン", type:"ノーマル", height: "0.5m", weight: "5.5kg", description: "まるくて　おおきい　ひとみで<br>さそいこみ　ここちよい　うたを<br>うたい　あいてを　ねむらせる。" },
    { id: "040", name: "プクリン", category:"ふうせんポケモン", type:"ノーマル", height: "1.0m", weight: "12.0kg", description: "キメ　こまかく　しなやかな<br>たいもうは　うっとりするほど。<br>けがわは　こうきゅうひんだ。" },
    { id: "041", name: "ズバット", category:"こうもりポケモン", type:"どく　ひこう", height: "0.8m", weight: "7.5kg", description: "りょうほうの　めが　そんざいしない。<br>くちから　ちょうおんぱを　だして<br>くらやみを　とびまわる。" },
    { id: "042", name: "ゴルバット", category:"こうもりポケモン", type:"どく　ひこう", height: "1.6m", weight: "55.0kg", description: "するどいキバで　かみついて<br>いちどに　３００シーシーの<br>ちを　すいとってしまう。" },
    { id: "043", name: "ナゾノクサ", category:"ざっそうポケモン", type:"くさ　どく", height: "0.5m", weight: "5.4kg", description: "べつめい　アルキメンデス。<br>よるに　なると　２ほんの　ねっこで<br>３００メートルも　あるくという。" },
    { id: "044", name: "クサイハナ", category:"ざっそうポケモン", type:"くさ　どく", height: "0.8m", weight: "8.6kg", description: "めしべが　はなつ　とてつもなく<br>くさい　においは　２キロさきまで<br>とどき　きを　うしなわせる。" },
    { id: "045", name: "ラフレシア", category:"フラワーポケモン", type:"くさ　どく", height: "1.2m", weight: "18.6kg", description: "せかいいち　おおきい　はなびらから<br>アレルギーを　おこす　かふんを<br>オニの　ように　ばらまく。" },
    { id: "046", name: "パラス", category:"きのこポケモン", type:"くさ　むし", height: "0.3m", weight: "5.4kg", description: "むしの　せなかに　はえているのは<br>とうちゅうかそう　という　キノコ。<br>そだつと　キノコもおおきくなる。" },
    { id: "047", name: "パラセクト", category:"きのこポケモン", type:"くさ　むし", height: "1.0m", weight: "29.5kg", description: "キノコの　カサから　どくほうしを<br>まきちらす。しかし　ちゅうごくでは<br>このほうしを　かんぽうやくに　する。" },
    { id: "048", name: "コンパン", category:"こんちゅうポケモン", type:"どく　むし", height: "1.0m", weight: "30.0kg", description: "くらやみでも　めが　レーダーの<br>やくわりをして　かつどうできる。<br>めから　ビームを　はっしゃする。" },
    { id: "049", name: "モルフォン", category:"どくがポケモン", type:"どく　むし", height: "1.5m", weight: "12.5kg", description: "はねに　りんぷんが　ついていて<br>ヒラヒラと　はばたくたびに<br>もうどくの　こなを　ばらまく。" },
    { id: "050", name: "ディグダ", category:"もぐらポケモン", type:"じめん", height: "0.2m", weight: "0.8kg", description: "ちちゅうの　あさいところを　いどう。<br>ほりすすんだあとは　じめんが<br>もりあがっているので　すぐわかる。" },
    { id: "051", name: "ダグトリオ", category:"もぐらポケモン", type:"じめん", height: "0.7m", weight: "33.3kg", description: "ちちゅうを　ほりすすんで<br>あいてが　ゆだんしているところを<br>べつの　ばしょから　こうげきする。" },
    { id: "052", name: "ニャース", category:"ばけねこポケモン", type:"ノーマル", height: "0.4m", weight: "4.2kg", description: "ひるまは　ねてばかりいる。<br>よるになると　めが　かがやき<br>なわばりを　あるきまわる。" },
    { id: "053", name: "ペルシアン", category:"シャムネコポケモン", type:"ノーマル", height: "1.0m", weight: "32.0kg", description: "きしょうが　はげしく　しっぽを<br>まっすぐ　たてたら　よう　ちゅうい。<br>とびがかって　かみつく　まえぶれだ。" },
    { id: "054", name: "コダック", category:"あひるポケモン", type:"みず", height: "0.8m", weight: "19.6kg", description: "いつも　ずつうに　なやまされている。<br>この　ずつうが　はげしくなると<br>ふしぎな　ちからを　つかいはじめる。" },
    { id: "055", name: "ゴルダック", category:"あひるポケモン", type:"みず", height: "1.7m", weight: "76.6kg", description: "てのひらが　みずかきに　なっていて<br>およぐのが　とくい。みずうみなどで<br>ゆうがな　すがたが　みかけられる。" },
    { id: "056", name: "マンキー", category:"ぶたざるポケモン", type:"かくとう", height: "0.5m", weight: "28.0kg", description: "みのこなしが　かるく　きょうぼうな<br>せいかく。おこって　あばれると<br>てが　つけられなくなる。" },
    { id: "057", name: "オコリザル", category:"ぶたざるポケモン", type:"かくとう", height: "1.0m", weight: "32.0kg", description: "いつも　もうれつに　おこっており<br>にげても　にげても<br>どこまでも　おいかけてくる。" },
    { id: "058", name: "ガーディ", category:"こいぬポケモン", type:"ほのお", height: "0.7m", weight: "19.0kg", description: "ひとなつこく　せいじつな　せいかく。<br>てきには　ほえて　かみつき<br>おいはらおう　とする。" },
    { id: "059", name: "ウインディ", category:"でんせつポケモン", type:"ほのお", height: "1.9m", weight: "155.0kg", description: "ちゅうごくの　いいつたえにある<br>でんせつの　ポケモン。ものすごい<br>スピードで　はしるという。" },
    { id: "060", name: "ニョロモ", category:"おたまポケモン", type:"みず", height: "0.6m", weight: "12.4kg", description: "スベスベした　くろいひふは　うすく<br>しめっている。ないぞうの　いちぶが<br>すけて　うずまきじょうに　みえる。" },
    { id: "061", name: "ニョロゾ", category:"おたまポケモン", type:"みず", height: "1.0m", weight: "20.0kg", description: "２ほんの　あしは　はったつしており<br>ちじょうで　くらせるのに　なぜか<br>すいちゅう　せいかつが　すき。" },
    { id: "062", name: "ニョロボン", category:"おたまポケモン", type:"みず　かくとう", height: "1.3m", weight: "54.0kg", description: "およぎが　とくいで　クロールや<br>バタフライが　できる。オリンピックの<br>せんしゅも　かなわないほど　はやい。" },
    { id: "063", name: "ケーシィ", category:"ねんりきポケモン", type:"エスパー", height: "0.9m", weight: "19.5kg", description: "１にち　１８じかんは　ねている。<br>ねむっている　あいだでも　さまざまな<br>ちょうのうりょくを　つかう。" },
    { id: "064", name: "ユンゲラー", category:"ねんりきポケモン", type:"エスパー", height: "1.3m", weight: "56.5kg", description: "あるあさのこと。ちょうのうりょく<br>しょうねんが　ベットから　めざめると<br>ユンゲラーに　へんしん　していた。" },
    { id: "065", name: "フーディン", category:"ねんりきポケモン", type:"エスパー", height: "1.5m", weight: "48.0kg", description: "ちからわざを　あまり　このまず<br>ちょうのうりょくを　じざいに<br>あやつって　あいてを　たおす。" },
    { id: "066", name: "ワンリキー", category:"かいりきポケモン", type:"かくとう", height: "0.8m", weight: "19.5kg", description: "ぜんしんが　きんにくに　なっており<br>こどもほどの　おおきさしかないのに<br>おとな　１００にんを　なげとばせる。" },
    { id: "067", name: "ゴーリキー", category:"かいりきポケモン", type:"かくとう", height: "1.5m", weight: "70.5kg", description: "つかれることのない　きょうじんな<br>にくたいを　もつ。おもい　にもつの<br>うんぱんなどの　しごとを　てつだう。" },
    { id: "068", name: "カイリキー", category:"かいりきポケモン", type:"かくとう", height: "1.6m", weight: "130.0kg", description: "はったつした　４ほんの　うでは<br>２びょうかんに　１０００ぱつの<br>パンチを　くりだすことができる。" },
    { id: "069", name: "マダツボミ", category:"フラワーポケモン", type:"くさ　どく", height: "0.7m", weight: "4.0kg", description: "ひとの　かおのような　ツボミから<br>でんせつの　マンドラゴラの　いっしゅ<br>ではないかと　ささやかれている。" },
    { id: "070", name: "ウツドン", category:"ハエとりポケモン", type:"くさ　どく", height: "1.0m", weight: "6.4kg", description: "ハッパの　ぶぶんは　カッターになって<br>あいてを　きりさく。くちからは<br>なんでも　とかす　えきたいを　はく。" },
    { id: "071", name: "ウツボット", category:"ハエとりポケモン", type:"くさ　どく", height: "1.7m", weight: "15.5kg", description: "ミツの　ような　かおりで　くちの<br>なかに　さそいこまれたら　さいご。<br>ようかいえきで　とかされてしまう。" },
    { id: "072", name: "メノクラゲ", category:"くらげポケモン", type:"どく　みず", height: "0.9m", weight: "45.5kg", description: "すいしょうの　ように　すきとおった<br>めだまから　ふしぎな　ひかりの<br>ビームを　はっしゃする。" },
    { id: "073", name: "ドククラゲ", category:"くらげポケモン", type:"どく　みず", height: "1.6m", weight: "55.0kg", description: "８０ぽん　の　しょくしゅが　じゆうに<br>うごく。さされると　どくに　おかされ<br>するどい　いたみが　はしる。" },
    { id: "074", name: "イシツブテ", category:"がんせきポケモン", type:"じめん　いわ", height: "0.4m", weight: "20.0kg", description: "まるくて　もちやすいので　つかんで<br>あいてに　なげて　ぶつける<br>イシツブテ　がっせんが　できる。" },
    { id: "075", name: "ゴローン", category:"がんせきポケモン", type:"じめん　いわ", height: "1.0m", weight: "105.0kg", description: "やまのなかの　さかみちを<br>あるいていると　ゴローンが<br>ころがって　くることが　ある。" },
    { id: "076", name: "ゴローニャ", category:"メガトンポケモン", type:"じめん　いわ", height: "1.4m", weight: "300.0kg", description: "がんばんのような　かたい　カラで<br>おおわれている。１ねんに　１かい<br>だっぴして　おおきくなる。" },
    { id: "077", name: "ポニータ", category:"ひのうまポケモン", type:"ほのお", height: "3.0m", weight: "30.0kg", description: "からだが　かるく　あしの　ちからが<br>ものすごい。１かいの　ジャンプで<br>とうきょうタワーも　とびこえる。" },
    { id: "078", name: "ギャロップ", category:"ひのうまポケモン", type:"ほのお", height: "1.7m", weight: "95.0kg", description: "じそくは　さいこう　２４０キロ。<br>メラメラ　もえながら　しんかんせんと<br>おなじ　スピードで　かけぬける。" },
    { id: "079", name: "ヤドン", category:"まぬけポケモン", type:"みず　エスパー", height: "1.2m", weight: "36.0kg", description: "いつも　ボーッとしていて　なにを<br>かんがえているか　わからない。<br>しっぽで　エサを　つるのが　とくい。" },
    { id: "080", name: "ヤドラン", category:"やどかりポケモン", type:"みず　エスパー", height: "1.6m", weight: "78.5kg", description: "ヤドンが　うみへ　エサを<br>とりにいったとき　シェルダーに<br>しっぽをかまれ　ヤドランになった。" },
    { id: "081", name: "コイル", category:"じしゃくポケモン", type:"でんき", height: "0.3m", weight: "6.0kg", description: "くうちゅうに　ういたまま　いどうして<br>さゆうの　ユニットから<br>でんじはなどを　ほうしゃする。" },
    { id: "082", name: "レアコイル", category:"じしゃくポケモン", type:"でんき", height: "1.0m", weight: "60.0kg", description: "ふくすうの　コイルが　れんけつして<br>きょうりょくな　じりょくせんと<br>こうでんあつを　ほうしゃする。" },
    { id: "083", name: "カモネギ", category:"かるがもポケモン", type:"ひこう　ノーマル", height: "0.8m", weight: "15.0kg", description: "じぶんの　すを　つくるための<br>しょくぶつの　クキを　いっぽん<br>いつも　もって　あるいている。" },
    { id: "084", name: "ドードー", category:"ふたごどりポケモン", type:"ひこう　ノーマル", height: "1.4m", weight: "39.2kg", description: "とつぜんへんいで　みつかった<br>ふたつの　あたまを　もつ　ポケモン。<br>じそくで　１００キロで　はしる。" },
    { id: "085", name: "ドードリオ", category:"みつごどりポケモン", type:"ひこう　ノーマル", height: "1.8m", weight: "85.2kg", description: "めったに　みつからない　ちんしゅ。<br>３つの　あたまは　よろこび　かなしみ<br>いかりの　かんじょうを　あらわす。" },
    { id: "086", name: "パウワウ", category:"あしかポケモン", type:"みず", height: "1.1m", weight: "90.0kg", description: "みずいろの　たいもうに　おおわれた<br>ひふは　ぶあつくて　じょうぶ。<br>れいか４０ど　でも　かつどうできる。" },
    { id: "087", name: "ジュゴン", category:"あしかポケモン", type:"みず　こおり", height: "1.7m", weight: "120.0kg", description: "ぜんしんが　まっしろな　けで<br>おおわれている。さむさに　つよく<br>むしろ　さむいほど　げんきになる。" },
    { id: "088", name: "ベトベター", category:"ヘドロポケモン", type:"どく", height: "0.9m", weight: "30.0kg", description: "つきからの　エックスせんをあびた<br>ヘドロが　ベトベターにへんかした。<br>きたないモノが　だいこうぶつ。" },
    { id: "089", name: "ベトベトン", category:"ヘドロポケモン", type:"どく", height: "1.2m", weight: "30.0kg", description: "ふだんは　じめんに　まざっていて<br>わからない。からだに　さわると<br>もうどくに　おかされる。" },
    { id: "090", name: "シェルダー", category:"２まいがいポケモン", type:"みず", height: "0.3m", weight: "4.0kg", description: "ダイヤモンドよりも　かたいカラに<br>おおわれている。しかし　なかは<br>いがいと　やわらかい。" },
    { id: "091", name: "パルシェン", category:"２まいがいポケモン", type:"みず　こおり", height: "1.5m", weight: "132.5kg", description: "カラが　ひじょうに　かたく<br>ナパームだんでも　こわせない。<br>こうげきするときだけ　ひらく。" },
    { id: "092", name: "ゴース", category:"ガスじょうポケモン", type:"どく　ゴースト", height: "1.3m", weight: "0.1kg", description: "うすい　ガスじょうの　せいめいたい。<br>ガスに　つつまれると<br>インドぞうも　２びょうで　たおれる。" },
    { id: "093", name: "ゴースト", category:"ガスじょうポケモン", type:"どく　ゴースト", height: "1.6m", weight: "0.1kg", description: "くらやみで　だれもいないのに<br>みられているような　きがしたら<br>そこに　ゴーストが　いるのだ。" },
    { id: "094", name: "ゲンガー", category:"シャドーポケモン", type:"どく　ゴースト", height: "1.5m", weight: "40.5kg", description: "やまで　そうなんしたとき<br>いのちをうばいに　くらやみから<br>あらわれることが　あるという。" },
    { id: "095", name: "イワーク", category:"いわへびポケモン", type:"じめん　いわ", height: "8.8m", weight: "210.0kg", description: "ふだんは　つちのなかに　すんでいる。<br>ちちゅうを　じそく　８０キロで<br>ほりながら　エサを　さがす。" },
    { id: "096", name: "スリープ", category:"さいみんポケモン", type:"エスパー", height: "1.0m", weight: "32.4kg", description: "ユメを　たべるという　でんせつの<br>いきもの　バクの　しそん。<br>さいみんじゅつが　とくいだ。" },
    { id: "097", name: "スリーパー", category:"さいみんポケモン", type:"エスパー", height: "1.6m", weight: "75.6kg", description: "ふりこのようなものを　もちあるく。<br>こどもに　さいみんじゅつを　かけて<br>どこかへ　つれさるじけんが　あった。" },
    { id: "098", name: "クラブ", category:"さわがにポケモン", type:"みず", height: "0.4m", weight: "6.5kg", description: "うみの　ちかくで　みつかる。<br>おおきな　ハサミは　もぎとっても<br>あとから　また　はえてくる。" },
    { id: "099", name: "キングラー", category:"はさみポケモン", type:"みず", height: "1.3m", weight: "60.0kg", description: "かたい　ハサミは　１まんばりきの<br>パワーを　もっているが<br>おおきすきて　うごきが　にぶい。" },
    { id: "100", name: "ビリリダマ", category:"ボールポケモン", type:"でんき", height: "0.5m", weight: "10.4kg", description: "しょうたい　ふめいの　いきもの。<br>いやなおとを　だしたり　とつぜん<br>じばくする　ことも　あるという。" },
    { id: "101", name: "マルマイン", category:"ボールポケモン", type:"でんき", height: "1.2m", weight: "66.6kg", description: "すこしの　しげきに　はんのうして<br>ばくはつする。バクダンボールという<br>あだなで　こわがられて　いる。" },
    { id: "102", name: "タマタマ", category:"たまごポケモン", type:"くさ　エスパー", height: "0.4m", weight: "2.5kg", description: "なにかの　たまごの　ようだが<br>じつは　しょくぶつの　タネにちかい<br>いきもの　であることが　わかった。" },
    { id: "103", name: "ナッシー", category:"やしのみポケモン", type:"くさ　エスパー", height: "2.0m", weight: "120.0kg", description: "あるく　ねったいうりん　とよばれる。<br>みの　ひとつひとつに　かおがあって<br>それぞれ　いしを　もっている。" },
    { id: "104", name: "カラカラ", category:"こどくポケモン", type:"じめん", height: "0.4m", weight: "6.5kg", description: "しにわかれた　ははおやの　ほねを<br>あたまに　かぶっている。さびしいとき<br>おおごえで　なくという。" },
    { id: "105", name: "ガラガラ", category:"ほねずきポケモン", type:"じめん", height: "1.0m", weight: "45.0kg", description: "からだも　ちいさく　もともと<br>よわかった。ホネを　つかうようになり<br>せいかくが　きょうぼうか　した。" },
    { id: "106", name: "サワムラー", category:"キックポケモン", type:"かくとう", height: "1.5m", weight: "49.8kg", description: "あしが　じゆうに　のびちぢみして<br>とおく　はなれている　ばあいでも<br>あいてを　けりあげることが　できる。" },
    { id: "107", name: "エビワラー", category:"パンチポケモン", type:"かくとう", height: "1.4m", weight: "50.2kg", description: "プロボクサーの　たましいが<br>のりうつっている。パンチのスピードは<br>しんかんせんよりも　はやい。" },
    { id: "108", name: "ベロリンガ", category:"なめまわしポケモン", type:"ノーマル", height: "1.2m", weight: "65.5kg", description: "したが　しんちょうの　２ばいもある。<br>エサをとったり　こうげきをしたりと<br>まるで　てのように　うごかせる。" },
    { id: "109", name: "ドガース", category:"どくガスポケモン", type:"どく", height: "0.6m", weight: "1.0kg", description: "うすい　バルーンじょうの　からだに<br>もうどくの　ガスが　つまっている。<br>ちかくにいると　くさい。" },
    { id: "110", name: "マタドガス", category:"どくガスポケモン", type:"どく", height: "1.2m", weight: "9.5kg", description: "ごくまれに　とつぜんへんいで<br>ふたごの　ちいさい　ドガースが<br>れんけつしたまま　でることがある。" },
    { id: "111", name: "サイホーン", category:"とげとげポケモン", type:"じめん　いわ", height: "1.0m", weight: "115.0kg", description: "あたまは　わるいが　ちからが　つよく<br>こうそうビルも　たいあたりで<br>コナゴナに　ふんさいする。" },
    { id: "112", name: "サイドン", category:"ドリルポケモン", type:"じめん　いわ", height: "1.9m", weight: "120.0kg", description: "しんかして　うしろあし　だけで<br>たつようになった。ツノで　つかれると<br>がんせきにも　あながあいてしまう。" },
    { id: "113", name: "ラッキー", category:"たまごポケモン", type:"ノーマル", height: "1.1m", weight: "34.6kg", description: "１にちに　いくつか　たまごを　うむ。<br>その　たまごは　えいよう　まんてんで<br>ものすごく　おいしい　らしい。" },
    { id: "114", name: "モンジャラ", category:"ツルじょうポケモン", type:"くさ", height: "1.0m", weight: "35.0kg", description: "ブルーの　つるしょくぶつが<br>からみあい　しょうたいは　みえない。<br>ちかずくものに　からみついてくる。" },
    { id: "115", name: "ガルーラ", category:"おやこポケモン", type:"ノーマル", height: "2.2m", weight: "80.0kg", description: "メスは　おなかの　ふくろに<br>こどもを　いれて　そだてる。<br>れんぞくパンチ　こうげきが　とくい。" },
    { id: "116", name: "タッツー", category:"ドラゴンポケモン", type:"みず", height: "0.4m", weight: "8.0kg", description: "ぜんまいのように　クルクルまかれた<br>しっぽで　からだの　バランスをとる。<br>くちから　スミを　はくことが　ある。" },
    { id: "117", name: "シードラ", category:"ドラゴンポケモン", type:"みず", height: "1.2m", weight: "25.0kg", description: "うかつに　さわろうとすると<br>からだじゅうに　はえる　トゲに<br>さされて　きぜつすることも　ある。" },
    { id: "118", name: "トサキント", category:"きんぎょポケモン", type:"みず", height: "0.6m", weight: "15.0kg", description: "せビレ　むなビレが　きんにくのように<br>はったつしており　すいちゅうを<br>５ノットの　はやさで　およぐ。" },
    { id: "119", name: "アズマオウ", category:"きんぎょポケモン", type:"みず", height: "1.3m", weight: "39.0kg", description: "ドリルのように　とがっているツノで<br>いわはだを　くりぬき<br>じぶんの　すを　つくっている。" },
    { id: "120", name: "ヒトデマン", category:"ほしがたポケモン", type:"みず", height: "0.8m", weight: "34.5kg", description: "うみべに　おおく　あらわれ<br>よるになると　ちゅうしんが<br>あかく　てんめつする。" },
    { id: "121", name: "スターミー", category:"なぞのポケモン", type:"みず　エスパー", height: "1.1m", weight: "80.0kg", description: "きかがくてきな　ボディーから<br>うちゅうせいぶつ　ではないかと<br>じもとでは　うたがわれている。" },
    { id: "122", name: "バリヤード", category:"バリアーポケモン", type:"エスパー", height: "1.3m", weight: "54.5kg", description: "ひとを　しんじこませるのが　うまい。<br>パントマイムで　つくったカベが<br>ほんとうに　あらわれるという。" },
    { id: "123", name: "ストライク", category:"かまきりポケモン", type:"ひこう　むし", height: "1.5m", weight: "56.0kg", description: "するどいカマで　えものを　きりさき<br>いきのねを　とめる。ごくまれに<br>ハネをつかって　とぶ。" },
    { id: "124", name: "ルージュラ", category:"ひとがたポケモン", type:"エスパー　こおり", height: "1.4m", weight: "40.6kg", description: "にんげんのような　ことばを　はなすが<br>まだ　なにをいっているか　ふめいで<br>げんざい　けんきゅうされている。" },
    { id: "125", name: "エレブー", category:"でんげきポケモン", type:"でんき", height: "1.1m", weight: "30.0kg", description: "つよい　でんきが　だいこうぶつで<br>おおきな　はつでんしょ　などに<br>しばしば　あらわれる。" },
    { id: "126", name: "ブーバー", category:"ひふきポケモン", type:"ほのお", height: "1.3m", weight: "44.5kg", description: "かざんの　かこうちかくで<br>みつかった。くちから　ほのおをはく。<br>たいおんは　１２００ど　もある。" },
    { id: "127", name: "カイロス", category:"くわがたポケモン", type:"むし", height: "1.5m", weight: "55.0kg", description: "２ほんの　ながい　ツノは　パワフル。<br>いちど　はさまれて　しまったら<br>ちぎれるまで　はなさない。" },
    { id: "128", name: "ケンタロス", category:"あばれうしポケモン", type:"ノーマル", height: "1.4m", weight: "88.4kg", description: "たいあたりしてくるとき<br>２ほんの　しっぽで　じぶんの<br>からだを　ピシピシと　たたく。" },
    { id: "129", name: "コイキング", category:"さかなポケモン", type:"みず", height: "0.9m", weight: "10.0kg", description: "ちからも　スピードも　ほとんどダメ。<br>せかいで　いちばん　よわくて<br>なさけない　ポケモンだ。" },
    { id: "130", name: "ギャラドス", category:"きょうあくポケモン", type:"ひこう　みず", height: "6.5m", weight: "235.0kg", description: "ひじょうに　きょうぼうな　せいかく。<br>くちからだす　はかいこうせんは<br>すべてのものを　やきつくす。" },
    { id: "131", name: "ラプラス", category:"のりものポケモン", type:"みず　こおり", height: "2.5m", weight: "220.0kg", description: "ひとのことばを　りかいする　たかい<br>ちのうをもつ。うみの　うえを<br>ひとをのせて　すすむのが　すき。" },
    { id: "132", name: "メタモン", category:"へんしんポケモン", type:"ノーマル", height: "0.3m", weight: "4.0kg", description: "からだの　さいぼうの　つくりを<br>じぶんで　くみかえて　ほかの<br>せいめいたいに　へんしんする。" },
    { id: "133", name: "イーブイ", category:"しんかポケモン", type:"ノーマル", height: "0.3m", weight: "6.5kg", description: "３しゅるいの　ポケモンに<br>しんかする　かのうせいを　もつ<br>めずらしい　ポケモンだ。" },
    { id: "134", name: "シャワーズ", category:"あわはきポケモン", type:"みず", height: "1.0m", weight: "29.0kg", description: "からだの　さいぼうの　つくりが<br>みずの　ぶんしと　にている。<br>みずに　とけると　みえなくなる。" },
    { id: "135", name: "サンダース", category:"かみなりポケモン", type:"でんき", height: "0.8m", weight: "24.5kg", description: "おこったり　おどろいたりすると<br>ぜんしんの　けが　はりの　ように<br>さかだって　あいてを　つらぬく。" },
    { id: "136", name: "ブースター", category:"ほのおポケモン", type:"ほのお", height: "0.9m", weight: "25.0kg", description: "たいないに　ほのおぶくろが　あり<br>ふかく　いきを　すいこんだあと<br>１７００ど　の　ひを　はく。" },
    { id: "137", name: "ポリゴン", category:"シージーポケモン", type:"ノーマル", height: "0.8m", weight: "36.5kg", description: "さいこうの　かがくりょくを　つかい<br>ついに　じんこうの　ポケモンを<br>つくることに　せいこうした。" },
    { id: "138", name: "オムナイト", category:"うずまきポケモン", type:"みず　いわ", height: "0.4m", weight: "7.5kg", description: "おおむかし　うみに　すんでいた<br>こだい　ポケモン。１０ぽんの　あしを<br>くねらせて　およぐ。" },
    { id: "139", name: "オムスター", category:"うずまきポケモン", type:"みず　いわ", height: "1.0m", weight: "35.0kg", description: "しょくしゅが　てあしの　ように<br>はったつ　してる。しがみつくと<br>どうじに　かみついて　くる。" },
    { id: "140", name: "カブト", category:"こうらポケモン", type:"みず　いわ", height: "0.5m", weight: "11.5kg", description: "こだい　せいぶつの　かせきから<br>さいせいしたポケモン。<br>かたい　カラで　みを　まもっている。" },
    { id: "141", name: "カブトプス", category:"こうらポケモン", type:"みず　いわ", height: "1.3m", weight: "40.5kg", description: "すいちゅうを　じゆうに　およぎ<br>するどい　カマで　えものを　とらえ<br>たいえきを　すいとってしまう。" },
    { id: "142", name: "プテラ", category:"かせきポケモン", type:"ひこう　いわ", height: "1.8m", weight: "59.0kg", description: "こはくに　のこされた　きょうりゅうに<br>いでんしから　ふっかつさせた。<br>たかいこえで　なきながら　とぶ。" },
    { id: "143", name: "カビゴン", category:"いねむりポケモン", type:"ノーマル", height: "2.1m", weight: "460.0kg", description: "１にちに　たべものを　４００キロ<br>たべないと　きが　すまない。<br>たべおわると　ねむってしまう。" },
    { id: "144", name: "フリーザー", category:"れいとうポケモン", type:"ひこう　こおり", height: "1.7m", weight: "55.4kg", description: "でんせつの　とりポケモンの　ひとつ。<br>ながい　しっぽが　たなびいて<br>とんでいく　すがたは　すばらしい。" },
    { id: "145", name: "サンダー", category:"でんげきポケモン", type:"ひこう　でんき", height: "1.6m", weight: "52.6kg", description: "でんせつの　とりポケモンの　ひとつ。<br>とぶときに　バチバチと　なにかの<br>はじけるような　おとがする。" },
    { id: "146", name: "ファイヤー", category:"かえんポケモン", type:"ほのお　ひこう", height: "2.0m", weight: "60.0kg", description: "でんせつの　とりポケモンの　ひとつ。<br>オレンジいろの　もえるようなハネが<br>みるものを　あっとうする。" },
    { id: "147", name: "ミニリュウ", category:"ドラゴンポケモン", type:"ドラゴン", height: "1.8m", weight: "3.3kg", description: "こどもでも　しんちょうは<br>２メートル　いじょう。だっぴを<br>くりかえして　おおきくなる。" },
    { id: "148", name: "ハクリュー", category:"ドラゴンポケモン", type:"ドラゴン", height: "4.0m", weight: "16.5kg", description: "うみや　みずうみなどに　すむという。<br>はねをもたないが　たまに　そらを<br>とぶ　すがたが　もくげきされる。" },
    { id: "149", name: "カイリュー", category:"ドラゴンポケモン", type:"ひこう　ドラゴン", height: "2.2m", weight: "210.0kg", description: "おおきな　たいかくで　そらを　とぶ。<br>ちきゅうを　やく１６じかんで<br>１しゅう　してしまう。" },
    { id: "150", name: "ミュウツー", category:"いでんしポケモン", type:"エスパー", height: "2.0m", weight: "122.0kg", description: "けんきゅうの　ために　いでんしを<br>どんどん　くみかえていった　けっか<br>きょうぼうな　ポケモンに　なった。" },
    { id: "151", name: "ミュウ", category:"しんしゅポケモン", type:"エスパー", height: "0.4m", weight: "4.0kg", description: "みなみアメリカに　せいそくする<br>ぜつめつしたはずの　ポケモン。<br>ちのうがたかく　なんでも　おぼえる。" },
];

// 半角数字を全角数字に変換する
function toFullWidth(number) {
    const halfWidth = '0123456789';
    const fullWidth = '０１２３４５６７８９';
    return number.split('').map(char => {
        const index = halfWidth.indexOf(char);
        return index !== -1 ? fullWidth[index] : char;
    }).join('');
}

const container = document.getElementById('card-container');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');
const popupImg = document.getElementById('popup-img');
const popupName = document.getElementById('popup-name');
const popupDescription = document.getElementById('popup-description');
const popupInfo = document.querySelector('.popup-info');
const popupId = document.getElementById('popup-id');
const popupCategory = document.getElementById('popup-category');
const popupType = document.getElementById('popup-type');
const popupHeight = document.getElementById('popup-height');
const popupWeight = document.getElementById('popup-weight');

// カード型にする
pokemonData.forEach(pokemon => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="card_img">
            <img src="./images/${pokemon.id}.JPG" alt="画像${pokemon.id}">
        </div>
        <p class="card_text">${pokemon.name}</p>
    `;
    
    // ポケモンの情報のとこ
    card.addEventListener('click', () => {
        popup.style.display = 'flex';
        popupImg.src = `./images/${pokemon.id}.JPG`;
        popupId.textContent = `No.${toFullWidth(pokemon.id.toString())}`;
        popupName.textContent = pokemon.name;
        popupCategory.textContent = `${pokemon.category || "未設定"}`;
        popupType.textContent = `タイプ　 ${pokemon.type || "未設定"}`;
        popupHeight.textContent = `たかさ　 ${toFullWidth(pokemon.height.toString())}`;
        popupWeight.textContent = `おもさ　 ${toFullWidth(pokemon.weight.toString())}`;
        popupDescription.innerHTML = pokemon.description.replace(/\n/g, '<br>'); // ポケモンの説明を改行するのに必要なやつ
        document.body.style.overflow = 'hidden';

        // トップへ戻るボタンを出さないようにする
        const topButton = document.querySelector(".top-button");
        topButton.style.display = "none";
    });

    // カードをコンテナに追加する
    container.appendChild(card);
});

// 閉じる ×ボタンver
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.body.style.overflowX = 'hidden';

    const topButton = document.querySelector(".top-button");
    topButton.style.display = "block";
});

// 閉じる ポップアップ外ver
popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.body.style.overflowX = 'hidden';

        const topButton = document.querySelector(".top-button");
        topButton.style.display = "block";
    }
});

// ポケモンの鳴き声
const cries = {
    "001": "./sounds/001.wav", "002": "./sounds/002.wav", "003": "./sounds/003.wav", "004": "./sounds/004.wav", "005": "./sounds/005.wav", "006": "./sounds/006.wav", "007": "./sounds/007.wav", "008": "./sounds/008.wav", "009": "./sounds/009.wav", "010": "./sounds/010.wav",
    "011": "./sounds/011.wav", "012": "./sounds/012.wav", "013": "./sounds/013.wav", "014": "./sounds/014.wav", "015": "./sounds/015.wav", "016": "./sounds/016.wav", "017": "./sounds/017.wav", "018": "./sounds/018.wav", "019": "./sounds/019.wav", "020": "./sounds/020.wav",
    "021": "./sounds/021.wav", "022": "./sounds/022.wav", "023": "./sounds/023.wav", "024": "./sounds/024.wav", "025": "./sounds/025.wav", "026": "./sounds/026.wav", "027": "./sounds/027.wav", "028": "./sounds/028.wav", "029": "./sounds/029.wav", "030": "./sounds/030.wav",
    "031": "./sounds/031.wav", "032": "./sounds/032.wav", "033": "./sounds/033.wav", "034": "./sounds/034.wav", "035": "./sounds/035.wav", "036": "./sounds/036.wav", "037": "./sounds/037.wav", "038": "./sounds/038.wav", "039": "./sounds/039.wav", "040": "./sounds/040.wav",
    "041": "./sounds/041.wav", "042": "./sounds/042.wav", "043": "./sounds/043.wav", "044": "./sounds/044.wav", "045": "./sounds/045.wav", "046": "./sounds/046.wav", "047": "./sounds/047.wav", "048": "./sounds/048.wav", "049": "./sounds/049.wav", "050": "./sounds/050.wav",
    "051": "./sounds/051.wav", "052": "./sounds/052.wav", "053": "./sounds/053.wav", "054": "./sounds/054.wav", "055": "./sounds/055.wav", "056": "./sounds/056.wav", "057": "./sounds/057.wav", "058": "./sounds/058.wav", "059": "./sounds/059.wav", "060": "./sounds/060.wav",
    "061": "./sounds/061.wav", "062": "./sounds/062.wav", "063": "./sounds/063.wav", "064": "./sounds/064.wav", "065": "./sounds/065.wav", "066": "./sounds/066.wav", "067": "./sounds/067.wav", "068": "./sounds/068.wav", "069": "./sounds/069.wav", "070": "./sounds/070.wav",
    "071": "./sounds/071.wav", "072": "./sounds/072.wav", "073": "./sounds/073.wav", "074": "./sounds/074.wav", "075": "./sounds/075.wav", "076": "./sounds/076.wav", "077": "./sounds/077.wav", "078": "./sounds/078.wav", "079": "./sounds/079.wav", "080": "./sounds/080.wav",
    "081": "./sounds/081.wav", "082": "./sounds/082.wav", "083": "./sounds/083.wav", "084": "./sounds/084.wav", "085": "./sounds/085.wav", "086": "./sounds/086.wav", "087": "./sounds/087.wav", "088": "./sounds/088.wav", "089": "./sounds/089.wav", "090": "./sounds/090.wav",
    "091": "./sounds/091.wav", "092": "./sounds/092.wav", "093": "./sounds/093.wav", "094": "./sounds/094.wav", "095": "./sounds/095.wav", "096": "./sounds/096.wav", "097": "./sounds/097.wav", "098": "./sounds/098.wav", "099": "./sounds/099.wav", "100": "./sounds/100.wav",
    "101": "./sounds/101.wav", "102": "./sounds/102.wav", "103": "./sounds/103.wav", "104": "./sounds/104.wav", "105": "./sounds/105.wav", "106": "./sounds/106.wav", "107": "./sounds/107.wav", "108": "./sounds/108.wav", "109": "./sounds/109.wav", "110": "./sounds/110.wav",
    "111": "./sounds/111.wav", "112": "./sounds/112.wav", "113": "./sounds/113.wav", "114": "./sounds/114.wav", "115": "./sounds/115.wav", "116": "./sounds/116.wav", "117": "./sounds/117.wav", "118": "./sounds/118.wav", "119": "./sounds/119.wav", "120": "./sounds/120.wav",
    "121": "./sounds/121.wav", "122": "./sounds/122.wav", "123": "./sounds/123.wav", "124": "./sounds/124.wav", "125": "./sounds/125.wav", "126": "./sounds/126.wav", "127": "./sounds/127.wav", "128": "./sounds/128.wav", "129": "./sounds/129.wav", "130": "./sounds/130.wav",
    "131": "./sounds/131.wav", "132": "./sounds/132.wav", "133": "./sounds/133.wav", "134": "./sounds/134.wav", "135": "./sounds/135.wav", "136": "./sounds/136.wav", "137": "./sounds/137.wav", "138": "./sounds/138.wav", "139": "./sounds/139.wav", "140": "./sounds/140.wav",
    "141": "./sounds/141.wav", "142": "./sounds/142.wav", "143": "./sounds/143.wav", "144": "./sounds/144.wav", "145": "./sounds/145.wav", "146": "./sounds/146.wav", "147": "./sounds/147.wav", "148": "./sounds/148.wav", "149": "./sounds/149.wav", "150": "./sounds/150.wav",
    "151": "./sounds/151.wav",
};

let currentAudio = null;

// 再生ボタンのとこ
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("play-sound-button")) {
        const button = event.target;

        const popupIdElement = document.getElementById("popup-id");
        const popupId = toHalfWidth(
            popupIdElement.textContent.trim().replace("No.", "").padStart(3, "0")
        );

        const soundPath = cries[popupId];
        const popupImg = document.getElementById("popup-img");

        if (soundPath) {
            if (currentAudio && !currentAudio.paused) {
                currentAudio.pause();
                button.classList.remove("playing");
                button.textContent = "▶";
            } else {
                if (currentAudio) {
                    currentAudio.pause();
                }
                currentAudio = new Audio(soundPath);
                currentAudio.play()
                    .then(() => {
                        button.classList.add("playing");
                        button.textContent = "⏸";

                    // ぶるぶる動かすやつ
                    popupImg.classList.add("shake-animation");

                    popupImg.addEventListener("animationend", () => {
                        popupImg.classList.remove("shake-animation");
                    }, { once: true });

                    })
                    .catch((error) => {
                        console.error("音声の再生に失敗しました:", error);
                    });

                // 鳴き声が終わったあとの
                currentAudio.addEventListener("ended", () => {
                    button.classList.remove("playing");
                    button.textContent = "▶";
                });
            }
        } else {
            alert("鳴き声のデータが見つかりません。");
        }
    }
});

// 半角数字を全角数字に変換する
function toHalfWidth(str) {
    return str.replace(/[０-９]/g, function (char) {
        return String.fromCharCode(char.charCodeAt(0) - 0xFEE0);
    });
}

// トップへ戻るボタンをスクロールしたら表示させるやつ
document.addEventListener("DOMContentLoaded", () => {
    const topButton = document.querySelector(".top-button");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    });
});

// トップへ戻るときにスムーズにさせるやつ
// document.addEventListener("DOMContentLoaded", () => {
//     const topButton = document.querySelector(".top-button a");

//     topButton.addEventListener("click", (event) => {
//         event.preventDefault();
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth",
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const topButton = document.querySelector(".top-button a");
    const headerNavLinks = document.querySelectorAll(".header_nav a");
    const offset = 50; // 通常時のオフセット（px）

    // トップボタンのスムーズスクロール
    topButton.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    // ヘッダーナビゲーションのスムーズスクロール
    headerNavLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1); // #を除去してIDを取得
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const isSmallScreen = window.innerWidth <= 600; // 600px以下か判定
                const adjustedPosition = isSmallScreen ? targetPosition : targetPosition - offset;

                window.scrollTo({
                    top: adjustedPosition,
                    behavior: "smooth",
                });
            }
        });
    });
});



// 線が中心から左右に伸びるやつ
document.addEventListener("scroll", () => {
    const mainWrapper = document.querySelector('.main_wrapper');
    const mainWrapperPosition = mainWrapper.getBoundingClientRect().top;

    if (mainWrapperPosition < window.innerHeight) {
        mainWrapper.classList.add('active');
    } else {
        mainWrapper.classList.remove('active');
    }
});


// おみくじ
document.getElementById('omikuji-button').addEventListener('click', function() {
    const results = ["大吉", "吉", "中吉", "小吉", "凶", "ポケ吉"];
    const randomResult = results[Math.floor(Math.random() * results.length)];
    document.getElementById('omikuji-result').textContent = `${randomResult}`;

    const pokemonData = {
        "大吉": [ 
            { name: "メタモン", image: "./images/132.JPG", comment: "メタモンが自分に変身して代わりに課題をやってくれる" },
            { name: "カイリュー", image: "./images/149.JPG", comment: "カイリューに乗って世界一周できる" }
        ],
        "吉": [ 
            { name: "ピッピ", image: "./images/035.JPG", comment: "とてもかわいいピッピを捕まえられる" },
            { name: "ラプラス", image: "./images/131.JPG", comment: "ラプラスに乗って海の向こうまで行ける" }
        ],
        "中吉": [ 
            { name: "コダック", image: "./images/054.JPG", comment: "コダックと同様に頭痛に悩まされる" },
            { name: "イシツブテ", image: "./images/074.JPG", comment: "イシツブテ合戦で友達と盛り上がれそう" }
        ],
        "小吉": [ 
            { name: "ピカチュウ", image: "./images/025.JPG", comment: "機嫌の悪いピカチュウから電撃を受ける" },
            { name: "カビゴン", image: "./images/143.JPG", comment: "家の前でカビゴンが寝てて家に入れなくなる" }
        ],
        "凶": [ 
            { name: "スピアー", image: "./images/015.JPG", comment: "大量のスピアーにものすごい速さで追いかけられる" },
            { name: "マルマイン", image: "./images/101.JPG", comment: "なにもしていないのにマルマインの自爆に巻き込まれる" }
        ],
        "ポケ吉": [ 
            { name: "ラッキー", image: "./images/113.JPG", comment: "すごくおいしいと噂のラッキーのたまごがたくさんもらえそう" },
            { name: "ミュウ", image: "./images/151.JPG", comment: "めったに会えない幻のポケモン、ミュウに出会えるかも" }
        ]
    };

    const selectedPokemon = pokemonData[randomResult][Math.floor(Math.random() * pokemonData[randomResult].length)];

    document.getElementById('omikuji-pokemon-img').src = selectedPokemon.image;
    document.getElementById('omikuji-pokemon-name').textContent = selectedPokemon.name;
    document.getElementById('omikuji-comment').textContent = selectedPokemon.comment;

    document.getElementById('omikuji-pokemon').style.display = 'block';

    document.getElementById('omikuji-pokemon').scrollIntoView({ behavior: 'smooth' });

    const omikujiButton = document.getElementById('omikuji-button');
    omikujiButton.textContent = "もう1回引く";

});

// おみくじのポケモンをクリックしたらポップアップを表示
document.getElementById('omikuji-pokemon').addEventListener('click', () => {
    const pokemonName = document.getElementById('omikuji-pokemon-name').textContent;

    // おみくじで選ばれたポケモンをpokemonDataから検索
    const selectedPokemon = pokemonData.find(pokemon => pokemon.name === pokemonName);

    if (selectedPokemon) {
        // ポップアップに情報を設定して表示
        popup.style.display = 'flex';
        popupImg.src = `./images/${selectedPokemon.id}.JPG`;
        popupId.textContent = `No.${toFullWidth(selectedPokemon.id.toString())}`;
        popupName.textContent = selectedPokemon.name;
        popupCategory.textContent = `${selectedPokemon.category || "未設定"}`;
        popupType.textContent = `タイプ　 ${selectedPokemon.type || "未設定"}`;
        popupHeight.textContent = `たかさ　 ${toFullWidth(selectedPokemon.height.toString())}`;
        popupWeight.textContent = `おもさ　 ${toFullWidth(selectedPokemon.weight.toString())}`;
        popupDescription.innerHTML = selectedPokemon.description.replace(/\n/g, '<br>');

        // スクロールを無効化
        document.body.style.overflow = 'hidden';

        // トップへ戻るボタンを非表示
        const topButton = document.querySelector(".top-button");
        topButton.style.display = "none";
    }
});
