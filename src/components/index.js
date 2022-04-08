//Headerナビゲーション　置き換え

export function RewriteRep(page) {
  let ReWrite;
  if('Home' == page){
    ReWrite = page.replace('Home','/')
  } else {
    ReWrite = page.toLowerCase()
  }
  return ReWrite;
}

export {default as TopLinkButton} from './elements/TopLinkButton'
export {default as Background} from './elements/Background'
export {default as EyeCatch} from './elements/EyeCatch'
export {default as TopContent} from './pages/TopContent'
export {default as About} from './pages/About'
export {default as Skill} from './pages/Skill'
export {default as Career} from './pages/Career'
export {default as Contact} from './pages/Contact'
export {default as Error} from './pages/Error'
