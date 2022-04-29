import HTMLReactParser from "html-react-parser"

//Headerナビゲーション "Home" ⇨　"/" 置き換え
export const RewriteRep = (page) => {
  let ReWrite;
  if('Home' === page){
    ReWrite = page.replace('Home','/')
  } else {
    ReWrite = page.toLowerCase()
  }
  return ReWrite;
}

//改行コード\nを、改行のHTMLタグ<br />に変換（ ライブラリ：html-react-parser ）
export const returnCodeToBr = (text) => {
  if (text === "") {
    return text
  } else {
    return HTMLReactParser(text.replace(/\r?\n/g, '<br/>'))
  }
};
