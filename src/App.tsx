import React from 'react';
import './App.css';
import "./assets/css/style.css";
import Router from './Router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  
  return (
		<main>
      <Header />
        <Router/>
      <Footer />
		</main>
	);
}

export default App;
