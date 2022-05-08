import React from "react";
import homeImage from "../assets/home.jpg";
import { Image, Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <Image
        height="600px"
        width="100%"
        objectFit="cover"
        src={homeImage}
        alt="home image"
      />
    </Box>
  );
};

export default Home;
