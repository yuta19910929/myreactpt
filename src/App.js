import React from 'react';
import './App.css';
import Router from './Router';
import Header from './components/Header';
import Footer from './components/Footer';
import TopContent from './components/TopContent';
import About from './components/About';

function App() {
  return (
		<main>
      <Header />
      <Router />
      <Footer />
		</main>
	);
}

export default App;
