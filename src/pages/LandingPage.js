import React from "react";
import landingImage from "../assets/landing.jpg";
import {
  Box,
  Image,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <Box>
      <Image
        height="100%"
        width="100%"
        objectFit="cover"
        src={landingImage}
        alt="landing image"
      />
    </Box>
  );
};

export default LandingPage;
