import React from 'react';
import { Box, Heading, Paragraph, Button } from 'grommet';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box align="center" pad="large" background="background">
      <Heading>Welcome to Layer Dynamics</Heading>
      <Paragraph>
        Explore the latest trends, innovations, and tutorials in the world of 3D printing.
      </Paragraph>
      <Box direction="row" gap="medium" margin={{ top: 'medium' }}>
        <Button label="Read Latest Posts" primary as={Link} to="/blog" />
        <Button label="Learn About 3D Printing" as={Link} to="/about" />
      </Box>
    </Box>
  );
}

export default HomePage;
