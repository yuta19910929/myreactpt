import { Box } from '@mui/material';
import { BasicModal, H2 } from '../index';
import { returnCodeToBr } from '../helper.js';

const Skill = () => {

  const skillitems = [
    { 'title': 'HTML & CSS',
      'content': 'HTMLとCSSは今までのキャリアの中でメインで書いていました。現状は書いていて困ることも少なくなりました。\n HTML5、CSS3より以前の昔の書き方もある程度対応できます。\n SCSSに関心があり、現在勉強しております。',
      'star': 5},
    { 'title': 'JavaScript',
      'content': 'JavaScriptはHTMLとCSSの次に使用頻度が多かったです。\n JavaScriptを使用した改修や新規ウェブサイト制作の時使用しました。\n 今回Reactを使用して行く中で自身の弱い部分も見えてきた部分もあったため、今後の課題としてスキルアップしていきたいと考えています。',
      'star': 3},
    { 'title': 'jQuery',
      'content': 'jQueryも今までで使う機会が沢山ありました。\n 便利なプラグインがあった為、正直一から組むことは少なく、カスタマイズがメインでした。\n 「slick」「Remodal」を多く使用していました。',
      'star': 3},
    { 'title': 'React',
      'content': '当サイトはReactで制作しています。\n 「Vue.js」などの選択肢もありましたが、JSXの記法にとっつきやすさを感じてReactを採用しました。\n 色々なライブラリ（ReactRouter、MUI等）を使い、ひとまず一つのサイトとして形にすることができました。\n 今回はJavaScriptで書いていきましたが、今後はTypeScriptを使用し、色々なサイトを構築してみていきいとおもっています。',
      'star': 3},
    { 'title': 'PHP',
      'content': 'PHPはプログラミング学習サイト「Progate」さんで基礎の部分を学びました。\n 実務ではWordPressのカスタマイズ、運用で使用していました。\n しかし、特有WordPress特有のメソッドなどがほとんどで、あまりPHPをやっている気がせず・・。といった感覚です。 \n PHPLaravelにも関心がありますので、今後深掘りしていきたいと思っています。',
      'star': 2},
    { 'title': 'SQL',
      'content': 'SQLは以前に会社の研修で基本的な構文の学習をしました。\n（実際にデータを作ったり検索して取得したりするなど）\n 現状業務で実際に使用したことはありません。',
      'star': 2},
    { 'title': 'Java',
      'content': '一番初めにプログラミングを勉強するときに一番最初に学びました。\n Javaを初めに触ったことにより、JavaScriptだけでは知り得ない知識を得られたのは自分の中では大きかったと思っています。\n しかし、簡単な計算アプリを作ったきりそれ以降いじらずにいます。',
      'star': 1},
  ];

  return (
    <>
      <div className="skill-page">
        <Box sx={{ width: {sm:'70%'},
          maxWidth: '100%',
          mx: 'auto',
          mt: 10,
          mb: 10,
          textAlign: 'center',
          p: 2 }}>
          <H2
            h2={'Skill'}
          />
        </Box>
        <Box sx={{ width: {sm:'70%', xs:'100%'},
          maxWidth: '100%',
          mx: "auto",
          mb: 4,
          p: 2,
          display: 'flex',
          flexDirection: { xs:'column', sm:'row' },
          flexWrap: 'wrap',
          justifyContent: { sm:'space-between', xs:'center' }
        }}>
        {skillitems.map((item) => {
          return <BasicModal
            Title = {returnCodeToBr(item.title)}
            Content = {returnCodeToBr(item.content)}
            Star = {item.star}
          />
        })}
        </Box>
      </div>
    </>
	);
}

export default Skill;
