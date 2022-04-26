//React Routerでの遷移時、ページの一番上に表示させる処理

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    {/* 表示時にフワッと表示させる処理、呼び出し（GSAP） */}
    gsap.registerPlugin(ScrollTrigger)
    setAnimation()
  }, [pathname]);

  {/* 表示時にフワッと表示させる処理（GSAP） */}
  const setAnimation = () => {
    gsap.fromTo(
      '#all-contents',
      { opacity: 0, y: 10 }, //fromの設定
      { //toの設定
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: '#all-contents',
          start: 'top center', //要素のトップが、画面の中央まできたら開始
          end: 'bottom center', //要素のボトムが、画面の中央まできたら終了
          onEnter: () => {
            console.log('scroll In')
          },
          onEnterBack: () => {
            console.log('scroll Back')
          },
        },
      }
    )
  }

  return null;
}
