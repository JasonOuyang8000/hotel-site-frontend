import React from "react";
import loginImage from "../assets/login.jpg";
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
  Image,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Box display="flex">
      <Image
        src={loginImage}
        alt="login image"
        height="100vh"
        width="55%"
        objectFit="cover"
      />

      <Container
        maxW="sm"
        py={{ base: "20", md: "40" }}
        px={{ base: "0", sm: "8" }}
      >
        <Stack spacing="6">
          <Stack textAlign="center">
            <Heading fontSize="3xl" color="darkTeal.100">
              Login
            </Heading>
          </Stack>
          <Box>
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" type="email" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Password</FormLabel>
                  <Input />
                </FormControl>
              </Stack>
              <HStack>
                <Button variant="link" color="darkTeal.100" size="md">
                  Forgot password?
                </Button>
              </HStack>
              <Stack spacing="6">
                <Button color="white" bg="teal.100">
                  Sign in
                </Button>

                <HStack>
                  <Text color="muted">Don't have an account?</Text>
                  <Button variant="link" color="darkTeal.100">
                    Create account
                  </Button>
                </HStack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Login;
