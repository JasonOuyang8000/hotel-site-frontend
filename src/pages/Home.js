import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import Search from "../components/Search";
import SearchList from "../components/SearchList";

const Home = () => {
  const [data, setData] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(true);

  return (
    <Box>
      {showSearchBar && (
        <Search setData={setData} setShowSearchBar={setShowSearchBar} />
      )}
      {!showSearchBar && (
        <SearchList data={data} setShowSearchBar={setShowSearchBar} />
      )}
      {!showSearchBar && (
        <Button onClick={() => setShowSearchBar(true)}>Go Back</Button>
      )}
    </Box>
  );
};

export default Home;
