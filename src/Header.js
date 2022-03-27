import Navarea from './components/Navarea';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

function Header() {
  return (
      <Navarea
		    home={'TOP'}
        skill={'Skill'}
        career={'Career'}
      />
	);
}

export default Header;
