import React from "react";
import { Box, Flex, Button, Heading, HStack, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box>
      <Flex
        px="200px"
        py="20px"
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"font.800"}
        width="full"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Flex
          color="font.800"
          minWidth="max-content"
          alignItems="center"
          gap="2"
        >
          <Heading mr="60px" fontSize={20} letterSpacing="1.5px">
            Hotel Search
          </Heading>
          <HStack justify={"flex-end"} spacing="40px">
            <Link>Home</Link>
            <Link>About Us</Link>
            <Link>Sign Up</Link>
            <Button
              gap="2"
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"font.700"}
              variant="solid"
            >
              Login
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
