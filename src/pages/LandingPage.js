import React, { useState, useEffect } from "react";
import landingImage from "../assets/landing.jpg";
import {
  Box,
  Image,
  Button,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Heading,
} from "@chakra-ui/react";

import { sendEmail } from "../client";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("seenLandingPage", "seen");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email !== "") {
        await sendEmail(email);
        navigate("/");
      }
    } catch (error) {}
  };
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
            <form onSubmit={handleSubmit}>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    shadow="xl"
                    color={"white"}
                    bg="teal.100"
                    _hover={{ bg: "teal.100" }}
                    size="md"
                    type="submit"
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
