import React, { useState } from "react";
import { Box, Heading, Input, Button, HStack, Select } from "@chakra-ui/react";
import ChecklistForm from "../components/ChecklistForm";

const Checklist = () => {
  const [inputText, setInputText] = useState("");

  const inputTextHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <Box px="20" py="20">
      <Heading textAlign="center">Checklist</Heading>
      <HStack>
        <Input
          onChange={inputTextHandler}
          size="md"
          placeholder="Type your todo"
        />
        <Button>Submit</Button>
        <Select py="20">
          <option>All</option>
          <option>Most Recent</option>
          <option>Completed</option>
          <option>Uncompleted</option>
        </Select>
      </HStack>
      <ChecklistForm />
    </Box>
  );
};

export default Checklist;
