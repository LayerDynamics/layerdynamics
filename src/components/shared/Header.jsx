// import React from 'react';
// import { Box, Header, Image } from 'grommet';
// import Navbar from './Navbar'; // Ensure this path is correct based on your project structure
// import Logo from '../../assets/Layer 2.png';

// const AppHeader = () => {
//   return (
//     <Header background="brand" pad="small" height="xsmall" align="center">
//       <Box height="xxsmall" width="xxsmall">
//         <Image src={Logo} alt="logo" fit="contain" />
//       </Box>
//       <Navbar />
//     </Header>
//   );
// };

// export default AppHeader;
import React from 'react'
import { Header as GrommetHeader, Box, Image } from 'grommet'
import Navbar from './Navbar' // Ensure this path is correct based on your project structure
import Logo from '../../assets/Layer 2.png'

const Header = () => {
  return (
    <GrommetHeader background='brand' pad='small' height='small' align='center'>
      <Box height='medium' width='small'>
        <Image src={Logo} alt='Logo' fit='contain' />
      </Box>
      <Box height='xxsmall' width='xxsmall' />
      <Navbar />
    </GrommetHeader>
  )
}

export default Header
