import React from "react";
import { NavLink as ReactLink } from "react-router-dom";
import { Flex, Box, Text, Button, Image } from "@chakra-ui/react";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => {
  return (
    <Flex
      flexWrap="wrap"
      w="420px"
      p="5"
      paddingTop="0px"
      justifyContent="flex-start"
      cursor="pointer"
    >
      <Box>
        <Image src={imageUrl} width={400} height={260} />
      </Box>
      <Box w="full">
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
          <Text fontSize="sm" fontWeight="medium">
            {purpose}
          </Text>
          <Text fontSize="3xl" fontWeight="bold">
            {title1}
            <br />
            {title2}
          </Text>
          <Text fontSize="lg" paddingTop="3" paddingBottom="3">
            {desc1}
            <br />
            {desc2}
          </Text>
        </Flex>
        <Button fontSize="xl">
          <ReactLink href={linkName}>{buttonText}</ReactLink>
        </Button>
      </Box>
    </Flex>
  );
};

export default Banner;
