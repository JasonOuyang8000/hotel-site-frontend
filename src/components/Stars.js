import React from "react";
import { StarIcon } from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/react";

const Stars = ({ rating }) => {
  return (
    <HStack>
      {[...Array(rating).fill(1), ...Array(5 - rating).fill(0)].map((r, i) => (
        <StarIcon color={r === 1 ? "orange" : "darkGray.100"} key={i} />
      ))}
    </HStack>
  );
};

export default Stars;
