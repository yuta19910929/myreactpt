import {Image1 ,Image2 ,Image3} from '../components/index';

//Topページデータ
type topData = {
  link: string;
  Image: string;
  Title: string;
  Txt: string;
}[];

export const topitems: topData = [
  { link: '/About',
    Image: Image1,
    Title: 'About',
    Txt: '簡単な自己紹介とキャリアについて'},
  { link: '/Skill',
    Image: Image2,
    Title: 'Skill',
    Txt: 'これまでに勉強してきた言語やツールについて'},
  { link: '/Contact',
    Image: Image3,
    Title: 'Conact',
    Txt: 'お問合せフォームはこちら'},
];

//Aboutページデータ

type aboutData = {
  date: string;
  business: string;
  language: string;
  tool: string;
}[];

export const careers: aboutData = [
  { date: '2013年9月〜2017年9月',
    business: 'LP・HP制作\n広告代理業（リスティング広告）',
    language: 'HTML\n CSS\n  JavaScript\n PHP\n VBA\n UWSC',
    tool:'mi\n WordPress\n Gimp\n FileZilla'},
  { date: '2017年10月〜2019年4月',
    business: 'QA（カーナビ検証）',
    language: 'VBA\n Java\n SQL',
    tool: 'EXCEL'},
  { date: '2019年9月〜2022年3月',
    business: 'HP・LP制作・運用・修正\n バナー制作・画像修正\n 社内業務システム改修',
    language: 'HTML5\n CSS3\n JavaScript\n jQuery\n PHP\n VBA\n',
    tool: 'DreamWeaver\n Atom\n Photoshop\n illustrator\n Transmit\n FileZilla\n WordPress\n EXCEL'},
  ];

//Skillページデータ

type SkillData = {
  Title: string;
  Content: string;
  Star: number;
}[];

export const skillitems:SkillData = [
  { Title: 'HTML & CSS',
    Content: 'HTMLとCSSは今までのキャリアの中でメインで書いていました。現状は書いていて困ることも少なくなりました。\n HTML5、CSS3より以前の昔の書き方もある程度対応できます。\n SCSSに関心があり、現在勉強しております。',
    Star: 5},
  { Title: 'JavaScript',
    Content: 'JavaScriptはHTMLとCSSの次に使用頻度が多かったです。\n JavaScriptを使用した改修や新規ウェブサイト制作の時使用しました。\n 今回Reactを使用して行く中で自身の弱い部分も見えてきた部分もあったため、今後の課題としてスキルアップしていきたいと考えています。',
    Star: 3},
  { Title: 'jQuery',
    Content: 'jQueryも今までで使う機会が沢山ありました。\n 便利なプラグインがあった為、正直一から組むことは少なく、カスタマイズがメインでした。\n 「slick」「Remodal」を多く使用していました。',
    Star: 3},
  { Title: 'React',
    Content: '当サイトはReactで制作しています。\n 「Vue.js」などの選択肢もありましたが、JSXの記法にとっつきやすさを感じてReactを採用しました。\n 色々なライブラリ（ReactRouter、MUI等）を使い、ひとまず一つのサイトとして形にすることができました。\n 今回はJavaScriptで書いていきましたが、今後はTypeScriptを使用し、色々なサイトを構築してみていきいとおもっています。',
    Star: 3},
  { Title: 'PHP',
    Content: 'PHPはプログラミング学習サイト「Progate」さんで基礎の部分を学びました。\n 実務ではWordPressのカスタマイズ、運用で使用していました。\n しかし、特有WordPress特有のメソッドなどがほとんどで、あまりPHPをやっている気がせず・・。といった感覚です。 \n PHPLaravelにも関心がありますので、今後深掘りしていきたいと思っています。',
    Star: 2},
  { Title: 'SQL',
    Content: 'SQLは以前に会社の研修で基本的な構文の学習をしました。\n（実際にデータを作ったり検索して取得したりするなど）\n 現状業務で実際に使用したことはありません。',
    Star: 2},
  { Title: 'Java',
    Content: '一番初めにプログラミングを勉強するときに一番最初に学びました。\n Javaを初めに触ったことにより、JavaScriptだけでは知り得ない知識を得られたのは自分の中では大きかったと思っています。\n しかし、簡単な計算アプリを作ったきりそれ以降いじらずにいます。',
    Star: 1},
];