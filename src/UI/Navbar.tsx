import React from "react";
import Logo from "../assets/Images/logo.png";
import { Button, Flex, Image, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      margin={5}
      dir="row"
      justifyContent="space-between"
      alignItems="center"
      gap={3}
      borderBottomWidth="1px"
      borderBottomColor="black"
    >
      <Image height="100px" width="120px" src={Logo} />
      <Text textStyle="3xl" display={{ base: "none", md: "block" }}>
        Welcome To HACI Maintainence App
      </Text>
      <Button marginEnd={3}>Login</Button>
    </Flex>
  );
};

export default Navbar;
