import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const SignUp = () => {
  return (
    <Box bg="gray.100">
      <Container maxW="lg" px="8" py="20">
        <Stack spacing="8">
          <Stack spacing="3" textAlign="center">
            <Heading color="darkTeal.100">Register</Heading>
            <Heading color="darkGray.100" size="md">
              Create a new account
            </Heading>
          </Stack>
          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
            borderRadius={{ base: "none", sm: "xl" }}
            bg="white.100"
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="firstname">First name</FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="lastname">Last name</FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Confirm Password</FormLabel>
                  <Input />
                </FormControl>
              </Stack>
              <HStack>
                <Text>Already have an account?</Text>
                <Button variant="link" color="teal.100">
                  Log in
                </Button>
              </HStack>
              <Stack>
                <Button
                  color="white"
                  bg="teal.100"
                  _hover={{
                    bg: "white.100",
                    color: "teal.100",
                    border: "2px",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default SignUp;
