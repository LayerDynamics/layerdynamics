// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Text, Button } from 'grommet';

const NotFound = () => {
  return (
    <Box align="center" pad="large" background="background">
      <Heading level="1">404 Page Not Found</Heading>
      <Text size="large">Oops! The page you are looking for doesn't exist.</Text>
      <Text>
        It might have been removed, had its name changed, or is temporarily unavailable.
      </Text>
      <Button as={Link} to="/" label="Go to Home Page" primary />
    </Box>
  );
};

export default NotFound;

