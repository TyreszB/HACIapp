import { Flex, Image, Text } from "@chakra-ui/react";
import HA420 from "../assets/Images/HondaJet.png";
import React from "react";

const Home = () => {
  return (
    <Flex justifyContent="center" gap={1}>
      <Image
        src={HA420}
        maxW="400px"
        paddingTop={5}
        display={{ base: "none", md: "block" }}
      />
    </Flex>
  );
};

export default Home;
