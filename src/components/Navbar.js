import React from "react";
import { Box, Flex, Button, Heading, HStack, Link } from "@chakra-ui/react";
import { NavLink as ReactLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      px="200px"
      py="20px"
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={"green.800"}
      width="full"
      alignItems="flex-end"
    >
      <Flex
        color="green.800"
        minWidth="max-content"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading mr="auto" fontSize={20} letterSpacing="1.5px">
          Hotel Search
        </Heading>
        <HStack justify={"flex-end"} spacing="40px">
          <ReactLink to="/" exact={true}>
            Home
          </ReactLink>
          <ReactLink to="/AboutUs">
            <Link>About Us</Link>
          </ReactLink>
          <ReactLink to="/SignUp">
            <Link>Sign Up</Link>
          </ReactLink>
          <ReactLink to="/Login">
            <Button
              gap="2"
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"yellow.700"}
              _hover={{ bg: "yellow.700" }}
              variant="solid"
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
