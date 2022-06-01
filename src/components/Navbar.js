import React from "react";
import { Box, Flex, Button, Heading, HStack } from "@chakra-ui/react";
import { NavLink as ReactLink } from "react-router-dom";
import "@fontsource/roboto/700.css";

const Navbar = () => {
  return (
    <Box
      px="40px"
      py="20px"
      borderBottom={1}
      shadow="xl"
      position="sticky"
      top={0}
      width="full"
      alignItems="flex-end"
      bg="white"
    >
      <Flex
        minWidth="max-content"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading color="darkTeal.100" mr="auto">
          Hotel Search
        </Heading>
        <HStack
          fontSize="lg"
          fontWeight="400"
          justify="flex-end"
          spacing="40px"
          color="teal.100"
        >
          <ReactLink to="/">Home</ReactLink>
          <ReactLink to="/AboutUs">About Us</ReactLink>
          <ReactLink to="Checklist">Checklist</ReactLink>
          <ReactLink to="/SignUp">
            <Button
              fontSize="md"
              color="teal.100"
              bg="white.100"
              border="2px"
              _hover={{
                bg: "teal.100",
                color: "white.100",
              }}
            >
              Sign Up
            </Button>
          </ReactLink>
          <ReactLink to="/Login">
            <Button
              fontSize="md"
              color="white"
              bg="teal.100"
              _hover={{
                bg: "white.100",
                color: "teal.100",
                border: "2px",
              }}
            >
              Login
            </Button>
          </ReactLink>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
