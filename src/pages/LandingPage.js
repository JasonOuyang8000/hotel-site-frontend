import React from "react";
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
      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="no-wrap"
        minH="70vh"
        px={8}
        mb={16}
      >
        <Stack></Stack>
      </Flex>
    </Box>
  );
};

export default LandingPage;
