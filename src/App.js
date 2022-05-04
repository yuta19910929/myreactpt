import './App.css';
import "./assets/css/style.css";
import Router from './Router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Image6, Image7, Background　} from './components/index';

const App = () => {

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
