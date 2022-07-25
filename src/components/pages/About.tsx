import React from 'react';
import { Box } from '@mui/material';
import { returnCodeToBr } from '../helper';
import { Background, Container1Column, Container2Column, Container2ColumnRev, CustomizedTables, H2 } from '../index';

const About = () => {

  return (
    <>
      <Background />
      <div id="all-contents" className="about-page">
        <Box sx={{
          width:{sm:'90%'},
          maxWidth: '100%',
          mx: "auto",
          mt:10,
          mb:10,
          textAlign:'center',
          p: 2 }}>
          <H2
            H2={'About'}
          />
        </Box>
        <Container1Column
          H3={'このサイトについて'}
          Txt={returnCodeToBr('このサイトはReact + Material UIで制作をしたポートフォリオサイトです。\n 自己紹介サイトが今までなかったのでReactで制作をしてみました。')}
        />
        <Container2Column
          H3={'プロフィール'}
          Txt={returnCodeToBr('名前：ゆた（公開しますのでHNとしています。）\n 生年月日：1991年9月29日\n  現住所：埼玉\n 出生地：福島県\n 趣味：音楽、海外ドラマ・映画鑑賞 ')}
          Style={'Column2 cyan-op'}
        />
        <Container2ColumnRev
          H3={'HP制作に興味をもつまで'}
          Txt={returnCodeToBr('一番最初にHP作成をした時は中学生の時でした。\n もちろん専門的な知識もあるはずもなく、「Yahooジオシティーズ」というサービスを利用し、調べながら感覚で作っていったことを覚えています。\n 趣味のサイトを作り、掲示板を掲載してことがきっかけで趣味仲間がネット上でできたのもその時が初めてでとても新鮮な気持ちでした。')}
          Txt_2={returnCodeToBr('高校から進学した後はしばらくは何も制作していませんでしたが、専門学校を卒業後ホームページを作って稼いでいきたいと思い、ランディングページ制作や広告代理業（リスティング広告）をするようになって行き、その時をきっかけにもっと新しい技術に触れたい思いからフロントエンドエンジニアを志すようになりました。')}
          Style={'Column2 magenta-op'}
        />
        <CustomizedTables
          H3={'これまでの業務と使用スキル'}
          Data={'期間'}
          Business={'業務内容'}
          Language={'言語'}
          Tool={'ツール・アプリ・CMS'}
        />
      </div>
    </>
	);
}

export default About;
