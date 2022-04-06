import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from '@mui/material';
import ImageLogo from '../img/logo512.png';
import { TopContent, About, Skill, Career, Contact } from './index';

import '../css/style.css';
import '../App.css';

const LinkTab = (props) => {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const NavTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%', p:2, bgcolor: 'primary.main' }} className="txtColorW">
      <Box sx={{ display: 'flex', flexWrap: 'wrap', ml:1}}>
        <Box sx={{ mt: 0.7, display: 'flex' }}>
          <img src={ImageLogo} className="navLogo App-logo"/>
          <Box sx={{ mt: 0, ml: 0.5, mr:3 }}>
            <h1 className="navh1">MyReactPortfolio</h1>
          </Box>
        </Box>
        <Box className="nav">
          <Tabs value={value}
            TabIndicatorProps={{
              style: {
              backgroundColor: '#87ceeb',
              height: '2px'}
            }}
            onChange={handleChange} aria-label="nav tabs example">
            <LinkTab label="Home" href="/" />
            <LinkTab label="About" href="/about" />
            <LinkTab label="Skill" href="/skill" />
            <LinkTab label="Career" href="./career" />
            <LinkTab label="Contact" href="./contact" />
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

export default NavTabs;
