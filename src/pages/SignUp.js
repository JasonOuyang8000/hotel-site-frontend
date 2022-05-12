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
      <Container
        maxW="lg"
        py={{ base: "12", md: "24" }}
        px={{ base: "0", sm: "8" }}
      >
        <Stack spacing="8">
          <Stack spacing="6">
            <Stack spacing={{ base: "3", md: "4" }} textAlign="center">
              <Heading color="green.800">Register</Heading>
              <Heading color="darkGray.100" size="md">
                Create a new account
              </Heading>
            </Stack>
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
                  <FormLabel htmlFor="email">Username</FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">First name</FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Last name</FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Password</FormLabel>
                  <Input id="email" type="email" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Confirm Password</FormLabel>
                  <Input />
                </FormControl>
              </Stack>
              <HStack>
                <Text>Already have an account?</Text>
                <Button variant="link" colorScheme="blue">
                  Log in
                </Button>
              </HStack>
              <Stack>
                <Button colorScheme="blue">Sign in</Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default SignUp;
