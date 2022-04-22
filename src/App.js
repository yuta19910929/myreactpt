import { React, useEffect } from "react";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css';
import "./assets/css/style.css";
import Router from './Router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Image6, Image7, Background　} from './components/index';

const App = () => {

  //フワッと表示する機能実装
  useEffect(() => {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation()
  }, [])
  
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

  return (
		<main>
      <Header />
      <Background
        backImg_1={Image7}
        backImg_2={Image6}
      />
      <div id="all-contents">
        <Router/>
      </div>
      <Footer />
		</main>
	);
}

export default App;
