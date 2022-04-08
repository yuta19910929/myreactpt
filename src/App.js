import { React } from "react";
import './App.css';
import "./assets/css/style.css";
import Router from './Router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

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
