import React, { useState } from "react";
import {
  Input,
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Container,
} from "@chakra-ui/react";
import homeImage from "../assets/home.jpg";
import { hotelSearch } from "../api/search";

const Search = ({ setData, setShowSearchBar }) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await hotelSearch(value);
    setData(data);
    setValue("");
    setShowSearchBar(false);
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
        height="700px"
        width="100%"
        objectFit="cover"
        src={homeImage}
        alt="home image"
      />
      <Box position="absolute" width="100%" justifyContent="center" top="20%">
        <Box position="relative" textAlign="center" mb="40px">
          <Heading color="white.100" fontSize="5xl" fontWeight="slim">
            Book your stay
          </Heading>
        </Box>
        <Container maxW="2xl" bg="white" py="30px" borderRadius="2xl">
          <form onSubmit={handleSubmit}>
            <HStack alignItems="center" spacing="10">
              <Input
                value={value}
                onChange={handleChange}
                placeholder="Where can we take you?"
                fontWeight="bold"
                size="md"
              />
              <Button
                type="submit"
                size="md"
                height="45px"
                width="200px"
                borderRadius="3xl"
                color="white"
                bg="teal.100"
                _hover={{
                  bg: "white.100",
                  color: "teal.100",
                  border: "2px",
                }}
              >
                Find Hotels
              </Button>
            </HStack>
          </form>
        </Container>
      </Box>
    </Box>
  );
};

export default Search;
