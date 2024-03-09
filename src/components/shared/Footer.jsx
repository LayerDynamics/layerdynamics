import React from 'react';
import { Box, Footer as GrommetFooter, Anchor } from 'grommet';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { TbBrandPrintables } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <GrommetFooter pad="small" justify="center">
      <Box direction="row" gap="medium" align="center">
        <Anchor href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" icon={<BsTwitterX />} />
        <Anchor href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" icon={<FaInstagram />} />
        <Anchor href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" icon={<FaYoutube />} />
        <Anchor href="https://www.printables.com/@LayerDynamic_1874138" target="_blank" rel="noopener noreferrer" aria-label="Printables" icon={<TbBrandPrintables />} />
      </Box>
    </GrommetFooter>
  );
};

export default Footer;
