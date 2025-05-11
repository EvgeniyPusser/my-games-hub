// import React from 'react'
// //TODO
// const Nav = () => {
//   return (
//     <div>Nav</div>
//   )
// }

// export default Nav

import React from 'react';
import { Flex, Image, Spacer } from '@chakra-ui/react';
import { ColorModeButton } from './ui/color-mode'; // Assuming you have the ColorModeButton component

const Nav = () => {
  return (
    <Flex
      as="nav"
      p={4}
      bg="transparent"
      align="center"
      justify="space-between"
    >
      {/* Logo on the left */}
      <Image src="image.png" width="50px" alt="Logo" />

      {/* Spacer between Logo and Color Mode Button */}
      <Spacer />

      {/* Color Mode Button on the right */}
      <ColorModeButton />
    </Flex>
  );
};

export default Nav;
