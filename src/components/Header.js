import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import NavTabs from './NavTabs';

const Header = () => {
  return (
    <header>
      <NavTabs />
    </header>
	);
}

export default Header;
