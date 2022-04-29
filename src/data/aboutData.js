import { returnCodeToBr } from '../components/helper.js';

const careers = [
  { 'date': '2013年9月〜2017年9月',
    'business':returnCodeToBr('LP・HP制作\n 広告代理業（リスティング広告）'),
    'language':returnCodeToBr('HTML\n CSS\n  JavaScript\n PHP\n VBA\n UWSC'),
    'tool':returnCodeToBr('mi\n WordPress\n Gimp\n FileZilla')},
  { 'date': '2017年10月〜2019年4月',
    'business': 'QA（カーナビ検証）',
    'language': returnCodeToBr('VBA\n Java\n SQL'),
    'tool': 'EXCEL'},
  { 'date': '2019年9月〜2022年3月',
    'business': returnCodeToBr('HP・LP制作・運用・修正\n バナー制作・画像修正\n 社内業務システム改修'),
    'language': returnCodeToBr('HTML5\n CSS3\n JavaScript\n jQuery\n PHP\n VBA\n'),
    'tool': returnCodeToBr('DreamWeaver\n Atom\n Photoshop\n illustrator\n Transmit\n FileZilla\n WordPress\n EXCEL')},
  ];

export default careers;
