import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import TopContent from './components/TopContent';

function App() {
  return (
		<div>
      <Header />
      <TopContent />
		</div>
	);
}

export default App;
