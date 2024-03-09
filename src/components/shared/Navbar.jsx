import React from 'react';
import { Box, Header, Nav, Anchor } from 'grommet';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Header background="brand" pad="medium" height="xxsmall">
      <Nav direction="row" gap="medium">
        <Anchor as={Link} to="/" label="Home" color="white" />
        <Anchor as={Link} to="/blog" label="Blog" color="white" />
        <Anchor as={Link} to="/about" label="About" color="white" />
      </Nav>
    </Header>
  );
};

export default Navbar;


