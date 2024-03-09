import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';
// Remove the import for '../Styles/About.css' if you decide to fully use Grommet for styling

const About = () => {
  return (
    <Box align="center" pad="medium">
      <Heading>About Us</Heading>
      <Paragraph textAlign="center" fill>
        Welcome to Layer Dynamics!
      </Paragraph>
      <Paragraph textAlign="center" fill>
        Founded in 2024 by someone who wanted to take the knowledge and tough to understand concepts within the 3D printing community and make them more accessible.
      </Paragraph>
      <Paragraph textAlign="center" fill>
        Thank you for visiting our site. I'm excited to share my journey with you and look forward to growing together.
      </Paragraph>
    </Box>
  );
};

export default About;
