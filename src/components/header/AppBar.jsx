import * as React from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import ImageLogo from '../../assets/img/logo512.png';
import { RewriteRep } from '../helper';

const pages = ["Home", "About", "Skill", "Contact"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ mt: 0.7,
              display: 'flex' }}>
            <img src={ImageLogo} className="navLogo App-logo"/>
            <Box sx={{ mt: 0,
                ml: 0.5,
                mr:3 }}>
              <h1 className="navh1">MyReactPortfolio</h1>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1,
              display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ mt: 0.7,
              display: {xs: "none",
              sx: 'flex' } }}>
            <img src={ImageLogo} className="navLogo App-logo"/>
            <Box sx={{ mt: 0,
                ml: 0.5,
                mr:3 }}>
              <h1 className="navh1">MyReactPortfolio</h1>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1,
              display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                href={RewriteRep(page)}
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
