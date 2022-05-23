import React from 'react';
import './App.css';
import "./assets/css/style.css";
import Router from './Router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Background } from './components/index';

const App: React.FC = () => {

  return (
		<main>
      <Header />
      <Background/>
        <div id="all-contents">
          <Router/>
        </div>
      <Footer />
		</main>
	);
}

export default App;
