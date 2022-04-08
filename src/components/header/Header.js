import { AppBar } from '@mui/material';
import ResponsiveAppBar from './AppBar';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <ResponsiveAppBar />
    </header>
	);
}

export default Header;
