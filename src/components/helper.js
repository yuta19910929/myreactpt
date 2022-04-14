//Headerナビゲーション "Home" ⇨　"/" 置き換え
export function RewriteRep(page) {
  let ReWrite;
  if('Home' === page){
    ReWrite = page.replace('Home','/')
  } else {
    ReWrite = page.toLowerCase()
  }
  return ReWrite;
}
