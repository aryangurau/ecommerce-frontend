import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Menu,
  MenuItem,
  Badge,
} from '@mui/material';
import {
  ShoppingCart,
  Person,
  Search,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background-color: white;
  color: black;
  box-shadow: none;
  border-bottom: 1px solid #eaeaea;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const Logo = styled(Typography)`
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const NavLinks = styled(Box)`
  display: flex;
  gap: 32px;
  align-items: center;
`;

const NavLink = styled(Button)`
  color: inherit;
  font-weight: 500;
  &:hover {
    background-color: transparent;
    color: #666;
  }
`;

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="lg">
        <StyledToolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { sm: 'none' } }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>

          <Logo onClick={() => navigate('/')}>
            FAVITA
          </Logo>

          <NavLinks sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <NavLink onClick={() => navigate('/')}>
              Home
            </NavLink>
            <NavLink onClick={() => navigate('/shop')}>
              Shop
            </NavLink>
            <NavLink onClick={() => navigate('/collections')}>
              Collections
            </NavLink>
            <NavLink onClick={() => navigate('/blog')}>
              Blog
            </NavLink>
          </NavLinks>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton color="inherit">
              <Search />
            </IconButton>
            <IconButton color="inherit">
              <Person />
            </IconButton>
            <IconButton color="inherit" onClick={() => navigate('/cart')}>
              <Badge badgeContent={0} color="primary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>
        </StyledToolbar>
      </Container>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ display: { sm: 'none' } }}
      >
        <MenuItem onClick={() => handleNavigate('/')}>Home</MenuItem>
        <MenuItem onClick={() => handleNavigate('/shop')}>Shop</MenuItem>
        <MenuItem onClick={() => handleNavigate('/collections')}>Collections</MenuItem>
        <MenuItem onClick={() => handleNavigate('/blog')}>Blog</MenuItem>
      </Menu>
    </StyledAppBar>
  );
};

export default Navbar;
