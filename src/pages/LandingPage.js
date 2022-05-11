import React from "react";
import landingImage from "../assets/landing.jpg";
import {
  Box,
  Image,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <Box position="relative">
      <Box
        position="absolute"
        width="100%"
        height="100%"
        bgGradient="linear-gradient(180deg,rgba(97,96,96,0) 0,rgba(0,0,0,0.54) 25.52%,rgba(1,1,1,0.54) 100%)"
      ></Box>
      <Image
        height="100vh"
        width="100vw"
        objectFit="cover"
        objectPosition="50% 50%"
        src={landingImage}
        alt="landing image"
      />
      <Box
        position="absolute"
        width="100%"
        justifyContent="center"
        top="25%"
        display="flex"
        color="white.100"
      >
        <Box>
          <Heading fontSize="5xl">Summer is around the corner</Heading>
          <Heading mb="20px" as="h4" size="lg">
            Find your next vacation spot
          </Heading>
          <Box>
            <form>
              <FormControl>
                <FormLabel fontWeight="bold" fontSize="lg" htmlFor="email">
                  Email address
                </FormLabel>
                <HStack alignItems="center">
                  <Input
                    color="black.100"
                    shadow="xl"
                    bg="white"
                    id="email"
                    type="email"
                  />
                  <Button
                    shadow="xl"
                    color={"white"}
                    bg={"yellow.700"}
                    _hover={{ bg: "yellow.700" }}
                    size="md"
                  >
                    Submit
                  </Button>
                </HStack>
              </FormControl>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
